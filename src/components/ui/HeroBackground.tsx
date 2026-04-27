import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from 'motion/react';

/**
 * Global background for the docs site.
 * - An infinite scrolling grid pattern (subtle, ~5% opacity).
 * - A radial reveal layer that lights up where the cursor is, in lima.
 * - Two ambient color blobs (lima + sky) blurred far in the corners.
 *
 * Design constraints:
 * - Lives behind everything (-z-20). Pointer events disabled.
 * - Skipped on coarse pointer (touch) — no cursor reveal.
 * - Animation paused on prefers-reduced-motion.
 */
export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const [reduced, setReduced] = useState(false);
  const [coarsePointer, setCoarsePointer] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    setCoarsePointer(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  // Track cursor relative to viewport (the bg is fixed-position so client* is fine)
  useEffect(() => {
    if (coarsePointer) return;
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const handleLeave = () => {
      mouseX.set(-9999);
      mouseY.set(-9999);
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, [coarsePointer, mouseX, mouseY]);

  // Slow, infinite grid scroll. 40px tile so a wrap at 40 looks seamless.
  const SPEED = 0.18;
  useAnimationFrame(() => {
    if (reduced) return;
    gridOffsetX.set((gridOffsetX.get() + SPEED) % 40);
    gridOffsetY.set((gridOffsetY.get() + SPEED) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(360px circle at ${mouseX}px ${mouseY}px, black, transparent 70%)`;

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-[#020202]"
    >
      {/* Layer 1 — base grid, visible but not screaming */}
      <div className="absolute inset-0 opacity-[0.09] text-white">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>

      {/* Layer 2 — bright lima reveal that follows the cursor */}
      {!coarsePointer && (
        <motion.div
          className="absolute inset-0 opacity-90 text-[#c6ff3d]"
          style={{ maskImage, WebkitMaskImage: maskImage }}
        >
          <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
        </motion.div>
      )}

      {/* Layer 3 — ambient color blobs (corners). More saturated. */}
      <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-[#c6ff3d]/[0.13] blur-[120px]" />
      <div className="absolute -bottom-60 -left-40 w-[44rem] h-[44rem] rounded-full bg-sky-500/[0.10] blur-[140px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] rounded-full bg-violet-500/[0.05] blur-[120px]" />

      {/* Layer 4 — softer top/bottom fades so the grid doesn't fight content edges */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#020202]/80 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent" />
    </div>
  );
}

function GridPattern({
  offsetX,
  offsetY,
}: {
  offsetX: ReturnType<typeof useMotionValue<number>>;
  offsetY: ReturnType<typeof useMotionValue<number>>;
}) {
  return (
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <motion.pattern
          id="cpx-docs-grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cpx-docs-grid)" />
    </svg>
  );
}
