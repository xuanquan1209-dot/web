import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SITE_CONTENT } from "../constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded overflow-hidden flex items-center justify-center shadow-sm transition-transform group-hover:scale-105">
              <img src="/logo.jpg" alt="VMI Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-sm leading-tight uppercase tracking-tight ${scrolled ? "text-[#003366]" : "text-white"}`}>
                {SITE_CONTENT.header.name}
              </span>
              <span className={`text-[10px] font-medium uppercase tracking-widest ${scrolled ? "text-[#4B5563]" : "text-blue-100"}`}>
                {SITE_CONTENT.header.subName}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10">
            {SITE_CONTENT.header.nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-[13px] font-bold transition-colors hover:text-[#DC2626] uppercase tracking-[0.05em] ${
                  location.pathname === item.href
                    ? "text-[#DC2626]"
                    : scrolled
                    ? "text-[#003366]"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? "text-slate-700" : "text-white"} focus:outline-none`}
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {SITE_CONTENT.header.nav.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-bold text-slate-700 hover:bg-slate-50 border-l-4 border-transparent hover:border-red-600 transition-all uppercase"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
