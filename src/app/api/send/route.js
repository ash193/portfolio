import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT, 10),
  secure: process.env.SMTP_SECURE === "true", // true if using port 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req) {
  const { email, subject, message } = await req.json();

  try {
    // Send the email to the recipient
    await transporter.sendMail({
      from: `"Ashley Rajpaul" <${process.env.SMTP_USER}>`,
      to: email,
      subject: subject,
      html: `
        <p>Thank you for contacting me! I will reach out soon</p>
        <br>
        <p>Your message that was submitted:</p>
        <p>${message}</p>
      `,
    });

    // Forward a copy of the email to yourself
    await transporter.sendMail({
      from: `"Ashley Rajpaul" <${process.env.SMTP_USER}>`,
      to: process.env.FORWARDING_EMAIL, // Email address to receive the forwarded email
      subject: `FWD: ${subject}`,
      html: `
        <p>This is a forwarded message:</p>
        <br>
        <p>Original sender: ${email}</p>
        <p>Subject: ${subject}</p>
        <p>Message:</p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent and forwarded successfully!" },
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
