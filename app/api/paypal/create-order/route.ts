import { BookingPaymentError, getValidatedBookingAmount, parseBookingPaymentInput } from "@/app/lib/booking-payment";
import { paypalRequest, publicPaymentError } from "@/app/lib/paypal";

type CreatedOrder = { id: string; status: string };

export async function POST(request: Request) {
  try {
    const body = await request.json() as { booking?: unknown };
    const booking = parseBookingPaymentInput(body.booking);
    const amount = getValidatedBookingAmount(booking);

    const order = await paypalRequest<CreatedOrder>("/v2/checkout/orders", {
      method: "POST",
      headers: { "PayPal-Request-Id": crypto.randomUUID() },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [{
          reference_id: "YY_BOOKING_DEMO",
          description: "YY Booking sandbox demo",
          amount: { currency_code: "EUR", value: amount },
        }],
        application_context: {
          shipping_preference: "NO_SHIPPING",
          user_action: "PAY_NOW",
          brand_name: "YY Booking Demo",
        },
      }),
    });

    return Response.json({ id: order.id, status: order.status });
  } catch (error) {
    if (error instanceof BookingPaymentError) {
      return Response.json({ error: error.message }, { status: 400 });
    }
    console.error("PayPal sandbox order creation failed.", error instanceof Error ? error.message : "Unknown error");
    return Response.json({ error: publicPaymentError(error) }, { status: 500 });
  }
}
