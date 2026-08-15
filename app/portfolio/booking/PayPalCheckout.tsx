"use client";

import PayPalButtons, { type PaymentResult } from "@/app/components/PayPalButtons";
import type { BookingPaymentInput } from "@/app/lib/booking-payment";

type Props = {
  clientId: string;
  booking: BookingPaymentInput;
  serviceName: string;
  formattedTotal: string;
  validateBooking: () => boolean;
  onPaymentSuccess: (result: PaymentResult) => void;
};

export default function PayPalCheckout({
  clientId,
  booking,
  serviceName,
  formattedTotal,
  validateBooking,
  onPaymentSuccess,
}: Props) {
  return (
    <div className="mt-6 border-t border-slate-200 pt-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Secure sandbox checkout</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-950">Choose how to pay</h3>
        </div>
        <span className="rounded-full bg-amber-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-800">Test mode</span>
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between gap-4"><dt className="text-slate-500">Service</dt><dd className="text-right font-semibold text-slate-900">{serviceName}</dd></div>
          <div className="flex justify-between gap-4"><dt className="text-slate-500">Property size</dt><dd className="font-semibold text-slate-900">{booking.size} m²</dd></div>
          <div className="flex justify-between gap-4 border-t border-slate-200 pt-3"><dt className="font-semibold text-slate-700">Final total</dt><dd className="text-lg font-bold text-slate-950">{formattedTotal}</dd></div>
        </dl>
      </div>

      <p className="my-4 rounded-xl bg-cyan-50 px-4 py-3 text-center text-xs font-semibold text-cyan-900">Test payment — no real money will be charged.</p>
      <PayPalButtons
        clientId={clientId}
        selection={{ kind: "booking", booking }}
        beforeCreate={validateBooking}
        incompleteMessage="Complete the booking details above before starting payment."
        onSuccess={onPaymentSuccess}
      />
    </div>
  );
}
