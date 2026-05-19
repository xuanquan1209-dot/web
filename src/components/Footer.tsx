import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Globe, ShieldCheck } from "lucide-react";
import { SITE_CONTENT } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-8 group">
              <div className="w-12 h-12 rounded overflow-hidden flex items-center justify-center bg-white shadow-sm transition-transform group-hover:scale-105">
                <img src="/logo.jpg" alt="VMI Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm leading-tight uppercase">
                  Viện Đo lường
                </span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-[#4B5563]">
                  VP Phía Nam
                </span>
              </div>
            </Link>
            <p className="text-[#9CA3AF] text-[13px] leading-relaxed mb-8 max-w-xs">
              Văn phòng đại diện phía Nam là cánh tay nối dài của Viện Đo lường Việt Nam (VMI) tại khu vực phía Nam. Đảm bảo tính chuẩn xác và tin cậy cao nhất.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Mail, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-[#1F2937] flex items-center justify-center hover:bg-[#DC2626] transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[12px] font-black uppercase tracking-[0.2em] mb-8 border-l-2 border-[#DC2626] pl-4">Dịch vụ</h3>
            <ul className="space-y-4 text-[13px] font-bold text-[#9CA3AF]">
              <li><Link to="#" className="hover:text-white transition-colors">Kiểm định & Hiệu chuẩn</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Thử nghiệm đo lường</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Đào tạo nghiệp vụ</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Tư vấn ISO/IEC 17025</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-black uppercase tracking-[0.2em] mb-8 border-l-2 border-[#DC2626] pl-4">Liên kết</h3>
            <ul className="space-y-4 text-[13px] font-bold text-[#9CA3AF]">
              <li><Link to="/" className="hover:text-white transition-colors uppercase">Trang chủ</Link></li>
              <li><Link to="/gioi-thieu" className="hover:text-white transition-colors uppercase">Giới thiệu</Link></li>
              <li><Link to="/tin-tuc" className="hover:text-white transition-colors uppercase">Tin tức</Link></li>
              <li><Link to="/lien-he" className="hover:text-white transition-colors uppercase">Liên hệ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-black uppercase tracking-[0.2em] mb-8 border-l-2 border-[#DC2626] pl-4">Liên hệ</h3>
            <div className="space-y-5 text-[12px] text-[#9CA3AF]">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#DC2626] shrink-0" />
                <span className="leading-relaxed">{SITE_CONTENT.contact.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#DC2626] shrink-0" />
                <span className="font-bold text-white text-base">{SITE_CONTENT.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#DC2626] shrink-0" />
                <span className="font-bold underline decoration-[#DC2626] underline-offset-4">{SITE_CONTENT.contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-[#1F2937] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-[#4B5563] font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} VIỆN ĐO LƯỜNG VIỆT NAM - VP PHÍA NAM
          </p>
          <div className="flex gap-6 text-[10px] text-[#4B5563] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Chính sách</a>
            <a href="#" className="hover:text-white transition-colors">Bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
