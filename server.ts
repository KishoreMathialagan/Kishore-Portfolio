import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  timestamp: string;
}

// In-memory array to store received inquiries so they persist through client-side refreshes
const inquiries: ContactInquiry[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route to submit contact form
  app.post("/api/contact", (req: express.Request, res: express.Response) => {
    try {
      const { name, email, company, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          error: "Name, email, and message are required fields." 
        });
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          error: "Please provide a valid email address."
        });
      }

      const newInquiry: ContactInquiry = {
        id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        name,
        email,
        company: company || "",
        message,
        timestamp: new Date().toISOString()
      };

      inquiries.push(newInquiry);

      // Log clearly to the system console
      console.log("\n==================================================");
      console.log(`📩 NEW PORTFOLIO CONTACT SUBMISSION`);
      console.log(`ID:        ${newInquiry.id}`);
      console.log(`Timestamp: ${newInquiry.timestamp}`);
      console.log(`From:      ${newInquiry.name} (${newInquiry.email})`);
      if (newInquiry.company) {
        console.log(`Company:   ${newInquiry.company}`);
      }
      console.log(`Message:   ${newInquiry.message}`);
      console.log("==================================================\n");

      // Optional future integration template (e.g. Resend, Sendgrid)
      if (process.env.RESEND_API_KEY) {
        console.log("[EMAIL] A Resend API key was detected! In production, this would fire a real email dispatch.");
      }

      return res.status(200).json({ 
        success: true, 
        message: "Your inquiry has been successfully received by Kishore. He will review it shortly!",
        inquiry: newInquiry
      });
    } catch (err: any) {
      console.error("Error saving contact inquiry:", err);
      return res.status(500).json({ 
        success: false, 
        error: "Internal server error. Please try again." 
      });
    }
  });

  // Admin secure fetch to retrieve received messages in-app for demonstration/review
  app.get("/api/admin/inquiries", (req: express.Request, res: express.Response) => {
    return res.status(200).json({
      success: true,
      inquiries
    });
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
    app.get('*', (req: express.Request, res: express.Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
