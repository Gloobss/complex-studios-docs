import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { motion } from 'motion/react';

export function CodeBlock({ code, title }: { code: string; title?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
     navigator.clipboard.writeText(code);
     setCopied(true);
     setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      whileHover={{ y: -2 }}
      className="relative rounded-2xl bg-[#080808]/80 backdrop-blur-md border border-white/[0.08] overflow-hidden my-6 shadow-[0_4px_20px_rgba(0,0,0,0.3)] group transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:border-white/[0.15]"
    >
      {title ? (
        <div className="px-5 py-3 border-b border-white/[0.08] flex justify-between items-center bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-red-500/80 transition-colors duration-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-amber-500/80 transition-colors duration-300 delay-75" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-green-500/80 transition-colors duration-300 delay-150" />
            <span className="ml-3 text-[11px] font-bold tracking-widest text-zinc-500 uppercase font-mono">
              {title}
            </span>
          </div>
          <button 
            onClick={handleCopy}
            className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-white/[0.08] text-zinc-400 hover:text-[#c6ff3d] transition-all duration-300 scale-95 group-hover:scale-100"
            aria-label="Copy code"
          >
            {copied ? <Check className="w-4 h-4 text-[#c6ff3d]" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      ) : (
        <button 
          onClick={handleCopy}
          className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 p-2 rounded-lg bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 text-zinc-400 hover:bg-white/[0.1] hover:text-[#c6ff3d] transition-all duration-300 scale-95 group-hover:scale-100 shadow-xl"
          aria-label="Copy code"
        >
          {copied ? <Check className="w-4 h-4 text-[#c6ff3d]" /> : <Copy className="w-4 h-4" />}
        </button>
      )}
      <div className="p-5 overflow-x-auto text-[13.5px] text-[#e2e8f0] font-mono leading-[1.7] relative">
        <pre className="relative z-10">
          <code>{code}</code>
        </pre>
        {/* Shine effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 -translate-x-[100%] group-hover:translate-x-[100%] transition-all duration-1000 pointer-events-none" />
      </div>
    </motion.div>
  );
}
