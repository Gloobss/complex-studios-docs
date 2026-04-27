import type { ReactNode } from 'react';
import { AlertCircle, Info } from 'lucide-react';

type CalloutProps = {
  type: 'info' | 'warning';
  title: string;
  children: ReactNode;
};

export function Callout({ type, title, children }: CalloutProps) {
  const isInfo = type === 'info';
  
  return (
    <div className={`p-5 rounded-2xl border flex gap-4 my-6 items-start transition-all duration-300 hover:shadow-lg ${
      isInfo 
        ? 'bg-[#1a2e05]/30 border-[#c6ff3d]/20 shadow-[inset_0_0_20px_rgba(198,255,61,0.02)] hover:border-[#c6ff3d]/40' 
        : 'bg-[#4d3300]/10 border-[#f59e0b]/30 shadow-[inset_0_0_20px_rgba(245,158,11,0.02)] hover:border-[#f59e0b]/50'
    }`}>
      <div className={`mt-0.5 flex-shrink-0 ${isInfo ? 'text-[#c6ff3d]' : 'text-amber-500'}`}>
        {isInfo ? <Info className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
      </div>
      <div>
        <h5 className={`text-[12px] font-bold tracking-widest uppercase mb-1.5 ${
          isInfo ? 'text-[#c6ff3d]' : 'text-amber-500'
        }`}>
          {title}
        </h5>
        <div className="text-[14.5px] text-zinc-300 leading-relaxed font-sans">
          {children}
        </div>
      </div>
    </div>
  );
}
