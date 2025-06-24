import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzuXKLT96fhJUQp026H6cdp9Wq0KJRVraqWtDLOVrAFb2o-KivXHctSm5A1VvnEQuoaEw/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const result = await response.text();
    return NextResponse.json({ success: true, message: result });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
