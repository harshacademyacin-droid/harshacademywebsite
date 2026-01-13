import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Create submission data
    const submissionData = {
      name,
      email,
      phone: phone || "Not provided",
      subject: subject || "General Inquiry",
      message,
      timestamp: new Date().toISOString(),
      ipAddress: request.headers.get("x-forwarded-for") || "Unknown",
    };

    // Save to file (you can replace this with database storage)
    const dataDir = path.join(process.cwd(), "data", "contacts");

    // Create directory if it doesn't exist
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }

    // Create filename with timestamp
    const filename = `contact_${Date.now()}_${name.replace(/\s+/g, "_")}.json`;
    const filepath = path.join(dataDir, filename);

    // Write data to file
    await writeFile(filepath, JSON.stringify(submissionData, null, 2));

    // Log submission
    console.log("New contact form submission:", submissionData);

    // Send email notification using Gmail SMTP
    try {
      const emailTo = process.env.GMAIL_USER || "harshacademy.ac.in@gmail.com";

      // Create transporter with Gmail SMTP
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      // HTML email template
      const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #1e3a8a; display: block; margin-bottom: 5px; }
              .value { background: white; padding: 12px; border-left: 4px solid #3b82f6; border-radius: 4px; }
              .footer { background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">🎓 Harsh Academy</h1>
                <p style="margin: 10px 0 0 0;">New Contact Form Submission</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Name:</span>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <span class="label">Phone:</span>
                  <div class="value">${phone || "Not provided"}</div>
                </div>
                <div class="field">
                  <span class="label">Subject:</span>
                  <div class="value">${subject || "General Inquiry"}</div>
                </div>
                <div class="field">
                  <span class="label">Message:</span>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
                <div class="field">
                  <span class="label">Received:</span>
                  <div class="value">${new Date(submissionData.timestamp).toLocaleString()}</div>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from your website contact form.</p>
                <p>Reply directly to: ${email}</p>
              </div>
            </div>
          </body>
        </html>
      `;

      // Send email
      await transporter.sendMail({
        from: `"Harsh Academy Website" <${process.env.GMAIL_USER}>`,
        to: emailTo,
        replyTo: email,
        subject: `New Contact Form: ${subject || "General Inquiry"} - ${name}`,
        html: htmlContent,
        text: `
New Contact Form Submission from Harsh Academy Website

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject || "General Inquiry"}

Message:
${message}

Received: ${new Date(submissionData.timestamp).toLocaleString()}

---
Reply directly to: ${email}
        `.trim(),
      });

      console.log("Email notification sent successfully to:", emailTo);
    } catch (emailError) {
      // Log email error but don't fail the entire request
      console.error("Failed to send email notification:", emailError);
      // You might want to implement a fallback notification system here
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. We'll get back to you soon!"
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

// Handle GET requests (optional - for testing)
export async function GET() {
  return NextResponse.json(
    { message: "Contact API endpoint. Use POST to submit contact form." },
    { status: 200 }
  );
}
