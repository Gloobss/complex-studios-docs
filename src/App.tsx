/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { RightSidebar } from './components/layout/RightSidebar';
import { Home } from './components/Home';
import { LaptopDocs } from './components/docs/LaptopDocs';
import { RestaurantsDocs } from './components/docs/RestaurantsDocs';
import { FramesDocs } from './components/docs/FramesDocs';
import { HeroBackground } from './components/ui/HeroBackground';
import { Menu, X, Languages } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

export type DocType = 'home' | 'laptop' | 'restaurants' | 'frames';

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="fixed top-4 right-20 lg:right-8 z-[60] flex items-center bg-[#080808]/90 backdrop-blur-md border border-white/[0.1] rounded-full p-1 shadow-lg pointer-events-auto">
      <button 
        onClick={() => setLanguage('en')} 
        className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${language === 'en' ? 'bg-[#c6ff3d] text-black' : 'text-zinc-400 hover:text-white'}`}
      >
        EN
      </button>
      <button 
        onClick={() => setLanguage('es')} 
        className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${language === 'es' ? 'bg-[#c6ff3d] text-black' : 'text-zinc-400 hover:text-white'}`}
      >
        ES
      </button>
    </div>
  );
}

function AppContent() {
  const [currentDoc, setCurrentDoc] = useState<DocType>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentDoc]);

  return (
    <div className="flex relative text-zinc-300 min-h-screen font-sans items-start selection:bg-lima/30 selection:text-lima">
      <HeroBackground />
      <LanguageSwitcher />
      
      {/* Mobile Top Header */}
      {currentDoc !== 'home' && (
        <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#080808]/90 backdrop-blur-xl border-b border-white/[0.05] z-50 flex items-center justify-between px-6">
          <div 
            onClick={() => setCurrentDoc('home')}
            className="flex items-center gap-3 text-white font-display font-bold text-xl tracking-tight cursor-pointer"
          >
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#c6ff3d] to-[#8de000] flex items-center justify-center">
               <span className="text-black font-sans font-bold text-[10px]">C</span>
            </div>
            <span>complex</span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-white/[0.05] text-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      )}

      {/* Desktop Sidebar */}
      {currentDoc !== 'home' && (
        <div className="hidden lg:block sticky top-0 h-screen z-30">
          <Sidebar currentDoc={currentDoc} onSelectDoc={setCurrentDoc} />
        </div>
      )}

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && currentDoc !== 'home' && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-16 bottom-0 left-0 w-72 bg-[#080808]/95 z-50 lg:hidden shadow-2xl"
            >
              <Sidebar currentDoc={currentDoc} onSelectDoc={setCurrentDoc} isMobile />
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      <main id="main-content" className={`flex-1 w-full min-w-0 relative z-10 ${currentDoc !== 'home' ? 'mt-16 lg:mt-0' : ''}`}>
        {currentDoc === 'home' && <Home onSelectDoc={setCurrentDoc} />}
        {currentDoc === 'laptop' && <LaptopDocs onSelectDoc={setCurrentDoc} />}
        {currentDoc === 'restaurants' && <RestaurantsDocs onSelectDoc={setCurrentDoc} />}
        {currentDoc === 'frames' && <FramesDocs onSelectDoc={setCurrentDoc} />}
      </main>

      {currentDoc !== 'home' && <RightSidebar currentDoc={currentDoc} />}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
