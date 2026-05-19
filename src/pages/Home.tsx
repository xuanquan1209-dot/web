import { motion } from "motion/react";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import ServiceCard from "../components/ServiceCard";
import CertificateLookup from "../components/CertificateLookup";
import { SITE_CONTENT } from "../constants";

export default function Home() {
  return (
    <main className="pt-0">
      <Hero />
      <StatsSection />

      {/* Services Section */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[#DC2626] font-bold uppercase tracking-[0.2em] text-[10px] mb-4 border-l-2 border-[#DC2626] pl-4">
                  Danh mục dịch vụ
                </h3>
                <h2 className="text-4xl md:text-5xl font-display italic text-[#003366] leading-tight">
                  Giải pháp đo lường <br /> chuẩn xác & tin cậy
                </h2>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <button className="bg-[#F8FAFC] text-[#003366] px-8 py-3.5 font-bold hover:bg-[#E5E7EB] transition-all uppercase tracking-widest text-[11px] border border-[#E5E7EB]">
                Tất cả dịch vụ
              </button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {SITE_CONTENT.services.map((service, idx) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                iconName={service.icon}
                items={service.items}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section Teaser */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden border-[16px] border-[#F8FAFC] shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop"
                  alt="Metrology Expert"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#003366] text-white p-10 hidden md:block">
                <p className="text-4xl font-display italic">60+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Năm hình thành</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#DC2626] font-bold uppercase tracking-[0.2em] text-[10px] mb-6">
                Về chúng tôi
              </h3>
              <h2 className="text-4xl md:text-5xl font-display italic text-[#003366] mb-8 leading-tight">
                Cánh tay nối dài của <br />
                <span className="text-[#DC2626]">
                  Viện Đo lường Việt Nam
                </span>
              </h2>
              <p className="text-[#4B5563] text-base mb-10 leading-relaxed font-medium">
                Văn phòng đại diện phía Nam không chỉ là nơi cung cấp dịch vụ, chúng tôi còn là trung tâm kết nối khoa học và công nghệ đo lường tại khu vực trọng điểm kinh tế. Sứ mệnh của chúng tôi là bảo vệ quyền lợi người tiêu dùng và nâng tầm giá trị doanh nghiệp.
              </p>
              <ul className="space-y-4 mb-12">
                {[
                  "Phát triển chuẩn đo lường quốc gia",
                  "Mạng lưới kiểm định, hiệu chuẩn rộng khắp",
                  "Hỗ trợ doanh nghiệp hội nhập quốc tế"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-4 text-[#003366] font-bold text-sm uppercase tracking-tight">
                    <div className="w-5 h-5 bg-[#DC2626] flex items-center justify-center text-[8px] text-white">
                      ✓
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-[#003366] text-white px-10 py-4 font-bold hover:bg-[#002244] transition-all uppercase tracking-[0.2em] text-[11px]">
                Tìm hiểu thêm
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <CertificateLookup />

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Các đơn vị đã tin tưởng hợp tác</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Mocking generic logos or labels for big entities in Vietnam */}
            {["PetroVietnam", "EVN", "Vietnam Airlines", "Samsung", "Toyota", "Vingroup"].map((name) => (
              <span key={name} className="text-2xl font-black text-slate-400 font-sans tracking-tighter uppercase">{name}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
