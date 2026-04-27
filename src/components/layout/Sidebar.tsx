import { motion, AnimatePresence } from 'motion/react';
import { Search, Sun, Moon, Monitor, Command, Utensils, Laptop, Image as ImageIcon, ChevronDown, Home } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { DocType } from '../../App';

const navSectionsList = [
  {
    docId: 'laptop' as const,
    title: 'CPX LAPTOP',
    icon: Laptop,
    items: [
      { id: 'laptop-intro', label: 'Introduction' },
      { id: 'laptop-features', label: 'Features' },
      { id: 'laptop-install', label: 'Installation' },
      { id: 'laptop-config', label: 'Configuration' },
      { id: 'laptop-troubleshoot', label: 'Troubleshooting' },
    ]
  },
  {
    docId: 'restaurants' as const,
    title: 'CPX RESTAURANTS',
    icon: Utensils,
    items: [
      { id: 'rest-intro', label: 'Introduction' },
      { id: 'rest-features', label: 'Features' },
      { id: 'rest-install', label: 'Installation' },
      { id: 'rest-config', label: 'Configuration' },
      { id: 'rest-builder', label: 'In-game editor' },
    ]
  },
  {
    docId: 'frames' as const,
    title: 'CPX FRAMES',
    icon: ImageIcon,
    items: [
      { id: 'frames-intro', label: 'Introduction' },
      { id: 'frames-features', label: 'Features' },
      { id: 'frames-install', label: 'Installation' },
      { id: 'frames-config', label: 'Configuration' },
      { id: 'frames-troubleshoot', label: 'Troubleshooting' },
    ]
  }
];

export function Sidebar({ currentDoc, onSelectDoc, isMobile = false }: { currentDoc: 'laptop' | 'restaurants' | 'frames' | 'home', onSelectDoc: (d: DocType) => void, isMobile?: boolean }) {
  const [themeMode, setThemeMode] = useState<'system'|'dark'|'light'>('dark');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    [currentDoc]: true
  });

  useEffect(() => {
    if (currentDoc !== 'home') {
      setExpandedSections(prev => ({ ...prev, [currentDoc]: true }));
    }
  }, [currentDoc]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (themeMode === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(themeMode);
    }
  }, [themeMode]);

  const toggleSection = (docId: string) => {
    setExpandedSections(prev => ({ ...prev, [docId]: !prev[docId] }));
  };

  return (
    <motion.aside 
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`w-72 flex-col overflow-hidden flex-shrink-0 sticky top-4 z-20 ${
        isMobile 
          ? 'h-full bg-transparent flex border-r border-white/[0.05]' 
          : 'h-[calc(100vh-2rem)] my-4 ml-4 bg-[#080808]/95 backdrop-blur-xl border border-white/[0.05] flex rounded-[1.5rem] shadow-2xl'
      }`}
    >
      {/* Brand & Theme Header */}
      <div className="p-6 pb-2">
        <div
          onClick={() => onSelectDoc('home')}
          className="flex items-center gap-3 text-white font-display font-bold text-2xl tracking-tight mb-8 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c6ff3d] to-[#8de000] flex items-center justify-center shadow-[0_0_20px_rgba(198,255,61,0.2)] group-hover:shadow-[0_0_30px_rgba(198,255,61,0.4)] transition-shadow duration-300">
            <Home className="w-4 h-4 text-black" strokeWidth={2.5} />
          </div>
          <span>complex</span>
        </div>

        <div className="flex flex-col gap-3 mb-4">
          {/* Search Bar */}
          <div className={`relative flex items-center bg-[#141414] border transition-colors duration-300 rounded-xl overflow-hidden ${isSearchFocused ? 'border-[#c6ff3d]/50 shadow-[0_0_15px_rgba(198,255,61,0.1)]' : 'border-white/[0.05]'}`}>
            <Search className={`w-4 h-4 ml-3 transition-colors ${isSearchFocused ? 'text-[#c6ff3d]' : 'text-zinc-500'}`} />
            <input 
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full bg-transparent border-none py-2.5 px-3 text-sm text-white placeholder-zinc-600 focus:outline-none font-sans"
            />
            <div className="mr-3 flex gap-1">
              <kbd className="hidden sm:inline-flex items-center gap-1 bg-[#222] border border-white/[0.05] rounded px-1.5 py-0.5 text-[10px] font-mono text-zinc-400">
                ⌘ K
              </kbd>
            </div>
          </div>

          {/* Theme toggles */}
          <div className="flex bg-[#141414] border border-white/[0.05] rounded-xl p-1 w-full justify-between relative overflow-hidden">
             {themeMode === 'light' && <motion.div layoutId="themetoggle" className="absolute top-1 bottom-1 left-1 w-[calc(33.33%-4px)] bg-[#2a2a2a] rounded-lg" />}
             {themeMode === 'dark' && <motion.div layoutId="themetoggle" className="absolute top-1 bottom-1 left-[calc(33.33%+2px)] w-[calc(33.33%-4px)] bg-[#2a2a2a] rounded-lg" />}
             {themeMode === 'system' && <motion.div layoutId="themetoggle" className="absolute top-1 bottom-1 right-1 w-[calc(33.33%-4px)] bg-[#2a2a2a] rounded-lg" />}
             
             <button onClick={() => setThemeMode('light')} className={`z-10 p-1.5 rounded-lg flex-1 flex justify-center items-center transition-colors ${themeMode === 'light' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
               <Sun className="w-3.5 h-3.5" />
             </button>
             <button onClick={() => setThemeMode('dark')} className={`z-10 p-1.5 rounded-lg flex-1 flex justify-center items-center transition-colors ${themeMode === 'dark' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
               <Moon className="w-3.5 h-3.5" />
             </button>
             <button onClick={() => setThemeMode('system')} className={`z-10 p-1.5 rounded-lg flex-1 flex justify-center items-center transition-colors ${themeMode === 'system' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
               <Monitor className="w-3.5 h-3.5" />
             </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-4 pb-12 space-y-8 scroll-smooth custom-scrollbar">
        <AnimatePresence>
          {navSectionsList.map((section, sIdx) => {
            const lowerQuery = searchQuery.toLowerCase();
            const hasMatchingItems = section.items.some(item => item.label.toLowerCase().includes(lowerQuery));
            const hasMatchingTitle = section.title.toLowerCase().includes(lowerQuery);
            
            if (searchQuery.length > 0 && !hasMatchingItems && !hasMatchingTitle) {
              return null;
            }

            const isExpanded = searchQuery.length > 0
              ? hasMatchingItems || hasMatchingTitle
              : expandedSections[section.docId];

            return (
              <motion.div 
                key={sIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
              >
                {section.title && (
                  <div 
                    onClick={() => toggleSection(section.docId)}
                    className={`flex items-center justify-between text-[11px] font-bold tracking-widest text-[#666] uppercase mb-3 px-2 cursor-pointer transition-colors hover:text-zinc-400 ${isExpanded ? 'text-zinc-400' : ''}`}
                  >
                    <div className="flex items-center gap-2">
                      {section.icon && <section.icon className="w-3.5 h-3.5" />}
                      {section.title}
                    </div>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'text-zinc-400 rotate-180' : 'text-zinc-600'}`} />
                  </div>
                )}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.ul 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="space-y-1 overflow-hidden"
                    >
                      <AnimatePresence>
                        {section.items.map((item) => {
                          const isVisible = item.label.toLowerCase().includes(lowerQuery) || hasMatchingTitle;
                          if (searchQuery && !isVisible) return null;
      
                          return (
                            <motion.li 
                              key={item.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{ duration: 0.2 }}
                            >
                              <a 
                                href={`#${item.id}`} 
                                onClick={(e) => {
                                  e.preventDefault();
                                  if (currentDoc !== section.docId) {
                                    onSelectDoc(section.docId);
                                    // small delay to allow react to render the new component before scrolling
                                    setTimeout(() => {
                                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                                    }, 100);
                                  } else {
                                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                                  }
                                }}
                                className={`block px-3 py-2 text-[13.5px] rounded-xl transition-all duration-300 relative group overflow-hidden ${
                                  currentDoc === section.docId
                                    ? 'text-white font-medium'
                                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
                                }`}
                              >
                                {currentDoc === section.docId && (
                                  <div className="absolute inset-0 bg-gradient-to-r from-white/[0.08] to-transparent pointer-events-none" />
                                )}
                                {currentDoc === section.docId && (
                                  <motion.div layoutId="sidebarActive" className="absolute left-0 top-1 bottom-1 w-[3px] bg-[#c6ff3d] rounded-r shadow-[0_0_8px_rgba(198,255,61,0.5)]" />
                                )}
                                <span className="relative z-10">{item.label}</span>
                              </a>
                            </motion.li>
                          );
                        })}
                      </AnimatePresence>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.aside>
  );
}
