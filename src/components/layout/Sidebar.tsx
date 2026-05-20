import { motion, AnimatePresence } from 'motion/react';
import { Search, Utensils, Laptop, Image as ImageIcon, Flag, ChevronDown, Home, Pause, BookOpen, Shirt, Megaphone, Car, Users, Crown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import type { DocType } from '../../App';
import { useLanguage } from '../../contexts/LanguageContext';

type NavSection = {
  docId: 'laptop' | 'restaurants' | 'racing' | 'frames' | 'pausemenu' | 'album' | 'clothesdesigner' | 'announcements' | 'chopshop' | 'gangs' | 'vipsystem';
  title: string;
  icon: typeof Laptop;
  items: { id: string; label: string }[];
};

/**
 * Build the sidebar tree in the active language. Centralised here so the
 * scrollspy observer can reach all section ids regardless of the current doc.
 */
const buildNavSections = (isEs: boolean): NavSection[] => [
  {
    docId: 'laptop',
    title: 'CPX LAPTOP',
    icon: Laptop,
    items: [
      { id: 'laptop-intro',        label: isEs ? 'Introducción'          : 'Introduction' },
      { id: 'laptop-features',     label: isEs ? 'Características'        : 'Features' },
      { id: 'laptop-install',      label: isEs ? 'Instalación'           : 'Installation' },
      { id: 'laptop-config',       label: isEs ? 'Configuración'         : 'Configuration' },
      { id: 'laptop-troubleshoot', label: isEs ? 'Solución de problemas' : 'Troubleshooting' },
    ],
  },
  {
    docId: 'restaurants',
    title: 'CPX RESTAURANTS',
    icon: Utensils,
    items: [
      { id: 'rest-intro',        label: isEs ? 'Introducción'          : 'Introduction' },
      { id: 'rest-features',     label: isEs ? 'Características'        : 'Features' },
      { id: 'rest-install',      label: isEs ? 'Instalación'           : 'Installation' },
      { id: 'rest-config',       label: isEs ? 'Configuración'         : 'Configuration' },
      { id: 'rest-builder',      label: isEs ? 'Editor in-game'         : 'In-game editor' },
      { id: 'rest-troubleshoot', label: isEs ? 'Solución de problemas' : 'Troubleshooting' },
    ],
  },
  {
    docId: 'racing',
    title: 'CPX RACING HUB',
    icon: Flag,
    items: [
      { id: 'racing-intro',        label: isEs ? 'Introducción'          : 'Introduction' },
      { id: 'racing-features',     label: isEs ? 'Características'        : 'Features' },
      { id: 'racing-install',      label: isEs ? 'Instalación'           : 'Installation' },
      { id: 'racing-config',       label: isEs ? 'Configuración'         : 'Configuration' },
      { id: 'racing-admin',        label: isEs ? 'Editor in-game'         : 'In-game editor' },
      { id: 'racing-troubleshoot', label: isEs ? 'Solución de problemas' : 'Troubleshooting' },
    ],
  },
  {
    docId: 'frames',
    title: 'CPX FRAMES',
    icon: ImageIcon,
    items: [
      { id: 'frames-intro',        label: isEs ? 'Introducción'          : 'Introduction' },
      { id: 'frames-features',     label: isEs ? 'Características'        : 'Features' },
      { id: 'frames-install',      label: isEs ? 'Instalación'           : 'Installation' },
      { id: 'frames-config',       label: isEs ? 'Configuración'         : 'Configuration' },
      { id: 'frames-troubleshoot', label: isEs ? 'Solución de problemas' : 'Troubleshooting' },
    ],
  },
  {
    docId: 'pausemenu',
    title: 'CPX PAUSEMENU',
    icon: Pause,
    items: [
      { id: 'pausemenu-intro',        label: isEs ? 'Introducción'          : 'Introduction' },
      { id: 'pausemenu-features',     label: isEs ? 'Características'        : 'Features' },
      { id: 'pausemenu-install',      label: isEs ? 'Instalación'           : 'Installation' },
      { id: 'pausemenu-config',       label: isEs ? 'Configuración'         : 'Configuration' },
      { id: 'pausemenu-admin',        label: isEs ? 'Editor in-game'         : 'In-game editor' },
      { id: 'pausemenu-troubleshoot', label: isEs ? 'Solución de problemas' : 'Troubleshooting' },
    ],
  },
  {
    docId: 'album',
    title: 'CPX ALBUM',
    icon: BookOpen,
    items: [
      { id: 'album-intro',        label: isEs ? 'Introducción'          : 'Introduction' },
      { id: 'album-features',     label: isEs ? 'Características'        : 'Features' },
      { id: 'album-install',      label: isEs ? 'Instalación'           : 'Installation' },
      { id: 'album-config',       label: isEs ? 'Configuración'         : 'Configuration' },
      { id: 'album-matrix',       label: isEs ? 'Soporte por inventario': 'Inventory support' },
      { id: 'album-commands',     label: isEs ? 'Comandos'              : 'Commands' },
      { id: 'album-troubleshoot', label: isEs ? 'Solución de problemas' : 'Troubleshooting' },
    ],
  },
  {
    docId: 'clothesdesigner',
    title: 'CPX CLOTHING DESIGNER',
    icon: Shirt,
    items: [
      { id: 'clothesdesigner-intro',        label: isEs ? 'Introducción'          : 'Introduction' },
      { id: 'clothesdesigner-features',     label: isEs ? 'Características'        : 'Features' },
      { id: 'clothesdesigner-install',      label: isEs ? 'Instalación'           : 'Installation' },
      { id: 'clothesdesigner-config',       label: isEs ? 'Configuración'         : 'Configuration' },
      { id: 'clothesdesigner-troubleshoot', label: isEs ? 'Solución de problemas' : 'Troubleshooting' },
    ],
  },
  {
    docId: 'announcements',
    title: 'CPX ANNOUNCEMENTS',
    icon: Megaphone,
    items: [
      { id: 'announcements-intro',        label: isEs ? 'Introducción'          : 'Introduction' },
      { id: 'announcements-features',     label: isEs ? 'Características'        : 'Features' },
      { id: 'announcements-install',      label: isEs ? 'Instalación'           : 'Installation' },
      { id: 'announcements-config',       label: isEs ? 'Configuración'         : 'Configuration' },
      { id: 'announcements-commands',     label: isEs ? 'Comandos'              : 'Commands' },
      { id: 'announcements-troubleshoot', label: isEs ? 'Solución de problemas' : 'Troubleshooting' },
    ],
  },
  {
    docId: 'chopshop',
    title: 'CPX CHOPSHOP',
    icon: Car,
    items: [
      { id: 'chopshop-intro',        label: isEs ? 'Introducción'          : 'Introduction' },
      { id: 'chopshop-features',     label: isEs ? 'Características'        : 'Features' },
      { id: 'chopshop-install',      label: isEs ? 'Instalación'           : 'Installation' },
      { id: 'chopshop-config',       label: isEs ? 'Configuración'         : 'Configuration' },
      { id: 'chopshop-troubleshoot', label: isEs ? 'Solución de problemas' : 'Troubleshooting' },
    ],
  },
  {
    docId: 'gangs',
    title: 'CPX GANGS',
    icon: Users,
    items: [
      { id: 'gangs-intro',        label: isEs ? 'Introducción'          : 'Introduction' },
      { id: 'gangs-features',     label: isEs ? 'Características'        : 'Features' },
      { id: 'gangs-install',      label: isEs ? 'Instalación'           : 'Installation' },
      { id: 'gangs-admin',        label: isEs ? 'Panel admin'           : 'Admin panel' },
      { id: 'gangs-config',       label: isEs ? 'Configuración'         : 'Configuration' },
      { id: 'gangs-troubleshoot', label: isEs ? 'Solución de problemas' : 'Troubleshooting' },
    ],
  },
  {
    docId: 'vipsystem',
    title: 'CPX VIP SYSTEM',
    icon: Crown,
    items: [
      { id: 'vipsystem-intro',        label: isEs ? 'Introducción'          : 'Introduction' },
      { id: 'vipsystem-features',     label: isEs ? 'Características'        : 'Features' },
      { id: 'vipsystem-install',      label: isEs ? 'Instalación'           : 'Installation' },
      { id: 'vipsystem-tebex',        label: isEs ? 'Configuración de Tebex': 'Tebex setup' },
      { id: 'vipsystem-config',       label: isEs ? 'Configuración'         : 'Configuration' },
      { id: 'vipsystem-troubleshoot', label: isEs ? 'Solución de problemas' : 'Troubleshooting' },
    ],
  },
];

export function Sidebar({
  currentDoc,
  onSelectDoc,
  isMobile = false,
}: {
  currentDoc: 'laptop' | 'restaurants' | 'racing' | 'frames' | 'pausemenu' | 'album' | 'clothesdesigner' | 'announcements' | 'chopshop' | 'gangs' | 'vipsystem' | 'home';
  onSelectDoc: (d: DocType) => void;
  isMobile?: boolean;
}) {
  const { language } = useLanguage();
  const isEs = language === 'es';
  const navSectionsList = buildNavSections(isEs);

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    [currentDoc]: true,
  });
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Detect Mac so the kbd hint matches the user's actual modifier.
  const [isMac, setIsMac] = useState(false);
  useEffect(() => {
    if (typeof navigator === 'undefined') return;
    setIsMac(/Mac|iPhone|iPod|iPad/.test(navigator.platform));
  }, []);

  // Scrollspy — track which section[id] is currently in the upper viewport so
  // the lima indicator slides between items as the user scrolls.
  const [activeSection, setActiveSection] = useState<string>('');
  const visibleRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (currentDoc !== 'home') {
      setExpandedSections((prev) => ({ ...prev, [currentDoc]: true }));
    }
  }, [currentDoc]);

  useEffect(() => {
    if (currentDoc === 'home') {
      setActiveSection('');
      return;
    }
    visibleRef.current.clear();

    const timer = setTimeout(() => {
      const allIds = new Set(navSectionsList.flatMap((s) => s.items.map((i) => i.id)));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) visibleRef.current.add(e.target.id);
            else visibleRef.current.delete(e.target.id);
          });
          const sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];
          const firstVisible = sections.find(
            (s) => allIds.has(s.id) && visibleRef.current.has(s.id),
          );
          if (firstVisible) setActiveSection(firstVisible.id);
        },
        { rootMargin: '-15% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
      );

      document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
      return () => observer.disconnect();
    }, 120);

    return () => clearTimeout(timer);
  }, [currentDoc, isEs]);

  // Cmd/Ctrl + K → focus the search input, plus Esc to clear.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if ((e.metaKey || e.ctrlKey) && key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
        searchInputRef.current?.select();
      } else if (key === 'escape' && document.activeElement === searchInputRef.current) {
        searchInputRef.current?.blur();
        setSearchQuery('');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const toggleSection = (docId: string) => {
    setExpandedSections((prev) => ({ ...prev, [docId]: !prev[docId] }));
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
          <div
            className={`relative flex items-center bg-[#141414] border transition-colors duration-300 rounded-xl overflow-hidden ${
              isSearchFocused
                ? 'border-[#c6ff3d]/50 shadow-[0_0_15px_rgba(198,255,61,0.1)]'
                : 'border-white/[0.05]'
            }`}
          >
            <Search
              className={`w-4 h-4 ml-3 transition-colors ${
                isSearchFocused ? 'text-[#c6ff3d]' : 'text-zinc-500'
              }`}
            />
            <input
              ref={searchInputRef}
              type="text"
              placeholder={isEs ? 'Buscar en la documentación…' : 'Search documentation…'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full bg-transparent border-none py-2.5 px-3 text-sm text-white placeholder-zinc-600 focus:outline-none font-sans"
            />
            <div className="mr-3 flex gap-1">
              <kbd className="hidden sm:inline-flex items-center gap-1 bg-[#222] border border-white/[0.05] rounded px-1.5 py-0.5 text-[10px] font-mono text-zinc-400">
                {isMac ? '⌘ K' : 'Ctrl K'}
              </kbd>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-4 pb-12 space-y-8 scroll-smooth custom-scrollbar">
        <AnimatePresence>
          {navSectionsList.map((section, sIdx) => {
            const lowerQuery = searchQuery.toLowerCase();
            const hasMatchingItems = section.items.some((item) =>
              item.label.toLowerCase().includes(lowerQuery),
            );
            const hasMatchingTitle = section.title.toLowerCase().includes(lowerQuery);

            if (searchQuery.length > 0 && !hasMatchingItems && !hasMatchingTitle) {
              return null;
            }

            const isExpanded =
              searchQuery.length > 0
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
                    className={`flex items-center justify-between text-[11px] font-bold tracking-widest text-[#666] uppercase mb-3 px-2 cursor-pointer transition-colors hover:text-zinc-400 ${
                      isExpanded ? 'text-zinc-400' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {section.icon && <section.icon className="w-3.5 h-3.5" />}
                      {section.title}
                    </div>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${
                        isExpanded ? 'text-zinc-400 rotate-180' : 'text-zinc-600'
                      }`}
                    />
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
                          const isVisible =
                            item.label.toLowerCase().includes(lowerQuery) || hasMatchingTitle;
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
                                      document
                                        .getElementById(item.id)
                                        ?.scrollIntoView({ behavior: 'smooth' });
                                    }, 100);
                                  } else {
                                    document
                                      .getElementById(item.id)
                                      ?.scrollIntoView({ behavior: 'smooth' });
                                  }
                                }}
                                className={`block px-3 py-2 text-[13.5px] rounded-xl transition-all duration-300 relative group overflow-hidden ${
                                  activeSection === item.id
                                    ? 'text-[#c6ff3d] font-semibold'
                                    : currentDoc === section.docId
                                      ? 'text-white font-medium hover:bg-white/[0.03]'
                                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
                                }`}
                              >
                                {activeSection === item.id && (
                                  <motion.div
                                    layoutId="sidebarActiveBg"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    className="absolute inset-0 bg-gradient-to-r from-[#c6ff3d]/10 to-transparent pointer-events-none rounded-xl"
                                  />
                                )}
                                {activeSection === item.id && (
                                  <motion.div
                                    layoutId="sidebarActive"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    className="absolute left-0 top-1 bottom-1 w-[3px] bg-[#c6ff3d] rounded-r shadow-[0_0_10px_rgba(198,255,61,0.6)]"
                                  />
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
