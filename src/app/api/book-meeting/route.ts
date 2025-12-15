import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { MeetingRequest } from "@/types/booking";

export const runtime = "nodejs";

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    throw new Error("SMTP configuration is missing. Check environment variables.");
  }

  return nodemailer.createTransport({
    host,
    port: Number(port),
    secure: Number(port) === 465,
    auth: { user, pass },
  });
}

function buildEmailTemplate(data: MeetingRequest) {
  const { date, time, name, email, phone, message, meetingType = "Google Meet" } = data;

  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
      <tr>
        <td align="center">
          <table width="640" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 12px 30px rgba(15,23,42,0.08);">
            <tr>
              <td style="background:#0f172a;color:#ffffff;padding:20px 24px;font-size:18px;font-weight:700;letter-spacing:0.2px;">
                New Meeting Request
              </td>
            </tr>
            <tr>
              <td style="padding:24px;">
                <p style="margin:0 0 12px;font-size:16px;">A visitor requested a meeting. Details are below:</p>
                <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
                  <tr>
                    <td style="padding:10px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;width:140px;">Date</td>
                    <td style="padding:10px;border:1px solid #e5e7eb;">${date}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;">Time</td>
                    <td style="padding:10px;border:1px solid #e5e7eb;">${time}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;">Meeting Type</td>
                    <td style="padding:10px;border:1px solid #e5e7eb;">${meetingType}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;">Name</td>
                    <td style="padding:10px;border:1px solid #e5e7eb;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;">Email</td>
                    <td style="padding:10px;border:1px solid #e5e7eb;">${email}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;">Phone</td>
                    <td style="padding:10px;border:1px solid #e5e7eb;">${phone}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;vertical-align:top;">Message</td>
                    <td style="padding:10px;border:1px solid #e5e7eb;white-space:pre-line;">${message || "No additional message."}</td>
                  </tr>
                </table>
                <p style="margin:16px 0 0;font-size:13px;color:#475569;">
                  Reply to this email to confirm the slot. If Google Meet is selected, send the meet link in your reply.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as MeetingRequest;
    const { name, email, phone, date, time, message = "", meetingType = "Google Meet" } = body;

    if (!name || !email || !phone || !date || !time) {
      return NextResponse.json({ success: false, message: "All required fields must be provided." }, { status: 400 });
    }

    const transporter = createTransporter();
    const toAddress = process.env.BOOKING_TO || process.env.CONTACT_EMAIL || "info@appstone.in";

    await transporter.sendMail({
      from: `"Appstone Meetings" <${process.env.SMTP_USER}>`,
      to: toAddress,
      replyTo: `${name} <${email}>`,
      subject: `Meeting request: ${date} at ${time} (${meetingType})`,
      html: buildEmailTemplate({ name, email, phone, date, time, message, meetingType }),
    });

    return NextResponse.json({ success: true, message: "Your meeting request has been sent. We’ll confirm shortly." });
  } catch (error) {
    console.error("[api/book-meeting] error:", error);
    const message = error instanceof Error ? error.message : "Internal server error.";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

