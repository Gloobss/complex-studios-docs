import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import type { DocType } from '../../App';
import { useLanguage } from '../../contexts/LanguageContext';

const getRightTocs = (isEs: boolean) => ({
  laptop: [
    { id: 'laptop-install', label: isEs ? 'Instalación' : 'Installation' },
    { id: 'laptop-config', label: isEs ? 'Configuración Básica' : 'Basic Config' },
    { id: 'laptop-troubleshoot', label: isEs ? 'Solución de Problemas' : 'Troubleshooting' },
  ],
  restaurants: [
    { id: 'rest-intro', label: isEs ? 'Resumen' : 'Introduction' },
    { id: 'rest-install', label: isEs ? 'Instalación' : 'Installation' },
    { id: 'rest-features', label: isEs ? 'Características' : 'What\'s Inside' },
    { id: 'rest-config', label: isEs ? 'Configuración Interactiva' : 'Interactive Config' },
    { id: 'rest-builder', label: isEs ? 'Constructor Avanzado' : 'Advanced Builder' },
  ],
  frames: [
    { id: 'frames-intro', label: isEs ? 'Resumen' : 'Features Overview' },
    { id: 'frames-install', label: isEs ? 'Instalación' : 'Installation' },
    { id: 'frames-config', label: isEs ? 'Configuración Interactiva' : 'Interactive Config' },
    { id: 'frames-troubleshoot', label: isEs ? 'Solución de Problemas' : 'Troubleshooting' },
  ]
});

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

export function RightSidebar({ currentDoc }: { currentDoc: 'laptop' | 'restaurants' | 'frames' }) {
  const { language } = useLanguage();
  const isEs = language === 'es';
  const rightTocs = getRightTocs(isEs);
  const toc = rightTocs[currentDoc] || [];
  const [activeId, setActiveId] = useState(toc[0]?.id || '');

  useEffect(() => {
    // Reset active ID when changing docs
    setActiveId(toc[0]?.id || '');
    
    // Set a slight delay before observing to allow DOM to render
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          // Find the first intersecting entry that is highly visible
          const intersecting = entries.find(entry => entry.isIntersecting);
          if (intersecting) {
            setActiveId(intersecting.target.id);
          }
        },
        { rootMargin: '-10% 0px -70% 0px', threshold: 0 }
      );
  
      const sections = Array.from(document.querySelectorAll('section[id]'));
      sections.forEach((s) => observer.observe(s));
      
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [currentDoc, toc]);

  return (
    <motion.aside 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="hidden xl:flex w-72 flex-col gap-12 flex-shrink-0 pt-[4.5rem] pr-8 pl-4 sticky top-0 h-screen overflow-y-auto custom-scrollbar"
    >
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col font-display font-black text-[2.8rem] tracking-tighter uppercase leading-[0.85] px-2"
      >
        <a href="#" className="text-zinc-800 hover:text-white transition-colors duration-500 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{isEs ? 'Tienda' : 'Store'}</a>
        <a href="#" className="text-zinc-800 hover:text-[#5865F2] transition-colors duration-500 mt-[-2px] hover:drop-shadow-[0_0_15px_rgba(88,101,242,0.4)]">Discord</a>
        <a href="#" className="text-zinc-800 hover:text-[#c6ff3d] transition-colors duration-500 mt-[-2px] hover:drop-shadow-[0_0_15px_rgba(198,255,61,0.4)]">Server</a>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col text-sm relative"
      >
        {/* Glow effect backround for ToC */}
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
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c6ff3d] rounded-r-full shadow-[0_0_12px_rgba(198,255,61,0.6)]" 
                  />
                )}
                {/* Background active item hover */}
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicatorBg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
                    isActive ? 'text-[#c6ff3d] font-semibold border-transparent' : 'text-zinc-500 hover:text-zinc-200 border-white/[0.05] hover:border-white/[0.2] hover:bg-white/[0.02]'
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
