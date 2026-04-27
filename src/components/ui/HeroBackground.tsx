import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from 'motion/react';

/**
 * Global background for the docs site — "The Infinite Grid".
 * Adapted verbatim from the user's snippet, with two adjustments:
 *  - smoother scroll speed (0.15 instead of 0.5) so the lines drift slowly
 *  - mounted as a fixed full-viewport layer behind every page (-z-20)
 *
 * Behaviour:
 *  - Cursor reveals a brighter grid layer through a radial mask.
 *  - Three ambient blurred blobs (orange + lima primary + blue) for depth.
 *  - Skipped on coarse pointers (touch) and respects prefers-reduced-motion.
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

  // Track cursor in viewport space (this layer is fixed so client* is correct)
  useEffect(() => {
    if (coarsePointer) return;
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const onLeave = () => {
      mouseX.set(-9999);
      mouseY.set(-9999);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [coarsePointer, mouseX, mouseY]);

  // Smooth scroll: 0.15 instead of the snippet's 0.5 — lines drift slowly.
  const SPEED = 0.15;
  useAnimationFrame(() => {
    if (reduced) return;
    gridOffsetX.set((gridOffsetX.get() + SPEED) % 40);
    gridOffsetY.set((gridOffsetY.get() + SPEED) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-[#020202]"
    >
      {/* Base grid — discreet but visible */}
      <div className="absolute inset-0 z-0 opacity-[0.10] text-white">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>

      {/* Cursor reveal — brighter layer masked to the cursor radius */}
      {!coarsePointer && (
        <motion.div
          className="absolute inset-0 z-0 opacity-50 text-white"
          style={{ maskImage, WebkitMaskImage: maskImage }}
        >
          <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
        </motion.div>
      )}

      {/* Ambient blobs — orange / primary lima / blue */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute right-[-20%] top-[-20%] w-[40%] h-[40%] rounded-full bg-orange-600/20 blur-[120px]" />
        <div className="absolute right-[10%] top-[-10%] w-[20%] h-[20%] rounded-full bg-[#c6ff3d]/20 blur-[100px]" />
        <div className="absolute left-[-10%] bottom-[-20%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px]" />
      </div>

      {/* Soft top/bottom fades so the grid doesn't fight page edges */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#020202]/80 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent" />
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
