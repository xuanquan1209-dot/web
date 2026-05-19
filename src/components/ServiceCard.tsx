import { motion } from "motion/react";
import { ShieldCheck, GraduationCap, Zap, ArrowRight, Microscope } from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  iconName: string;
  items: string[];
  delay?: number;
  [key: string]: any;
}

const ICON_MAP: Record<string, any> = {
  ShieldCheck,
  GraduationCap,
  Zap,
  Microscope,
};

export default function ServiceCard({ title, description, iconName, items, delay = 0 }: ServiceProps) {
  const Icon = ICON_MAP[iconName] || ShieldCheck;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group bg-white p-8 border-b-2 border-transparent hover:border-[#DC2626] shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col h-full"
    >
      <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100">
        <Icon className="w-8 h-8 text-[#DC2626]" />
      </div>
      <h3 className="text-[14px] font-bold text-[#003366] uppercase tracking-wider mb-2">
        {title}
      </h3>
      <p className="text-[12px] text-[#4B5563] mb-6 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-2 mb-8 flex-grow">
        {items.slice(0, 3).map((item, idx) => (
          <li key={idx} className="text-[11px] text-[#4B5563] font-medium uppercase tracking-tight flex items-center space-x-2">
            <span className="w-1 h-1 bg-[#DC2626] rounded-full"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <button className="text-[10px] font-black uppercase tracking-[0.2em] text-[#003366] group-hover:text-[#DC2626] transition-colors mt-auto flex items-center gap-2">
        Tìm hiểu chi tiết
        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
}
