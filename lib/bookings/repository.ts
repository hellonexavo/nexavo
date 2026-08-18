import { randomInt, randomUUID } from "node:crypto";
import type { Booking, CreateBookingInput, NotificationStatus } from "@/models/booking";

export class BookingConflictError extends Error {}

export interface BookingRepository {
  create(input: CreateBookingInput): Promise<Booking>;
  updateNotificationStatus(id: string, status: NotificationStatus): Promise<Booking | null>;
}

// Demo adapter: records last only for the lifetime of the current server process.
// A persistent adapter can replace this without changing the booking flow or API.
class InMemoryBookingRepository implements BookingRepository {
  private readonly records = new Map<string, Booking>();

  async create(input: CreateBookingInput) {
    const conflict = Array.from(this.records.values()).some((booking) => booking.businessId === input.businessId && booking.serviceId === input.serviceId && booking.date === input.date && booking.time === input.time);
    if (conflict) throw new BookingConflictError("That time slot is no longer available.");
    const now = new Date().toISOString();
    const booking: Booking = {
      ...input,
      id: randomUUID(),
      reference: `YY-${new Date().getUTCFullYear()}-${randomInt(100000, 1000000)}`,
      status: "Confirmed",
      notificationStatus: "Pending",
      createdAt: now,
      updatedAt: now,
    };
    this.records.set(booking.id, booking);
    return booking;
  }

  async updateNotificationStatus(id: string, notificationStatus: NotificationStatus) {
    const booking = this.records.get(id);
    if (!booking) return null;
    const updated = { ...booking, notificationStatus, updatedAt: new Date().toISOString() };
    this.records.set(id, updated);
    return updated;
  }
}

export const bookingRepository: BookingRepository = new InMemoryBookingRepository();
