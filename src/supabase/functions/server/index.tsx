import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-cacdd5e4/health", (c) => {
  return c.json({ status: "ok" });
});

// Email sending endpoint
app.post("/make-server-cacdd5e4/send-email", async (c) => {
  try {
    const { name, email, message } = await c.req.json();
    
    // Validate input
    if (!name || !email || !message) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY environment variable is not set");
      return c.json({ error: "Email service not configured" }, 500);
    }

    // Send email using Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>", // Resend's test email
        to: ["muhilan.sr2024@vitstudent.ac.in"], // Your verified email
        subject: `Portfolio Contact: Message from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p style="color: #666; font-size: 12px;">Sent from your portfolio contact form</p>
        `,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Resend API error response:", JSON.stringify(result, null, 2));
      console.error("Response status:", response.status);
      console.error("Response statusText:", response.statusText);
      return c.json({ 
        error: "Failed to send email", 
        details: result,
        status: response.status,
        statusText: response.statusText
      }, 500);
    }

    console.log("Email sent successfully:", result);
    return c.json({ success: true, messageId: result.id });
  } catch (error) {
    console.error("Error in send-email endpoint:", error);
    return c.json({ error: "Internal server error", details: error.message }, 500);
  }
});

Deno.serve(app.fetch);