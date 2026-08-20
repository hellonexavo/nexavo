MODERN DENTAL CARE — BOOKING V2

1. Copy BookingFlow.tsx to:
   app/portfolio/modern-dental-care/BookingFlow.tsx

2. In page.tsx add near the top:
   import BookingFlow from "./BookingFlow";

3. In page.tsx find the current booking demo card inside:
   <section id="appointment" ...>

   Keep the left text column.
   Replace ONLY the large white booking card on the right with:
   <BookingFlow />

4. Save. Next.js should hot-reload automatically.

This component is demo-only. It does not submit or store patient information.
