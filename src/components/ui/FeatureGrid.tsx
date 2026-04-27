import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

type FeatureProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  colorClass: string;
  bgClass: string;
};

export function FeatureCard({ icon: Icon, title, description, colorClass, bgClass }: FeatureProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.01, backgroundColor: 'rgba(255,255,255,0.02)' }}
      className="p-5 rounded-2xl border border-white/[0.05] bg-[#0a0a0a] flex flex-col gap-4 transition-colors duration-300"
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bgClass} ${colorClass}`}>
        <Icon className="w-5 h-5" strokeWidth={2.5} />
      </div>
      <div>
        <h4 className="text-[15px] font-semibold text-white mb-2">{title}</h4>
        <p className="text-zinc-400 text-[13px] leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function FeatureGrid({ features }: { features: FeatureProps[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      {features.map((feature, idx) => (
        <motion.div
           key={idx}
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.4, delay: idx * 0.1 }}
        >
          <FeatureCard {...feature} />
        </motion.div>
      ))}
    </div>
  );
}
