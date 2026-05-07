import { motion } from 'motion/react';
import type { DocType } from '../../App';

type DocLink = {
  title: string;
  doc: DocType;
};

type DocFooterProps = {
  lastUpdated: string;
  prev?: DocLink;
  next?: DocLink;
  onSelectDoc: (doc: DocType) => void;
  accentColor?: 'lima' | 'amber' | 'violet' | 'cyan';
};

export function DocFooter({ lastUpdated, prev, next, onSelectDoc, accentColor = 'lima' }: DocFooterProps) {
  let textClass = 'text-[#c6ff3d] group-hover:text-[#b0f020]';
  if (accentColor === 'amber') textClass = 'text-amber-500 group-hover:text-amber-400';
  if (accentColor === 'violet') textClass = 'text-violet-400 group-hover:text-violet-300';
  if (accentColor === 'cyan') textClass = 'text-cyan-300 group-hover:text-cyan-200';

  return (
    <div className="mt-16 w-full">
      <div className="text-[13.5px] text-zinc-500 mb-8 pb-8 border-b border-[#222] font-sans">
        Last updated: {lastUpdated}
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
        {prev ? (
          <button 
            onClick={() => {
              document.getElementById('main-content')?.scrollTo({ top: 0, behavior: 'smooth' });
              onSelectDoc(prev.doc);
            }}
            className="flex-1 p-5 rounded-2xl border border-white/[0.05] hover:bg-white/[0.02] hover:border-white/[0.1] transition-all duration-300 group flex flex-col items-start text-left cursor-pointer"
          >
            <span className="text-[11px] font-bold tracking-widest text-[#666] uppercase mb-1.5 group-hover:text-zinc-400 transition-colors">Previous page</span>
            <span className={`${textClass} text-[15px] font-medium transition-colors font-sans`}>{prev.title}</span>
          </button>
        ) : (
          <div className="flex-1" />
        )}

        {next ? (
          <button 
            onClick={() => {
              document.getElementById('main-content')?.scrollTo({ top: 0, behavior: 'smooth' });
              onSelectDoc(next.doc);
            }}
            className="flex-1 p-5 rounded-2xl border border-white/[0.05] hover:bg-white/[0.02] hover:border-white/[0.1] transition-all duration-300 group flex flex-col items-end text-right cursor-pointer"
          >
            <span className="text-[11px] font-bold tracking-widest text-[#666] uppercase mb-1.5 group-hover:text-zinc-400 transition-colors">Next page</span>
            <span className={`${textClass} text-[15px] font-medium transition-colors font-sans`}>{next.title}</span>
          </button>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  );
}
