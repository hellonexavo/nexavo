export type StudioServiceId = "haircut" | "beard" | "facial" | "color" | "consultation";
export type LegacyPaymentServiceId = "regular" | "deep" | "tenancy" | "office";
export type ServiceId = StudioServiceId | LegacyPaymentServiceId;
export type FrequencyId = "once" | "weekly" | "fortnightly";
export type ExtraId = "windows" | "oven" | "fridge" | "ironing";
export type SpecialistId = "any" | "maya" | "elias" | "noor";
export type BookingStatus = "Pending" | "Confirmed" | "Completed";

export type Service = { id: StudioServiceId; name: string; description: string; price: number; duration: number; imagePosition: string };
export type Specialist = { id: SpecialistId; name: string; role: string; specialty: string; availability: string; initials: string };
export type DemoBooking = { id: string; reference: string; customer: string; email: string; phone: string; notes: string; service: StudioServiceId; specialist: SpecialistId; date: string; time: string; price: number; status: BookingStatus };

export const services: Service[] = [
  { id: "haircut", name: "Signature Haircut", description: "A considered cut, wash, finish, and styling consultation.", price: 48, duration: 60, imagePosition: "68% 54%" },
  { id: "beard", name: "Beard Ritual", description: "Precision shaping with hot towels and a nourishing finish.", price: 32, duration: 40, imagePosition: "79% 62%" },
  { id: "facial", name: "Facial Treatment", description: "A restorative treatment tailored to your skin and routine.", price: 72, duration: 75, imagePosition: "28% 76%" },
  { id: "color", name: "Color & Finish", description: "Personalized color work followed by a polished studio finish.", price: 110, duration: 120, imagePosition: "93% 54%" },
  { id: "consultation", name: "Studio Consultation", description: "A focused session to plan your cut, color, or care journey.", price: 25, duration: 30, imagePosition: "47% 45%" },
];

export const specialists: Specialist[] = [
  { id: "any", name: "First available", role: "Studio team", specialty: "We’ll match you with the right specialist", availability: "Best availability", initials: "YY" },
  { id: "maya", name: "Maya Laurent", role: "Senior stylist", specialty: "Precision cuts & natural texture", availability: "Available this week", initials: "ML" },
  { id: "elias", name: "Elias Noor", role: "Grooming specialist", specialty: "Modern barbering & beard care", availability: "Next opening Friday", initials: "EN" },
  { id: "noor", name: "Noor Bennett", role: "Color & skin specialist", specialty: "Dimensional color & facials", availability: "Available tomorrow", initials: "NB" },
];

export const availableDates = [
  { value: "2026-08-20", day: "Thu", date: "20", month: "Aug", available: true },
  { value: "2026-08-21", day: "Fri", date: "21", month: "Aug", available: true },
  { value: "2026-08-22", day: "Sat", date: "22", month: "Aug", available: true },
  { value: "2026-08-23", day: "Sun", date: "23", month: "Aug", available: false },
  { value: "2026-08-24", day: "Mon", date: "24", month: "Aug", available: true },
  { value: "2026-08-25", day: "Tue", date: "25", month: "Aug", available: true },
];

export const timeSlots = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

// Retained for the existing sandbox API routes. The premium demo does not expose payment controls.
export const serviceIds: ServiceId[] = ["regular", "deep", "tenancy", "office"];
export const extraIds: ExtraId[] = ["windows", "oven", "fridge", "ironing"];
export const frequencyIds: FrequencyId[] = ["once", "weekly", "fortnightly"];
const legacyPricing = { regular: [34, .42], deep: [72, .78], tenancy: [110, .92], office: [58, .55] } as const;
export function calculatePrice(input: { service: ServiceId; size: number; bedrooms: number; bathrooms: number; extras: ExtraId[]; frequency: FrequencyId }) {
  const rules = legacyPricing[input.service as LegacyPaymentServiceId] ?? legacyPricing.regular;
  const extras = input.extras.reduce((sum, extra) => sum + ({ windows: 28, oven: 24, fridge: 16, ironing: 20 })[extra], 0);
  const multiplier = ({ once: 1, weekly: .85, fortnightly: .92 })[input.frequency];
  return Math.round(Math.max(49, (rules[0] + input.size * rules[1] + input.bedrooms * 8 + input.bathrooms * 14 + extras) * multiplier));
}

export const sampleBookings: DemoBooking[] = [
  { id: "sample-1", reference: "YS-0820-A14", customer: "Alex Morgan", email: "alex@example.test", phone: "+31 6 0000 1101", notes: "Demo record", service: "haircut", specialist: "maya", date: "2026-08-20", time: "09:00", price: 48, status: "Confirmed" },
  { id: "sample-2", reference: "YS-0820-C82", customer: "Jamie Ellis", email: "jamie@example.test", phone: "+31 6 0000 1102", notes: "Demo record", service: "color", specialist: "noor", date: "2026-08-20", time: "12:00", price: 110, status: "Pending" },
  { id: "sample-3", reference: "YS-0821-F31", customer: "Taylor Reed", email: "taylor@example.test", phone: "+31 6 0000 1103", notes: "Demo record", service: "beard", specialist: "elias", date: "2026-08-21", time: "15:30", price: 32, status: "Confirmed" },
  { id: "sample-4", reference: "YS-0824-B09", customer: "Jordan Lee", email: "jordan@example.test", phone: "+31 6 0000 1104", notes: "Demo record", service: "facial", specialist: "noor", date: "2026-08-24", time: "10:30", price: 72, status: "Completed" },
];

export const serviceById = (id: StudioServiceId) => services.find((service) => service.id === id) ?? services[0];
export const specialistById = (id: SpecialistId) => specialists.find((specialist) => specialist.id === id) ?? specialists[0];
