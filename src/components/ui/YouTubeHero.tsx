import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';

interface YouTubeHeroProps {
  videoId: string;
  /** Used as alt text and modal title. */
  title: string;
  /**
   * Tailwind classes for the accent ring + play button color.
   * Pass any color hex via inline style on the parent if needed.
   */
  accent?: string;
  /** Optional: slot rendered overlapping the bottom-left of the thumbnail. */
  badge?: React.ReactNode;
}

/**
 * A YouTube thumbnail with a play button overlay. Click → opens a modal
 * embedding the video. Uses the privacy-friendly youtube-nocookie domain
 * and `?autoplay=1` so the user starts watching instantly.
 *
 * Esc and clicking the backdrop close the modal.
 */
export function YouTubeHero({
  videoId,
  title,
  accent = '#c6ff3d',
  badge,
}: YouTubeHeroProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  // YouTube returns a generic placeholder when maxres is missing — fall back
  // to hqdefault if onError fires. Both URLs are public.
  const [thumb, setThumb] = useState(
    `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Play ${title}`}
        className="group relative block w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-shadow"
        style={{ ['--accent' as any]: accent }}
      >
        {/* Thumbnail */}
        <img
          src={thumb}
          alt={title}
          loading="lazy"
          onError={() =>
            setThumb(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`)
          }
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Top + bottom gradients for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 pointer-events-none" />

        {/* Accent ring on hover */}
        <div
          className="absolute inset-0 rounded-2xl ring-0 ring-transparent group-hover:ring-2 transition-all duration-500 pointer-events-none"
          style={{ boxShadow: `0 0 0 0 ${accent}` }}
        />

        {/* Play button */}
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
          style={{
            background: `radial-gradient(circle, ${accent}cc 0%, ${accent}77 60%, transparent 80%)`,
            boxShadow: `0 0 60px ${accent}66`,
          }}
        >
          <span
            className="absolute inset-2 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center border border-white/20"
            style={{ boxShadow: `inset 0 0 20px ${accent}33` }}
          >
            <Play className="w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-md" fill="currentColor" />
          </span>
        </span>

        {/* Badge slot */}
        {badge && (
          <div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-auto pointer-events-none">
            {badge}
          </div>
        )}
      </button>

      {/* Modal player */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
          >
            <div className="absolute inset-0 bg-black/85 backdrop-blur-2xl" />

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center z-10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.94, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 20, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
