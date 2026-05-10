import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  Laptop,
  Utensils,
  Image as ImageIcon,
  Flag,
  Pause,
  BookOpen,
  ShoppingCart,
  BookText,
  Command,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react';
import type { DocType } from '../App';
import { useLanguage } from '../contexts/LanguageContext';
import { brand } from '../lib/brand';
import { VisitorCounter } from './ui/VisitorCounter';

/* ---------------------------------------------------------------------------
 * BlurWord — same letter-by-letter blur entry the marketing site uses, but
 * cycling through the three product names instead of verticals.
 * ------------------------------------------------------------------------- */

function BlurWord({ word, trigger }: { word: string; trigger: number }) {
  const letters = word.split('');
  const STAGGER = 45;
  const DURATION = 500;
  const HOLD = STAGGER * letters.length + DURATION + 200;

  const [letterStates, setLetterStates] = useState<{ opacity: number; blur: number }[]>(
    letters.map(() => ({ opacity: 0, blur: 18 }))
  );
  const [showGradient, setShowGradient] = useState(true);

  useEffect(() => {
    let frames: number[] = [];
    let timers: ReturnType<typeof setTimeout>[] = [];

    setLetterStates(letters.map(() => ({ opacity: 0, blur: 18 })));
    setShowGradient(true);

    letters.forEach((_, i) => {
      const t = setTimeout(() => {
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setLetterStates((prev) => {
            const next = [...prev];
            next[i] = { opacity: eased, blur: 18 * (1 - eased) };
            return next;
          });
          if (progress < 1) {
            const id = requestAnimationFrame(tick);
            frames.push(id);
          }
        };
        const id = requestAnimationFrame(tick);
        frames.push(id);
      }, i * STAGGER);
      timers.push(t);
    });

    const gt = setTimeout(() => setShowGradient(false), HOLD);
    timers.push(gt);

    return () => {
      frames.forEach(cancelAnimationFrame);
      timers.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  // Lima → cyan → violet → white cycle for the gradient sweep across letters.
  const palette = ['#c6ff3d', '#67e8f9', '#a78bfa', '#ffffff', '#c6ff3d'];

  return (
    <>
      {letters.map((char, i) => {
        const t = (i / Math.max(letters.length - 1, 1)) * (palette.length - 1);
        const lo = Math.floor(t);
        const hi = Math.min(lo + 1, palette.length - 1);
        const k = t - lo;
        const hex = (h: string) => [
          parseInt(h.slice(1, 3), 16),
          parseInt(h.slice(3, 5), 16),
          parseInt(h.slice(5, 7), 16),
        ];
        const [r1, g1, b1] = hex(palette[lo]);
        const [r2, g2, b2] = hex(palette[hi]);
        const r = Math.round(r1 + (r2 - r1) * k);
        const g = Math.round(g1 + (g2 - g1) * k);
        const b = Math.round(b1 + (b2 - b1) * k);
        return (
          <span
            key={i}
            style={{
              display: 'inline-block',
              opacity: letterStates[i]?.opacity ?? 0,
              filter: `blur(${letterStates[i]?.blur ?? 18}px)`,
              color: showGradient ? `rgb(${r},${g},${b})` : 'white',
              transition: 'color 0.4s ease',
            }}
          >
            {char === ' ' ? ' ' : char}
          </span>
        );
      })}
    </>
  );
}

/* ---------------------------------------------------------------------------
 * Home
 * ------------------------------------------------------------------------- */

export function Home({ onSelectDoc }: { onSelectDoc: (doc: DocType) => void }) {
  const { language } = useLanguage();
  const isEs = language === 'es';

  // Cycling product names for the BlurWord
  const products = ['CPX Laptop', 'CPX Restaurants', 'CPX Racing Hub', 'CPX Frames', 'CPX PauseMenu', 'CPX Album'];
  const [productIndex, setProductIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setProductIndex((p) => (p + 1) % products.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full">
      {/* ─────────── HERO ─────────── */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-16 max-w-[1280px] mx-auto pt-24 pb-12">
        {/* Giant background label — DOCS (pure white, transparent, bold stroke) */}
        <div
          aria-hidden
          className="pointer-events-none select-none absolute -top-4 right-0 lg:right-[-3rem] font-resolve leading-[0.78] z-0 whitespace-nowrap"
          style={{
            fontSize: 'clamp(9rem, 24vw, 26rem)',
            color: 'rgba(255,255,255,0.035)',
            WebkitTextStroke: '2.5px rgba(255,255,255,0.16)',
            letterSpacing: '-0.02em',
          }}
        >
          DOCS
        </div>

        {/* Eyebrow — pill chip with the Complex Studios logo */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 inline-flex items-center gap-3 mb-8 self-start py-1.5 pl-1.5 pr-4 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md"
        >
          <span className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center overflow-hidden">
            <img
              src="https://r2.fivemanage.com/kMtLpNIqKRhMGpzrcZnQY/cpxstu.png"
              alt="Complex Studios"
              className="w-5 h-5 object-contain"
              loading="eager"
            />
          </span>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#c6ff3d] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c6ff3d]" />
          </span>
          <span className="text-[11px] font-mono uppercase tracking-[0.35em] text-zinc-400">
            {isEs ? 'Centro de documentación · v1.0' : 'Documentation hub · v1.0'}
          </span>
        </motion.div>

        {/* Title — Resolve italic, 2 lines, with cycling product */}
        <motion.h1
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative z-10 font-resolve leading-[0.95] tracking-tight text-white"
          style={{ fontSize: 'clamp(2.75rem, 7vw, 6.5rem)' }}
        >
          <span className="block">
            {isEs ? 'Documentación' : 'Documentation'}
          </span>
          <span className="block">
            {isEs ? 'de ' : 'for '}
            <span className="relative inline-block">
              <BlurWord word={products[productIndex]} trigger={productIndex} />
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="relative z-10 mt-10 max-w-2xl text-[17px] md:text-[18.5px] text-zinc-400 leading-relaxed font-sans"
        >
          {isEs
            ? 'Configura cada script con un constructor interactivo, copia el resultado y pégalo en tu archivo. La salida está garantizada como Lua válido.'
            : 'Configure each script with an interactive builder, copy the result and paste it into your file. Output is guaranteed valid Lua.'}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="relative z-10 mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#c6ff3d] text-black font-semibold text-[14.5px] hover:bg-[#b0f020] transition-colors shadow-[0_0_30px_rgba(198,255,61,0.25)]"
          >
            {isEs ? 'Ver productos' : 'View products'}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={brand.urls.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-white text-[14.5px] hover:border-white/40 hover:bg-white/[0.04] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            {isEs ? 'Abrir Discord' : 'Open Discord'}
          </a>
          <a
            href={brand.urls.tebex}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-zinc-400 hover:text-white text-[14.5px] ml-2 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            {isEs ? 'Tienda' : 'Store'}
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="relative z-10 mt-20 flex items-start gap-10 lg:gap-16 flex-wrap"
        >
          {([
            { value: '5', label: isEs ? 'productos documentados' : 'products documented' },
            { value: 'ES · EN', label: isEs ? 'soporte bilingüe' : 'bilingual support' },
            { value: '100%', label: isEs ? 'Lua válido garantizado' : 'guaranteed valid Lua' },
            { value: <VisitorCounter />, label: isEs ? 'visitas a la documentación' : 'documentation visits' },
          ] as { value: ReactNode; label: string }[]).map((s, i) => (
            <div key={s.label} className="flex flex-col gap-1.5">
              <span
                className={`text-2xl md:text-3xl font-display text-white ${i === 0 ? 'word-gradient' : ''}`}
              >
                {s.value}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 max-w-[180px]">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em]">
            {isEs ? 'Productos abajo' : 'Products below'}
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-zinc-500 to-transparent" />
        </motion.div>
      </section>

      {/* ─────────── PRODUCTS ─────────── */}
      <section
        id="products"
        className="relative max-w-[1280px] mx-auto px-6 lg:px-16 py-24 scroll-mt-8"
      >
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-3">
              {isEs ? 'Catálogo' : 'Catalog'}
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-white tracking-tight">
              {isEs ? 'Selecciona un producto' : 'Pick a product'}
            </h2>
          </div>
          <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {/* CPX Laptop */}
          <ProductCard
            name="CPX Laptop"
            tagline={
              isEs
                ? 'Laptop con apps integradas, mail, documentos y multi-framework.'
                : 'Laptop with built-in apps, mail, documents and multi-framework support.'
            }
            icon={Laptop}
            accentClass="from-[#c6ff3d] to-[#8de000]"
            ringClass="hover:border-[#c6ff3d]/30 hover:shadow-[0_20px_80px_-20px_rgba(198,255,61,0.18)]"
            iconBgClass="from-[#c6ff3d] to-[#8de000]"
            shadowClass="shadow-[0_0_50px_rgba(198,255,61,0.4)] group-hover:shadow-[0_0_80px_rgba(198,255,61,0.6)]"
            buttonClass="bg-[#c6ff3d] hover:bg-[#b0f020] shadow-[0_0_20px_rgba(198,255,61,0.2)]"
            titleHoverClass="group-hover:text-[#c6ff3d]"
            miniIcon={Command}
            miniLabel="laptop"
            videoId="a0C0lolGTBs"
            onClick={() => onSelectDoc('laptop')}
          />

          {/* CPX Restaurants */}
          <ProductCard
            name="CPX Restaurants"
            tagline={
              isEs
                ? 'Cocina, deliveries, progresión y editor in-game para roleplay culinario.'
                : 'Cooking, deliveries, progression and in-game editor for culinary roleplay.'
            }
            icon={Utensils}
            accentClass="from-amber-400 to-amber-600"
            ringClass="hover:border-amber-500/30 hover:shadow-[0_20px_80px_-20px_rgba(245,158,11,0.18)]"
            iconBgClass="from-amber-400 to-amber-600"
            shadowClass="shadow-[0_0_50px_rgba(245,158,11,0.4)] group-hover:shadow-[0_0_80px_rgba(245,158,11,0.6)]"
            buttonClass="bg-amber-500 hover:bg-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
            titleHoverClass="group-hover:text-amber-400"
            miniIcon={Utensils}
            miniLabel="restaurants"
            videoId="ybhdrZsjqtg"
            onClick={() => onSelectDoc('restaurants')}
          />

          {/* CPX Racing Hub */}
          <ProductCard
            name="CPX Racing Hub"
            tagline={
              isEs
                ? 'Carreras callejeras: tracks, eventos, leaderboards, marketplace y weekly time-trial.'
                : 'Street racing: tracks, events, leaderboards, marketplace and weekly time-trial.'
            }
            icon={Flag}
            accentClass="from-yellow-300 to-amber-500"
            ringClass="hover:border-yellow-400/30 hover:shadow-[0_20px_80px_-20px_rgba(255,214,90,0.18)]"
            iconBgClass="from-yellow-300 to-amber-500"
            shadowClass="shadow-[0_0_50px_rgba(255,214,90,0.4)] group-hover:shadow-[0_0_80px_rgba(255,214,90,0.6)]"
            buttonClass="bg-yellow-400 hover:bg-yellow-300 shadow-[0_0_20px_rgba(255,214,90,0.25)] text-black"
            titleHoverClass="group-hover:text-yellow-300"
            miniIcon={Flag}
            miniLabel="racing"
            videoId="Izaz99PDIiw"
            onClick={() => onSelectDoc('racing')}
          />

          {/* CPX Frames */}
          <ProductCard
            name="CPX Frames"
            tagline={
              isEs
                ? 'Impresora retro de fotos, marcos colgables y slideshows en 3D.'
                : 'Retro photo printer, hangable frames and 3D slideshows.'
            }
            icon={ImageIcon}
            accentClass="from-violet-400 to-fuchsia-600"
            ringClass="hover:border-violet-500/30 hover:shadow-[0_20px_80px_-20px_rgba(139,92,246,0.18)]"
            iconBgClass="from-violet-400 to-fuchsia-600"
            shadowClass="shadow-[0_0_50px_rgba(139,92,246,0.4)] group-hover:shadow-[0_0_80px_rgba(139,92,246,0.6)]"
            buttonClass="bg-violet-500 hover:bg-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.25)] text-white"
            titleHoverClass="group-hover:text-violet-400"
            miniIcon={ImageIcon}
            miniLabel="frames"
            videoId="dIa4zdEXM9c"
            onClick={() => onSelectDoc('frames')}
          />

          {/* CPX PauseMenu */}
          <ProductCard
            name="CPX PauseMenu"
            tagline={
              isEs
                ? 'PauseMenu premium configurable: negocios dinámicos, ~650 combos visuales y panel admin in-game.'
                : 'Premium configurable PauseMenu: dynamic businesses, ~650 visual combos and in-game admin panel.'
            }
            icon={Pause}
            accentClass="from-cyan-300 to-sky-500"
            ringClass="hover:border-cyan-400/30 hover:shadow-[0_20px_80px_-20px_rgba(77,217,255,0.18)]"
            iconBgClass="from-cyan-300 to-sky-500"
            shadowClass="shadow-[0_0_50px_rgba(77,217,255,0.4)] group-hover:shadow-[0_0_80px_rgba(77,217,255,0.6)]"
            buttonClass="bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(77,217,255,0.25)] text-black"
            titleHoverClass="group-hover:text-cyan-300"
            miniIcon={Pause}
            miniLabel="pausemenu"
            videoId="BUqCfQzODUo"
            onClick={() => onSelectDoc('pausemenu')}
          />

          {/* CPX Album */}
          <ProductCard
            name="CPX Album"
            tagline={
              isEs
                ? 'Álbum de figuritas estilo Panini: 27 países, 648 stickers, sobres sellados, caja organizadora y tienda con NPC.'
                : 'Panini-style sticker album: 27 nations, 648 stickers, sealed packs, storage box and NPC shop.'
            }
            icon={BookOpen}
            accentClass="from-amber-300 to-yellow-500"
            ringClass="hover:border-amber-400/30 hover:shadow-[0_20px_80px_-20px_rgba(243,208,62,0.20)]"
            iconBgClass="from-amber-300 to-yellow-500"
            shadowClass="shadow-[0_0_50px_rgba(243,208,62,0.4)] group-hover:shadow-[0_0_80px_rgba(243,208,62,0.6)]"
            buttonClass="bg-amber-400 hover:bg-amber-300 shadow-[0_0_20px_rgba(243,208,62,0.25)] text-black"
            titleHoverClass="group-hover:text-amber-300"
            miniIcon={BookOpen}
            miniLabel="album"
            videoId=""
            onClick={() => onSelectDoc('album')}
          />
        </div>
      </section>

      {/* ─────────── ECOSYSTEM PROMO STRIP ─────────── */}
      <section className="relative max-w-[1280px] mx-auto px-6 lg:px-16 pb-32">
        <div className="rounded-[2rem] border border-white/[0.06] bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a] to-[#040404] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between overflow-hidden relative">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#c6ff3d]/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10 flex-1">
            <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#c6ff3d] mb-3">
              {isEs ? 'Ecosistema Complex' : 'Complex Ecosystem'}
            </p>
            <h3 className="text-2xl md:text-3xl font-display text-white tracking-tight mb-2">
              {isEs ? 'Diseñados para encajar entre sí.' : 'Designed to fit together.'}
            </h3>
            <p className="text-[14.5px] text-zinc-400 leading-relaxed max-w-2xl">
              {isEs
                ? 'Cada producto detecta a los demás en arranque y se integra automáticamente. Compra los que necesites, los demás se ignoran.'
                : 'Each product detects the others on boot and integrates automatically. Buy the ones you need, the rest are ignored.'}
            </p>
          </div>
          <div className="relative z-10 flex flex-wrap gap-3">
            <a
              href={brand.urls.tebex}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-semibold text-[14px] hover:bg-zinc-100 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              {isEs ? 'Ir a la tienda' : 'Visit the store'}
            </a>
            <a
              href={brand.urls.mainSite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-white text-[14px] hover:border-white/40 hover:bg-white/[0.04] transition-colors"
            >
              {isEs ? 'Sitio principal' : 'Main site'}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * Product card — extracted into a single component to avoid the 200-line
 * triplicated mess from the previous version.
 * ------------------------------------------------------------------------- */

function ProductCard({
  name,
  tagline,
  icon: Icon,
  miniIcon: MiniIcon,
  miniLabel,
  accentClass,
  ringClass,
  iconBgClass,
  shadowClass,
  buttonClass,
  titleHoverClass,
  videoId,
  onClick,
}: {
  name: string;
  tagline: string;
  icon: typeof Laptop;
  miniIcon: typeof Laptop;
  miniLabel: string;
  accentClass: string;
  ringClass: string;
  iconBgClass: string;
  shadowClass: string;
  buttonClass: string;
  titleHoverClass: string;
  videoId?: string;
  onClick: () => void;
}) {
  const { language } = useLanguage();
  const isEs = language === 'es';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`group flex flex-col rounded-[2rem] bg-[#080808]/80 backdrop-blur-xl border border-white/[0.06] overflow-hidden transition-all duration-500 ring-1 ring-white/[0.03] ${ringClass}`}
    >
      <div className="h-[260px] relative overflow-hidden bg-[#030303] flex items-center justify-center">
        {videoId ? (
          <>
            {/* YouTube thumbnail — fills the whole card head */}
            <img
              src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
              onError={(e) => {
                const img = e.currentTarget;
                if (!img.src.includes('hqdefault')) {
                  img.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
                }
              }}
              alt={`${name} preview`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient so the corner label stays readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/55 pointer-events-none" />
            {/* Accent wash on hover */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-gradient-to-br ${accentClass} mix-blend-soft-light pointer-events-none`} />
          </>
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br opacity-50 group-hover:opacity-100 transition-opacity duration-700 from-current/[0.08] to-transparent`} />
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 blur-[110px] rounded-full pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-700 bg-gradient-to-br ${accentClass}`} />
            <motion.div
              className={`relative z-10 w-24 h-24 rounded-3xl bg-gradient-to-br ${iconBgClass} flex items-center justify-center ${shadowClass} group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`}
            >
              <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
              <Icon className="w-10 h-10 text-black" strokeWidth={2} />
            </motion.div>
          </>
        )}

        {/* Corner label — stays in both modes */}
        <div className="absolute top-5 left-6 flex items-center gap-2.5 z-20">
          <div className="w-9 h-9 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg">
            <MiniIcon className="w-4.5 h-4.5 text-white/85" strokeWidth={2} />
          </div>
          <span className="text-white/85 font-bold tracking-tight text-[15px] font-display uppercase">
            {miniLabel}
          </span>
        </div>
      </div>

      <div className="p-7 md:p-8 flex flex-col flex-1 relative z-10 bg-gradient-to-b from-[#080808]/0 to-[#050505]">
        <h3 className={`text-2xl font-black text-white mb-3 font-display tracking-tight transition-colors duration-500 ${titleHoverClass}`}>
          {name}
        </h3>
        <p className="text-[14.5px] text-zinc-400 leading-relaxed mb-7 flex-1 font-sans">
          {tagline}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onClick}
            className={`flex-1 flex justify-center items-center gap-2 px-5 py-3.5 rounded-2xl text-black font-bold text-[14px] transition-colors ${buttonClass}`}
          >
            <BookText className="w-4.5 h-4.5" />
            {isEs ? 'Documentación' : 'Documentation'}
          </button>
          <a
            href={brand.urls.tebex}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex justify-center items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] text-white font-medium text-[14px] transition-colors border border-white/[0.06] hover:border-white/[0.15]"
          >
            <ShoppingCart className="w-4 h-4 text-zinc-400" />
            {isEs ? 'Tienda' : 'Store'}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
