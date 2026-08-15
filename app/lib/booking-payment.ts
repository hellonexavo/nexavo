import {
  calculatePrice,
  extraIds,
  frequencyIds,
  serviceIds,
  type ExtraId,
  type FrequencyId,
  type ServiceId,
} from "@/app/portfolio/booking/config";

export type BookingPaymentInput = {
  service: ServiceId;
  size: number;
  bedrooms: number;
  bathrooms: number;
  extras: ExtraId[];
  frequency: FrequencyId;
};

export class BookingPaymentError extends Error {}

function isIntegerBetween(value: unknown, minimum: number, maximum: number): value is number {
  return typeof value === "number" && Number.isInteger(value) && value >= minimum && value <= maximum;
}

export function parseBookingPaymentInput(value: unknown): BookingPaymentInput {
  if (!value || typeof value !== "object") throw new BookingPaymentError("Invalid booking selections.");

  const input = value as Record<string, unknown>;
  if (!serviceIds.includes(input.service as ServiceId)) throw new BookingPaymentError("Invalid service.");
  if (!frequencyIds.includes(input.frequency as FrequencyId)) throw new BookingPaymentError("Invalid frequency.");
  if (!isIntegerBetween(input.size, 20, 500)) throw new BookingPaymentError("Invalid property size.");
  if (!isIntegerBetween(input.bedrooms, 0, 6)) throw new BookingPaymentError("Invalid bedroom count.");
  if (!isIntegerBetween(input.bathrooms, 1, 5)) throw new BookingPaymentError("Invalid bathroom count.");
  if (!Array.isArray(input.extras) || input.extras.length > extraIds.length) throw new BookingPaymentError("Invalid extras.");

  const extras = input.extras as unknown[];
  if (extras.some((extra) => !extraIds.includes(extra as ExtraId))) throw new BookingPaymentError("Invalid extras.");
  if (new Set(extras).size !== extras.length) throw new BookingPaymentError("Duplicate extras.");

  return {
    service: input.service as ServiceId,
    frequency: input.frequency as FrequencyId,
    size: input.size,
    bedrooms: input.bedrooms,
    bathrooms: input.bathrooms,
    extras: extras as ExtraId[],
  };
}

export function getValidatedBookingAmount(input: BookingPaymentInput) {
  return calculatePrice(input).toFixed(2);
}
