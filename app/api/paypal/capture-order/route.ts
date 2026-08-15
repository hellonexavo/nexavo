import { BookingPaymentError } from "@/app/lib/booking-payment";
import { resolvePaymentSelection } from "@/app/lib/payment-selection";
import { paypalRequest, publicPaymentError } from "@/app/lib/paypal";

type PayPalOrder = {
  id: string;
  status: string;
  purchase_units?: Array<{
    reference_id?: string;
    amount?: { currency_code?: string; value?: string };
    payments?: { captures?: Array<{ id?: string; status?: string }> };
  }>;
};

export async function POST(request: Request) {
  try {
    const body = await request.json() as { orderID?: unknown; selection?: unknown };
    if (typeof body.orderID !== "string" || !/^[A-Z0-9]{6,30}$/i.test(body.orderID)) {
      return Response.json({ error: "Invalid PayPal order reference." }, { status: 400 });
    }

    const payment = resolvePaymentSelection(body.selection);
    const order = await paypalRequest<PayPalOrder>(`/v2/checkout/orders/${body.orderID}`);
    const purchaseUnit = order.purchase_units?.[0];

    if (
      purchaseUnit?.reference_id !== payment.referenceId ||
      purchaseUnit.amount?.currency_code !== "EUR" ||
      purchaseUnit.amount.value !== payment.amount
    ) {
      return Response.json({ error: "The PayPal order does not match this booking." }, { status: 409 });
    }

    const captured = await paypalRequest<PayPalOrder>(`/v2/checkout/orders/${body.orderID}/capture`, {
      method: "POST",
      headers: { "PayPal-Request-Id": `yy-capture-${body.orderID}` },
      body: "{}",
    });
    const capture = captured.purchase_units?.[0]?.payments?.captures?.[0];

    if (captured.status !== "COMPLETED" || !capture?.id || capture.status !== "COMPLETED") {
      throw new Error("PayPal did not confirm the capture.");
    }

    return Response.json({
      orderID: captured.id,
      captureID: capture.id,
      status: captured.status,
    });
  } catch (error) {
    if (error instanceof BookingPaymentError) {
      return Response.json({ error: error.message }, { status: 400 });
    }
    console.error("PayPal sandbox order capture failed.", error instanceof Error ? error.message : "Unknown error");
    return Response.json({ error: publicPaymentError(error) }, { status: 500 });
  }
}
