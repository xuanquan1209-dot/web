import { motion } from "motion/react";
import { SITE_CONTENT } from "../constants";

export default function StatsSection() {
  return (
    <section className="py-20 bg-[#003366] overflow-hidden relative">
      {/* Decorative SVG pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-editorial" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect width="60" height="60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-editorial)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {SITE_CONTENT.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group border-r border-white/10 last:border-0"
            >
              <div className="text-4xl md:text-5xl font-mono text-white mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-blue-200 font-bold uppercase tracking-[0.2em] text-[10px]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
