import mongoose, { Schema } from "mongoose";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactDocument = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: "contacts",
  }
);

const ContactModel: mongoose.Model<any> =
  (mongoose.models.Contact as mongoose.Model<any>) ||
  (mongoose.model("Contact", contactSchema) as unknown as mongoose.Model<any>);

async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not set in environment variables");
  }

  if (mongoose.connection.readyState === 1) {
    return;
  }

  await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 10_000,
    heartbeatFrequencyMS: 10_000,
  });
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT; // or 587
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS; // your app password

  if (!host || !port || !user || !pass) {
    throw new Error(
      "SMTP configuration is missing. Check environment variables."
    );
  }

  return nodemailer.createTransport({
    host,
    port: Number(port),
    secure: Number(port) === 465,
    auth: { user, pass },
  });
}

function buildEmailTemplate(data: ContactDocument) {
  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f9fc;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
            <tr>
              <td style="background:#0f172a;color:#ffffff;padding:20px 24px;font-size:18px;font-weight:600;">
                New Contact Request
              </td>
            </tr>
            <tr>
              <td style="padding:24px;">
                <p style="margin:0 0 12px;font-size:16px;">You have received a new message from the contact form.</p>
                <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;width:120px;">Name</td>
                    <td style="padding:10px;border:1px solid #e5e7eb;">${data.name}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;">Email</td>
                    <td style="padding:10px;border:1px solid #e5e7eb;">${data.email}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;">Phone</td>
                    <td style="padding:10px;border:1px solid #e5e7eb;">${data.phone}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;vertical-align:top;">Message</td>
                    <td style="padding:10px;border:1px solid #e5e7eb;white-space:pre-line;">${data.message}</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, message } = body as ContactDocument;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const contactEntry = await ContactModel.create({
      name,
      email,
      phone,
      message,
    });

    const transporter = createTransporter();
    const toAddress = process.env.CONTACT_EMAIL || "info@appstone.in";

    await transporter.sendMail({
      from: `"Appstone Contact" <${process.env.SMTP_USER}>`,
      to: toAddress,
      replyTo: `${name} <${email}>`,
      subject: `New contact request from ${name}`,
      html: buildEmailTemplate(contactEntry.toObject()),
    });

    return NextResponse.json(
      { message: "Your message has been sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[api/contact] error:", error);
    const message =
      error instanceof Error ? error.message : "Internal server error";

    return NextResponse.json({ message }, { status: 500 });
  }
}
