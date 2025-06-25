import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();

  const secretKey = process.env.RECAPTCHA_SECRET_KEY!;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    { method: "POST" }
  );

  const data = await response.json();

  if (data.success && data.score >= 0.5) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false });
  }
}
