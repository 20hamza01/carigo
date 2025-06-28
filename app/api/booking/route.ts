import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const response = await fetch(process.env.APPLICATION_WEB_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await response.text();

    // Send email notification via Resend
    await resend.emails.send({
      from: "bookings@carigo.ma", // domain should be verified on Resend
      to: "hamzaalaouiismaili21@gmail.com", // your notification email
      subject: `🚘 New Booking: ${body.brand} by ${body.fullname}`,
      html: `
        <h2>New Booking Received</h2>
        <ul>
          <li><strong>Full Name:</strong> ${body.fullname}</li>
          <li><strong>Phone:</strong> ${body.phone}</li>
          <li><strong>Car:</strong> ${body.brand} (${body.carClass})</li>
          <li><strong>Fuel:</strong> ${body.fuel}</li>
          <li><strong>Type:</strong> ${body.carType}</li>
          <li><strong>Pickup:</strong> ${body.pickupLocation} — ${body.pickupDate}</li>
          <li><strong>Return:</strong> ${body.returnLocation} — ${body.returnDate}</li>
          <li><strong>Price:</strong> ${body.price} Dhs/day</li>
        </ul>
      `,
    });

    return NextResponse.json({ success: true, message: result });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
