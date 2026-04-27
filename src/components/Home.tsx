import { motion } from 'motion/react';
import { Laptop, Utensils, Image as ImageIcon, ShoppingCart, BookText, Command, ArrowRight } from 'lucide-react';
import type { DocType } from '../../App';
import { useLanguage } from '../contexts/LanguageContext';
import { brand } from '../lib/brand';

export function Home({ onSelectDoc }: { onSelectDoc: (doc: DocType) => void }) {
  const { language } = useLanguage();

  const isEs = language === 'es';

  return (
    <div className="max-w-[1200px] mx-auto pt-24 pb-40 px-8 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col md:flex-row items-start justify-between mb-32 gap-12"
      >
        <div className="flex flex-col items-start text-left relative">
          <div className="absolute -left-16 -top-16 w-32 h-32 bg-[#c6ff3d]/20 blur-[80px] rounded-full pointer-events-none" />
          
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[28px] font-semibold text-white/70 mb-2 font-display tracking-tight"
          >
            {isEs ? 'Una forma de' : 'A way to'}
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            className="text-[5rem] md:text-[7rem] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#c6ff3d] via-[#a8e60d] to-[#8de000] mb-6 drop-shadow-[0_0_30px_rgba(198,255,61,0.2)]"
          >
            {isEs ? 'INTEGRAR' : 'INTEGRATE'}
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-[28px] font-semibold text-white/70 font-display tracking-tight"
          >
            {isEs ? 'lo innovador' : 'the innovative'}
          </motion.span>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col items-start md:items-end text-left md:text-right text-[2.5rem] md:text-[3.5rem] font-black tracking-tighter leading-[1] uppercase relative"
        >
          <div className="absolute -right-16 top-0 w-32 h-32 bg-cyan-400/10 blur-[80px] rounded-full pointer-events-none" />
          <a
            href={brand.urls.tebex}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-4"
          >
            <span className="group-hover:-translate-x-2 transition-transform duration-300">{isEs ? 'TIENDA' : 'STORE'}</span>
          </a>
          <a
            href={brand.urls.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-4"
          >
            <span className="group-hover:-translate-x-2 transition-transform duration-300">DISCORD</span>
          </a>
          <a
            href={brand.urls.mainSite}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-4"
          >
            <span className="group-hover:-translate-x-2 transition-transform duration-300">{isEs ? 'WEB' : 'SITE'}</span>
          </a>
        </motion.div>
      </motion.div>

      <div className="w-full flex items-center justify-between mb-8">
        <h2 className="text-xl font-medium text-white/80 font-display">{isEs ? 'Selecciona un producto' : 'Select a product'}</h2>
        <div className="h-[1px] flex-1 mx-6 bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {/* CPX Laptop Card */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
           className="group flex flex-col rounded-[2.5rem] bg-[#080808]/80 backdrop-blur-xl border border-white/[0.08] overflow-hidden hover:border-[#c6ff3d]/30 transition-colors duration-500 shadow-[0_0_0_rgba(198,255,61,0)] hover:shadow-[0_20px_80px_-20px_rgba(198,255,61,0.15)] ring-1 ring-white/5"
        >
          {/* Visual Header */}
          <div className="h-[280px] relative overflow-hidden bg-[#030303] flex items-center justify-center">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#c6ff3d]/[0.08] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#c6ff3d]/20 blur-[120px] rounded-full pointer-events-none group-hover:bg-[#c6ff3d]/30 transition-colors duration-700" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay" />
            
            {/* Top left mini-brand */}
            <div className="absolute top-6 left-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg">
                <Command className="w-5 h-5 text-white/80" />
              </div>
              <span className="text-white/90 font-bold tracking-tight text-xl font-display uppercase">laptop</span>
            </div>

            {/* Center icon */}
            <motion.div 
               className="relative z-10 w-28 h-28 rounded-[2rem] bg-gradient-to-br from-[#c6ff3d] to-[#8de000] flex items-center justify-center shadow-[0_0_50px_rgba(198,255,61,0.4)] group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_80px_rgba(198,255,61,0.6)] transition-all duration-700 ease-[0.16,1,0.3,1]"
            >
              <div className="absolute inset-0 bg-white/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
              <Laptop className="w-12 h-12 text-black" strokeWidth={2} />
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-10 flex flex-col flex-1 relative z-10 bg-gradient-to-b from-[#080808]/0 to-[#050505]">
            <h3 className="text-3xl font-black text-white mb-4 font-display tracking-tight group-hover:text-[#c6ff3d] transition-colors duration-500">CPX Laptop</h3>
            <p className="text-[16px] text-zinc-400 leading-relaxed mb-10 flex-1 font-sans">
              {isEs 
                ? 'Sistema de laptop realista con múltiples aplicaciones, configuración manual e integración completa del ecosistema diseñado para roleplay serio.'
                : 'Realistic laptop system with multiple apps, manual configuration, and full ecosystem integration designed for serious roleplay.'}
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button 
                 onClick={() => onSelectDoc('laptop')}
                 className="flex-1 flex justify-center items-center gap-2 px-6 py-4 rounded-2xl bg-[#c6ff3d] text-black font-bold text-[15px] hover:bg-[#b0f020] transition-colors shadow-[0_0_20px_rgba(198,255,61,0.2)] hover:shadow-[0_0_30px_rgba(198,255,61,0.4)]"
              >
                <BookText className="w-5 h-5" /> {isEs ? 'Documentación' : 'Documentation'}
              </button>
              <a
                href={brand.urls.tebex}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex justify-center items-center gap-2 px-6 py-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] text-white font-medium text-[15px] transition-colors border border-white/[0.08] hover:border-white/[0.15]"
              >
                <ShoppingCart className="w-5 h-5 text-zinc-400" /> {isEs ? 'Tienda' : 'Store'} <ArrowRight className="w-4 h-4 ml-1 opacity-50" />
              </a>
            </div>
          </div>
        </motion.div>

         {/* CPX Restaurants Card */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
           className="group flex flex-col rounded-[2.5rem] bg-[#080808]/80 backdrop-blur-xl border border-white/[0.08] overflow-hidden hover:border-amber-500/30 transition-colors duration-500 shadow-[0_0_0_rgba(245,158,11,0)] hover:shadow-[0_20px_80px_-20px_rgba(245,158,11,0.15)] ring-1 ring-white/5"
        >
          {/* Visual Header */}
          <div className="h-[280px] relative overflow-hidden bg-[#030303] flex items-center justify-center">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.08] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/20 blur-[120px] rounded-full pointer-events-none group-hover:bg-amber-500/30 transition-colors duration-700" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay" />
            
            {/* Top left mini-brand */}
            <div className="absolute top-6 left-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg">
                <Utensils className="w-5 h-5 text-white/80" />
              </div>
              <span className="text-white/90 font-bold tracking-tight text-xl font-display uppercase">restaurants</span>
            </div>

            {/* Center icon */}
            <motion.div 
               className="relative z-10 w-28 h-28 rounded-[2rem] bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.4)] group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_0_80px_rgba(245,158,11,0.6)] transition-all duration-700 ease-[0.16,1,0.3,1]"
            >
              <div className="absolute inset-0 bg-white/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
              <Utensils className="w-12 h-12 text-black" strokeWidth={2} />
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-10 flex flex-col flex-1 relative z-10 bg-gradient-to-b from-[#080808]/0 to-[#050505]">
            <h3 className="text-3xl font-black text-white mb-4 font-display tracking-tight group-hover:text-amber-400 transition-colors duration-500">CPX Restaurants</h3>
            <p className="text-[16px] text-zinc-400 leading-relaxed mb-10 flex-1 font-sans">
              {isEs
                ? 'Sistema culinario avanzado con estaciones de preparación, elaboración en varios pasos, gestión de recetas y profundas habilidades de progresión.'
                : 'Advanced culinary system featuring preparation stations, multi-step crafting, recipe management, and deep progression skills.'}
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button 
                 onClick={() => onSelectDoc('restaurants')}
                 className="flex-1 flex justify-center items-center gap-2 px-6 py-4 rounded-2xl bg-amber-500 text-black font-bold text-[15px] hover:bg-amber-400 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
              >
                <BookText className="w-5 h-5" /> {isEs ? 'Documentación' : 'Documentation'}
              </button>
              <a
                href={brand.urls.tebex}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex justify-center items-center gap-2 px-6 py-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] text-white font-medium text-[15px] transition-colors border border-white/[0.08] hover:border-white/[0.15]"
              >
                <ShoppingCart className="w-5 h-5 text-zinc-400" /> {isEs ? 'Tienda' : 'Store'} <ArrowRight className="w-4 h-4 ml-1 opacity-50" />
              </a>
            </div>
          </div>
        </motion.div>

         {/* CPX Frames Card */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
           className="group flex flex-col rounded-[2.5rem] bg-[#080808]/80 backdrop-blur-xl border border-white/[0.08] overflow-hidden hover:border-violet-500/30 transition-colors duration-500 shadow-[0_0_0_rgba(139,92,246,0)] hover:shadow-[0_20px_80px_-20px_rgba(139,92,246,0.15)] ring-1 ring-white/5"
        >
          {/* Visual Header */}
          <div className="h-[280px] relative overflow-hidden bg-[#030303] flex items-center justify-center">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.08] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-500/20 blur-[120px] rounded-full pointer-events-none group-hover:bg-violet-500/30 transition-colors duration-700" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay" />
            
            {/* Top left mini-brand */}
            <div className="absolute top-6 left-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg">
                <ImageIcon className="w-5 h-5 text-white/80" />
              </div>
              <span className="text-white/90 font-bold tracking-tight text-xl font-display uppercase">frames</span>
            </div>

            {/* Center icon */}
            <motion.div 
               className="relative z-10 w-28 h-28 rounded-[2rem] bg-gradient-to-br from-violet-400 to-fuchsia-600 flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.4)] group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_80px_rgba(139,92,246,0.6)] transition-all duration-700 ease-[0.16,1,0.3,1]"
            >
              <div className="absolute inset-0 bg-white/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
              <ImageIcon className="w-12 h-12 text-black" strokeWidth={2} />
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-10 flex flex-col flex-1 relative z-10 bg-gradient-to-b from-[#080808]/0 to-[#050505]">
            <h3 className="text-3xl font-black text-white mb-4 font-display tracking-tight group-hover:text-violet-400 transition-colors duration-500">CPX Frames</h3>
            <p className="text-[16px] text-zinc-400 leading-relaxed mb-10 flex-1 font-sans">
              {isEs
                ? 'Impresora de fotos y sistema de marcos decorativos. Imprime imágenes desde URLs mediante una interfaz retro y cuélgalas en la pared como un elemento en 3D.'
                : 'Decorative photo printer & custom frames system. Print images from URLs via a retro UI, and hang them anywhere as 3D props.'}
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button 
                 onClick={() => onSelectDoc('frames')}
                 className="flex-1 flex justify-center items-center gap-2 px-6 py-4 rounded-2xl bg-violet-500 text-white font-bold text-[15px] hover:bg-violet-400 transition-colors shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
              >
                <BookText className="w-5 h-5" /> {isEs ? 'Documentación' : 'Documentation'}
              </button>
              <a
                href={brand.urls.tebex}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex justify-center items-center gap-2 px-6 py-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] text-white font-medium text-[15px] transition-colors border border-white/[0.08] hover:border-white/[0.15]"
              >
                <ShoppingCart className="w-5 h-5 text-zinc-400" /> {isEs ? 'Tienda' : 'Store'} <ArrowRight className="w-4 h-4 ml-1 opacity-50" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
