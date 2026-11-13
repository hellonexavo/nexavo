# YY Builds Business Website — reusable product

A multi-page website template for small local service businesses, built using the existing Next.js app. Routes:

- `/business-website-demo` — home
- `/business-website-demo/services` — services and FAQ
- `/business-website-demo/contact` — enquiry form

## Customize for a paying customer
1. Open `app/business-website-demo/config.ts`.
2. Replace **every** fictional detail (name, service descriptions, coverage, email, phone, hours, colors, promises, FAQs) with approved client content.
3. Set `demo: false` **only after** verifying the client's real email, consent and business claims.
4. Check legal/privacy pages and business-registration details required by the client's jurisdiction before going live.
5. Change `base` and routing when deploying as a standalone client site and change all metadata to the client's actual domain.
6. Replace the demo banner, fictional illustration and footer disclosure when appropriate. Do not publish sample business data as though it is real.
7. Test on mobile, tablet and desktop; test links, navigation, keyboard, form and actual email client.
8. Review accessibility, performance and SEO for the production domain. Add analytics only with proper consent and disclosures.

## Enquiry form behavior
The demo **does not submit or store data**. The button is disabled until configured. In live mode it opens the visitor's mail client with a prepared message; **the visitor must explicitly send it**. If the customer needs reliable direct form submission, add a server-side endpoint, spam prevention, secret management, retention limits and a privacy policy. Never claim that mailto is a server-backed form.

## Commercial scope
This is a reusable technical starting point, not a claim of completed client commissions, a guarantee of sales or a production-ready multi-tenant platform. Licensing, handover, hosting, domain, ongoing support and taxes should be agreed separately.
