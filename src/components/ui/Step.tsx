import type { ReactNode } from 'react';
import { motion } from 'motion/react';

type StepProps = {
  number: number;
  title: string;
  children: ReactNode;
  isLast?: boolean;
};

export function Step({ number, title, children, isLast }: StepProps) {
  return (
    <div className="relative pl-12 pb-14 group">
      {/* Vertical line connection */}
      {!isLast && (
        <div className="absolute left-3.5 top-8 bottom-[0rem] w-[1px] bg-gradient-to-b from-[#c6ff3d]/40 to-transparent group-hover:from-[#c6ff3d]/80 transition-colors duration-500" />
      )}
      
      {/* Number circle */}
      <div className="absolute left-0 top-0.5 w-7 h-7 rounded-full bg-[#1a2e05] border border-[#c6ff3d]/40 flex items-center justify-center text-[11px] font-bold text-[#c6ff3d] shadow-[0_0_12px_rgba(198,255,61,0.15)] z-10 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(198,255,61,0.3)] group-hover:border-[#c6ff3d]/60 transition-all duration-300">
        {number}
      </div>
      
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h3 className="text-[20px] font-semibold text-white mb-4 tracking-tight group-hover:text-[#c6ff3d] transition-colors duration-300 font-display">{title}</h3>
        <div className="text-zinc-400 text-sm leading-relaxed">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
