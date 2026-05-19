import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// Placeholder components for other pages
const About = () => <div className="pt-32 pb-20 px-4 text-center"> <h1 className="text-4xl font-bold">Giới thiệu</h1> <p className="mt-4 text-slate-600">Nội dung đang được cập nhật...</p> </div>;
const Services = () => <div className="pt-32 pb-20 px-4 text-center"> <h1 className="text-4xl font-bold">Dịch vụ</h1> <p className="mt-4 text-slate-600">Nội dung đang được cập nhật...</p> </div>;
const SciTech = () => <div className="pt-32 pb-20 px-4 text-center"> <h1 className="text-4xl font-bold">KH & Công nghệ</h1> <p className="mt-4 text-slate-600">Nội dung đang được cập nhật...</p> </div>;
const News = () => <div className="pt-32 pb-20 px-4 text-center"> <h1 className="text-4xl font-bold">Tin tức</h1> <p className="mt-4 text-slate-600">Nội dung đang được cập nhật...</p> </div>;
const Contact = () => <div className="pt-32 pb-20 px-4 text-center"> <h1 className="text-4xl font-bold">Liên hệ</h1> <p className="mt-4 text-slate-600">Nội dung đang được cập nhật...</p> </div>;

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans selection:bg-red-200 selection:text-red-900">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gioi-thieu" element={<About />} />
            <Route path="/dich-vu" element={<Services />} />
            <Route path="/khoa-hoc" element={<SciTech />} />
            <Route path="/tin-tuc" element={<News />} />
            <Route path="/lien-he" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
        
        {/* Scroll to Top Button (Floating) */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-blue-700 text-white p-4 rounded-full shadow-2xl hover:bg-red-600 transition-all transform hover:scale-110 z-40"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </Router>
  );
}
