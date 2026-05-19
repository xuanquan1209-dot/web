import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Certificate Lookup (Mock)
  app.post("/api/lookup-certificate", (req, res) => {
    const { code } = req.body;
    // Mock logic: certificates starting with "VMI" are "valid"
    if (code && code.startsWith("VMI")) {
      res.json({
        success: true,
        data: {
          id: code,
          owner: "Công ty TNHH Sản xuất ABC",
          equipment: "Thước cặp cơ khí",
          date: "2026-01-15",
          expiry: "2027-01-15",
          status: "Hợp lệ"
        }
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Không tìm thấy chứng chỉ hoặc mã không hợp lệ."
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
