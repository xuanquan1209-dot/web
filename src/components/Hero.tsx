import { motion } from "motion/react";
import { ArrowRight, Search } from "lucide-react";
import { SITE_CONTENT } from "../constants";

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1532187875605-1ef1d016b403?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Laboratory"
          className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="border-l-4 border-[#DC2626] pl-8 mb-8">
              <h1 className="text-5xl md:text-7xl font-display italic text-white leading-[1.1] mb-4">
                {SITE_CONTENT.hero.title}
                <br />
                <span className="opacity-90">
                  {SITE_CONTENT.hero.subtitle}
                </span>
              </h1>
            </div>
            
            <p className="text-base text-slate-300 mb-10 leading-relaxed max-w-xl opacity-90">
              {SITE_CONTENT.hero.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-8 py-3.5 font-bold uppercase text-[13px] tracking-widest transition-opacity cursor-pointer">
                Đăng ký hiệu chuẩn
              </button>
              <button className="bg-transparent border border-white text-white px-8 py-3.5 font-bold uppercase text-[13px] tracking-widest hover:bg-white/10 transition-colors">
                Nhận báo giá
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-[10px] font-mono text-white/20 select-none">
          {`// VMI_CORE_SYSTEM_v2.4.0`}
          <br />
          {`> SELECT * FROM accuracy WHERE standard = 'SI'`}
        </div>
        <div className="absolute bottom-10 right-10 text-[10px] font-mono text-white/20 select-none text-right">
          {`STATUS: CALIBRATED`}
          <br />
          {`[ LAT: 10.8231 | LNG: 106.6297 ]`}
        </div>
        
        {/* Subtle grid for tech feel */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
    </div>
  );
}
