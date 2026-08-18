export type BookingStatus = "Confirmed" | "Cancelled" | "Completed";
export type NotificationStatus = "Pending" | "Sent" | "Failed";

export type Booking = {
  id: string;
  reference: string;
  businessId: string;
  customer: { fullName: string; email: string; phone: string };
  serviceId: string;
  serviceName: string;
  serviceDurationMinutes: number;
  price: number;
  date: string;
  time: string;
  notes?: string;
  status: BookingStatus;
  notificationStatus: NotificationStatus;
  createdAt: string;
  updatedAt: string;
};

export type CreateBookingInput = Omit<Booking, "id" | "reference" | "status" | "notificationStatus" | "createdAt" | "updatedAt">;
