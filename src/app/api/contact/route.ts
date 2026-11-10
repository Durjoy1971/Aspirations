import { NextRequest, NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body || {};

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof email !== "string" ||
      !email.trim() ||
      typeof message !== "string" ||
      !message.trim() ||
      !EMAIL_REGEX.test(email.trim())
    ) {
      return NextResponse.json(
        { error: "Please provide a valid name, email, and message." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for getting in touch! We will respond shortly.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Please provide a valid name, email, and message." },
      { status: 400 }
    );
  }
}
