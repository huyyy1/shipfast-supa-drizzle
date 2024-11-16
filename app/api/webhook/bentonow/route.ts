import { NextResponse, NextRequest } from "next/server";
import config from "@/config";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Supabase hook sends JSON payloads.

    // Extract necessary fields from the payload
    const { type, email, subject, html } = body;

    // Ensure required fields exist
    if (!email || !subject || !html) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send email using BentoNow API
    const bentoResponse = await axios.post(
      `${config.bentonow.apiBase}/emails`, // Replace with the endpoint for sending emails
      {
        to: email,
        subject: subject,
        content: html,
      },
      {
        headers: {
          Authorization: `Bearer ${config.bentonow.secretKey}`, // Pass BentoNow secret key
        },
      }
    );

    // Return response to Supabase
    return NextResponse.json({ success: true, data: bentoResponse.data });
  } catch (error) {
    console.error("Error sending email via BentoNow:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
