import { NextResponse } from "next/server";

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  selectedPackage?: unknown;
  budget?: unknown;
  preferredTimeline?: unknown;
  message?: unknown;
};

const RESEND_BATCH_URL = "https://api.resend.com/emails/batch";

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(email: string) {
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;
    const name = cleanText(body.name, 120);
    const email = cleanText(body.email, 254).toLowerCase();
    const message = cleanText(body.message, 5000);
    const company = cleanText(body.company, 160) || "Not provided";
    const selectedPackage = cleanText(body.selectedPackage, 160) || "Not sure yet";
    const budget = cleanText(body.budget, 100) || "Not provided";
    const preferredTimeline = cleanText(body.preferredTimeline, 100) || "Not provided";

    if (!name || !isValidEmail(email) || !message) {
      return NextResponse.json(
        { error: "Please provide a valid name, email, and project description." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const ownerEmail = process.env.CONTACT_OWNER_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !ownerEmail || !fromEmail) {
      console.error("Contact email delivery is not configured.");
      return NextResponse.json(
        { error: "Email delivery is temporarily unavailable." },
        { status: 503 }
      );
    }

    const submittedAt = new Date();
    const submittedAtLabel = new Intl.DateTimeFormat("en-GB", {
      dateStyle: "full",
      timeStyle: "long",
      timeZone: "Europe/Brussels",
    }).format(submittedAt);

    const ownerMessage = [
      "New YY Builds project request",
      "",
      `Customer name: ${name}`,
      `Customer email: ${email}`,
      `Company: ${company}`,
      `Selected service: ${selectedPackage}`,
      `Budget: ${budget}`,
      `Preferred timeline: ${preferredTimeline}`,
      `Submitted: ${submittedAtLabel}`,
      `Submitted (ISO): ${submittedAt.toISOString()}`,
      "",
      "Project details:",
      message,
    ].join("\n");

    const customerMessage = [
      `Hi ${name},`,
      "",
      "Thanks for your project request. YY Builds has received it and will review the details before getting back to you.",
      "",
      `Selected service: ${selectedPackage}`,
      `Budget: ${budget}`,
      "",
      "Your project details:",
      message,
      "",
      "YY Builds",
    ].join("\n");

    const emailResponse = await fetch(RESEND_BATCH_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `contact-${crypto.randomUUID()}`,
      },
      body: JSON.stringify([
        {
          from: fromEmail,
          to: [ownerEmail],
          reply_to: email,
          subject: `New project request — ${selectedPackage}`,
          text: ownerMessage,
        },
        {
          from: fromEmail,
          to: [email],
          reply_to: ownerEmail,
          subject: "We received your YY Builds project request",
          text: customerMessage,
        },
      ]),
    });

    if (!emailResponse.ok) {
      console.error("Resend contact delivery failed.", emailResponse.status);
      return NextResponse.json(
        { error: "Your request could not be delivered. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your request has been received.",
    });
  } catch (error) {
    console.error(
      "Contact request failed.",
      error instanceof Error ? error.message : "Unknown error"
    );
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
