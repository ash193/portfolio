import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // Set to true if using port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req) {
  const { email, subject, message } = await req.json();

  try {
    await transporter.sendMail({
      from: `"Your Name" <${process.env.SMTP_USER}>`,
      to: email,
      subject: subject,
      html: `
        <strong>${subject}</strong>
        <p>Thank you for contacting me! I will reach out soon</p>
        <br>
        <p>Your message that was submitted:</p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "There was an error sending your email." },
      { status: 500 }
    );
  }
}
