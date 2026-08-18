export type BusinessService = {
  id: string;
  name: string;
  description: string;
  durationMinutes: number;
  price: number;
  active: boolean;
};

export type OpeningHours = { day: string; open: string | null; close: string | null };

export const businessConfig = {
  id: "north-stone-studio",
  name: "North & Stone Studio",
  initials: "NS",
  description: "Personalized care in a calm, welcoming space. Choose a service and find a time that works for you.",
  address: "124 Market Street, San Francisco",
  timezone: "America/Los_Angeles",
  bookingEmail: "yybuilds.contact@gmail.com",
  openingHours: [
    { day: "Monday", open: "09:00", close: "18:00" },
    { day: "Tuesday", open: "09:00", close: "18:00" },
    { day: "Wednesday", open: "09:00", close: "18:00" },
    { day: "Thursday", open: "09:00", close: "18:00" },
    { day: "Friday", open: "09:00", close: "18:00" },
    { day: "Saturday", open: "09:00", close: "18:00" },
    { day: "Sunday", open: null, close: null },
  ] satisfies OpeningHours[],
  services: [
    { id: "haircut", name: "Signature Haircut", description: "Consultation, cut and tailored finish", durationMinutes: 45, price: 55, active: true },
    { id: "consultation", name: "Consultation", description: "One-on-one expert guidance and planning", durationMinutes: 30, price: 35, active: true },
    { id: "premium", name: "Premium Service", description: "Our complete signature studio experience", durationMinutes: 75, price: 95, active: true },
  ] satisfies BusinessService[],
  cancellationPolicy: "Please provide at least 24 hours' notice to cancel or reschedule your appointment.",
};

export const bookingDates = [
  { value: "2026-08-17", day: "Mon", date: "17", label: "Monday, August 17, 2026" },
  { value: "2026-08-18", day: "Tue", date: "18", label: "Tuesday, August 18, 2026" },
  { value: "2026-08-19", day: "Wed", date: "19", label: "Wednesday, August 19, 2026" },
  { value: "2026-08-20", day: "Thu", date: "20", label: "Thursday, August 20, 2026" },
  { value: "2026-08-21", day: "Fri", date: "21", label: "Friday, August 21, 2026" },
  { value: "2026-08-22", day: "Sat", date: "22", label: "Saturday, August 22, 2026" },
] as const;

export const bookingTimeSlots = [
  { time: "9:00 AM", available: true }, { time: "9:45 AM", available: true },
  { time: "10:30 AM", available: true }, { time: "11:15 AM", available: false },
  { time: "1:00 PM", available: true }, { time: "1:45 PM", available: true },
  { time: "2:30 PM", available: false }, { time: "3:15 PM", available: true },
  { time: "4:00 PM", available: true },
] as const;

export function formatOpeningHours(hours: OpeningHours[]) {
  const openDays = hours.filter((item) => item.open && item.close);
  if (!openDays.length) return "Hours unavailable";
  const formatTime = (value: string) => new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: "UTC" }).format(new Date(`2026-01-01T${value}:00Z`));
  const first = openDays[0];
  const last = openDays.at(-1)!;
  return `${first === last ? first.day : `${first.day.slice(0, 3)}–${last.day.slice(0, 3)}`}, ${formatTime(first.open!)}–${formatTime(first.close!)}`;
}
