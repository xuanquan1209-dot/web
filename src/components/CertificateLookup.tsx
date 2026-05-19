import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Loader2, CheckCircle2, AlertCircle, Trash2 } from "lucide-react";

export default function CertificateLookup() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/lookup-certificate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      if (data.success) {
        setResult(data.data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Có lỗi xảy ra khi kết nối máy chủ. Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display italic text-[#003366] mb-4">
            Tra cứu chứng chỉ trực tuyến
          </h2>
          <p className="text-[#4B5563] text-sm uppercase tracking-widest font-bold">
            Xác thực kết quả kiểm định & hiệu chuẩn chuẩn quốc gia
          </p>
        </div>

        <div className="bg-[#0F172A] p-1 shadow-2xl rounded-sm">
          <div className="bg-white p-10 border border-slate-800">
            <div className="flex justify-between items-center mb-6 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              <span>// Request Terminal</span>
              <span>ID: SESSION_{Math.random().toString(36).substring(7).toUpperCase()}</span>
            </div>

            <form onSubmit={handleLookup} className="flex flex-col md:flex-row gap-0 mb-8 overflow-hidden rounded-sm border border-slate-200">
              <div className="flex-grow relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-xs select-none">
                  $
                </div>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  placeholder="NHẬP MÃ CHỨNG CHỈ..."
                  className="w-full pl-10 pr-6 py-4 bg-white outline-none transition-all font-mono text-sm tracking-widest placeholder:opacity-30"
                />
                {code && (
                  <button
                    type="button"
                    onClick={() => setCode("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#DC2626]"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
              <button
                type="submit"
                disabled={loading || !code}
                className="bg-[#003366] hover:bg-[#DC2626] disabled:bg-slate-300 text-white px-10 py-4 font-bold transition-all flex items-center justify-center space-x-2 text-[12px] uppercase tracking-[0.2em]"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                <span>Execute</span>
              </button>
            </form>

            <AnimatePresence mode="wait">
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-[#0F172A] text-blue-400 p-8 font-mono text-sm relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-2 text-[10px] text-blue-900/50 uppercase">output.json</div>
                  
                  <div className="space-y-1">
                    <p className="text-green-500">// Result: OK</p>
                    <p>{"{"}</p>
                    <div className="pl-6 space-y-1">
                      <p>"status": <span className="text-green-400">"VERIFIED"</span>,</p>
                      <p>"equipment": <span className="text-white">"{result.equipment}"</span>,</p>
                      <p>"serial_id": <span className="text-white">"{result.id}"</span>,</p>
                      <p>"owner_entity": <span className="text-white">"{result.owner}"</span>,</p>
                      <p>"valid_until": <span className="text-orange-400">"{result.expiry}"</span></p>
                    </div>
                    <p>{"}"}</p>
                  </div>

                  <div className="mt-8 flex items-center space-x-2 text-green-500/50 text-[10px]">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>System calibrated against national standards.</span>
                  </div>
                </motion.div>
              )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-[#1E1B1B] text-red-500 p-8 font-mono text-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-2 text-[10px] text-red-900/50 uppercase">error.log</div>
                <div className="space-y-1">
                  <p className="text-red-400">// ERROR_DETECTED</p>
                  <p>{`> STACK_TRACE: ${error.toUpperCase()}`}</p>
                  <p className="opacity-50 mt-4">TERMINATING_SESSION...</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-400/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-400/5 blur-[120px] rounded-full"></div>
    </section>
  );
}
