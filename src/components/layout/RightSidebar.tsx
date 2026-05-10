import { motion, type Variants } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { DocType } from '../../App';
import { useLanguage } from '../../contexts/LanguageContext';
import { brand } from '../../lib/brand';

const getRightTocs = (isEs: boolean) => ({
  laptop: [
    { id: 'laptop-install', label: isEs ? 'Instalación' : 'Installation' },
    { id: 'laptop-config', label: isEs ? 'Configuración Básica' : 'Basic Config' },
    { id: 'laptop-troubleshoot', label: isEs ? 'Solución de Problemas' : 'Troubleshooting' },
  ],
  restaurants: [
    { id: 'rest-intro', label: isEs ? 'Resumen' : 'Introduction' },
    { id: 'rest-install', label: isEs ? 'Instalación' : 'Installation' },
    { id: 'rest-features', label: isEs ? 'Características' : "What's Inside" },
    { id: 'rest-config', label: isEs ? 'Configuración Interactiva' : 'Interactive Config' },
    { id: 'rest-builder', label: isEs ? 'Constructor Avanzado' : 'Advanced Builder' },
  ],
  racing: [
    { id: 'racing-intro', label: isEs ? 'Resumen' : 'Introduction' },
    { id: 'racing-install', label: isEs ? 'Instalación' : 'Installation' },
    { id: 'racing-features', label: isEs ? 'Características' : "What's Inside" },
    { id: 'racing-config', label: isEs ? 'Configuración' : 'Configuration' },
    { id: 'racing-admin', label: isEs ? 'Editor in-game' : 'In-game editor' },
    { id: 'racing-troubleshoot', label: isEs ? 'Solución de Problemas' : 'Troubleshooting' },
  ],
  frames: [
    { id: 'frames-intro', label: isEs ? 'Resumen' : 'Features Overview' },
    { id: 'frames-install', label: isEs ? 'Instalación' : 'Installation' },
    { id: 'frames-config', label: isEs ? 'Configuración Interactiva' : 'Interactive Config' },
    { id: 'frames-troubleshoot', label: isEs ? 'Solución de Problemas' : 'Troubleshooting' },
  ],
  pausemenu: [
    { id: 'pausemenu-intro', label: isEs ? 'Resumen' : 'Introduction' },
    { id: 'pausemenu-install', label: isEs ? 'Instalación' : 'Installation' },
    { id: 'pausemenu-features', label: isEs ? 'Características' : "What's Inside" },
    { id: 'pausemenu-config', label: isEs ? 'Configuración' : 'Configuration' },
    { id: 'pausemenu-admin', label: isEs ? 'Editor in-game' : 'In-game editor' },
    { id: 'pausemenu-troubleshoot', label: isEs ? 'Solución de Problemas' : 'Troubleshooting' },
  ],
  album: [
    { id: 'album-intro', label: isEs ? 'Resumen' : 'Introduction' },
    { id: 'album-features', label: isEs ? 'Características' : "What's Inside" },
    { id: 'album-install', label: isEs ? 'Instalación' : 'Installation' },
    { id: 'album-config', label: isEs ? 'Configuración' : 'Configuration' },
    { id: 'album-matrix', label: isEs ? 'Soporte por inventario' : 'Inventory support' },
    { id: 'album-commands', label: isEs ? 'Comandos' : 'Commands' },
    { id: 'album-troubleshoot', label: isEs ? 'Solución de Problemas' : 'Troubleshooting' },
  ],
});

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

/* ---------------------------------------------------------------------------
 * CTA word — letter-by-letter bounce on hover, color shift, arrow reveal.
 * Used for the giant Tienda / Discord / Server links at the top of the
 * right sidebar. Each letter staggers up, the whole thing tints to the
 * brand color, and an external-link arrow slides in.
 * ------------------------------------------------------------------------- */

function CTAWord({
  text,
  href,
  hoverColor,
  glowColor,
}: {
  text: string;
  href: string;
  hoverColor: string;
  glowColor: string;
}) {
  const [hovered, setHovered] = useState(false);
  const letters = text.split('');

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative inline-flex items-start cursor-pointer select-none w-fit"
      style={{ filter: hovered ? `drop-shadow(0 0 18px ${glowColor})` : 'none', transition: 'filter 400ms ease' }}
    >
      <span className="flex">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            animate={{
              y: hovered ? -8 : 0,
              color: hovered ? hoverColor : 'rgb(63 63 70)', // zinc-700
            }}
            transition={{
              duration: 0.45,
              delay: hovered ? i * 0.035 : (letters.length - 1 - i) * 0.02,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {char === ' ' ? ' ' : char}
          </motion.span>
        ))}
      </span>
      <ArrowUpRight
        className="ml-1 mt-1 w-6 h-6 transition-all duration-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
        style={{ color: hovered ? hoverColor : 'rgb(63 63 70)' }}
        strokeWidth={2.5}
      />
    </a>
  );
}

/* ---------------------------------------------------------------------------
 * RightSidebar
 * ------------------------------------------------------------------------- */

export function RightSidebar({ currentDoc }: { currentDoc: DocType }) {
  const { language } = useLanguage();
  const isEs = language === 'es';
  if (currentDoc === 'home') return null;
  const rightTocs = getRightTocs(isEs);
  const toc = rightTocs[currentDoc] || [];
  const [activeId, setActiveId] = useState(toc[0]?.id || '');
  const visibleSetRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    setActiveId(toc[0]?.id || '');
    visibleSetRef.current.clear();

    const timer = setTimeout(() => {
      const tocIds = new Set(toc.map((t) => t.id));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) visibleSetRef.current.add(e.target.id);
            else visibleSetRef.current.delete(e.target.id);
          });

          // Pick the FIRST visible section in DOM order so the indicator
          // never gaps out and always tracks the topmost visible TOC entry.
          const sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];
          const firstVisible = sections.find(
            (s) => tocIds.has(s.id) && visibleSetRef.current.has(s.id),
          );
          if (firstVisible) setActiveId(firstVisible.id);
        },
        // Activate when a section enters the upper third of the viewport,
        // and stays active until it scrolls past the lower third.
        { rootMargin: '-15% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
      );

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((s) => observer.observe(s));

      return () => observer.disconnect();
    }, 120);

    return () => clearTimeout(timer);
  }, [currentDoc, toc]);

  return (
    <motion.aside
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="hidden xl:flex w-72 flex-col gap-12 flex-shrink-0 pt-[4.5rem] pr-8 pl-4 sticky top-0 h-screen overflow-y-auto custom-scrollbar"
    >
      {/* Giant CTA stack — Tienda · Discord · Server */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col gap-1 font-display font-black text-[2.8rem] tracking-tighter uppercase leading-[0.85] px-2"
      >
        <CTAWord
          text={isEs ? 'Tienda' : 'Store'}
          href={brand.urls.tebex}
          hoverColor="#ffffff"
          glowColor="rgba(255,255,255,0.35)"
        />
        <CTAWord
          text="Discord"
          href={brand.urls.discord}
          hoverColor="#5865F2"
          glowColor="rgba(88,101,242,0.45)"
        />
        <CTAWord
          text={isEs ? 'Sitio' : 'Site'}
          href={brand.urls.mainSite}
          hoverColor="#c6ff3d"
          glowColor="rgba(198,255,61,0.45)"
        />
      </motion.div>

      {/* TOC — scrollspy moves the lima bar smoothly between sections */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col text-sm relative"
      >
        <div className="absolute top-0 left-0 w-full h-[120%] bg-gradient-to-b from-[#c6ff3d]/[0.02] to-transparent pointer-events-none -m-4 p-4 rounded-3xl" />

        <h4 className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-5 pl-4 relative">
          {isEs ? 'En esta página' : 'On this page'}
        </h4>
        <ul className="space-y-1 relative">
          {toc.map((item) => {
            const isActive = activeId === item.id;
            return (
              <motion.li variants={itemVariants} key={item.id} className="relative">
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c6ff3d] rounded-r-full shadow-[0_0_12px_rgba(198,255,61,0.6)]"
                  />
                )}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicatorBg"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="absolute inset-0 bg-gradient-to-r from-[#c6ff3d]/10 to-transparent rounded-r-xl pointer-events-none"
                  />
                )}
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`block pl-4 py-2 text-[13.5px] transition-all duration-300 rounded-r-xl border-l-[2px] ${
                    isActive
                      ? 'text-[#c6ff3d] font-semibold border-transparent'
                      : 'text-zinc-500 hover:text-zinc-200 border-white/[0.05] hover:border-white/[0.2] hover:bg-white/[0.02]'
                  }`}
                >
                  {item.label}
                </a>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </motion.aside>
  );
}
