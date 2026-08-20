---
name: forms-booking-security
description: Build, review, and modify secure forms, booking flows, lead capture, checkout-related UI, and customer-data handling for YY Builds projects. Use for contact forms, booking forms, validation, spam protection, API submission, confirmation states, personal data, payment-related flows, and abuse prevention.
---

# Forms, Booking & Security

## Goal

Create forms and booking flows that are:

- secure;
- reliable;
- understandable;
- privacy-conscious;
- resistant to common abuse;
- honest about whether an action actually succeeded.

Never trade security or correctness for convenience.

## When to use

Use this skill when working with:

- contact forms;
- lead forms;
- booking forms;
- quote requests;
- appointment scheduling;
- checkout-related interfaces;
- payment-related interfaces;
- form API routes;
- email submission;
- database submission;
- customer information;
- confirmation pages;
- spam protection;
- validation;
- external booking integrations.

## Inspect before changing

Before modifying an existing form or booking flow, understand:

1. where the data originates;
2. where it is validated;
3. where it is sent;
4. whether a server endpoint is involved;
5. whether an external service is involved;
6. what constitutes actual success;
7. what happens on failure;
8. whether sensitive information is handled.

Do not infer successful behavior merely from the UI.

## Trust boundaries

Treat all client-provided data as untrusted.

Client-side validation improves UX but must not be considered a security boundary.

For operations requiring trustworthy validation, validate again on the server or trusted backend.

Never trust hidden fields simply because the user cannot normally see them.

## Validation

Validate only what is necessary for the requested operation.

Where appropriate, validate:

- required fields;
- data type;
- reasonable length;
- allowed values;
- email format;
- date/time constraints;
- service identifiers;
- numeric ranges.

Prefer allowlists for fields with known valid options.

Reject malformed or unexpected input safely.

Do not collect unnecessary information.

## Error handling

Handle failures explicitly.

The user should understand:

- whether submission is in progress;
- whether it succeeded;
- whether it failed;
- what they can do next.

Do not expose stack traces, internal implementation details, credentials, or sensitive server information.

Log errors safely when logging is appropriate.

## Success integrity

Never show a success or confirmation state unless the underlying operation actually succeeded.

Do not:

- simulate a successful booking;
- simulate successful payment;
- display "confirmed" after only a client-side interaction;
- silently ignore a failed API request;
- treat an email attempt as delivered unless the integration provides the required success signal.

Distinguish clearly between:

- request submitted;
- request received;
- booking requested;
- booking confirmed;
- payment initiated;
- payment authorized;
- payment completed.

Use wording that reflects the actual state.

## Demo environments

Demo behavior must be clearly distinguishable from production behavior.

Never make a demo booking appear to be a real confirmed reservation.

Never use fake production success responses to hide missing integrations.

If functionality is intentionally a demo, preserve that distinction in both code and user-facing behavior where relevant.

## Duplicate submissions

For actions where duplicate submissions could cause problems:

- disable or protect the submit action while processing;
- consider idempotency where appropriate;
- prevent accidental repeated clicks;
- handle retry behavior carefully.

Do not rely only on button disabling for high-impact server operations.

## Spam and abuse

For public forms, consider proportionate abuse protection.

Depending on risk, this may include:

- server-side validation;
- rate limiting;
- honeypot fields;
- bot protection;
- CAPTCHA or challenge systems;
- request size limits;
- duplicate detection.

Do not add unnecessary friction if lower-impact protection is sufficient.

Security controls should be implemented on a trusted server boundary when they are meant to provide actual protection.

## Personal data

Collect the minimum personal information necessary for the purpose.

Avoid collecting sensitive information unless genuinely required.

Do not:

- expose customer information in client bundles;
- place personal data in URLs unnecessarily;
- log sensitive form content unnecessarily;
- commit real customer information to the repository;
- expose customer data through public API responses.

Consider retention and deletion implications when introducing persistent storage.

## Secrets

Never expose:

- API keys;
- secret tokens;
- private credentials;
- database credentials;
- webhook secrets;
- payment secrets.

Secrets belong in appropriate server-side environment configuration.

Never use private secrets in client-side environment variables or browser code.

Do not commit `.env` secrets.

## API routes

For server/API form handlers:

- validate input;
- reject unsupported methods or operations where relevant;
- return appropriate status codes;
- handle failures safely;
- avoid leaking internal errors;
- apply abuse protection appropriate to the endpoint;
- avoid trusting client-provided authorization or pricing information.

Do not perform privileged operations based solely on client-controlled values.

## Booking logic

For booking flows, verify:

- service selection;
- date/time input;
- timezone assumptions;
- required customer information;
- availability source;
- submission destination;
- confirmation source;
- failure behavior.

Never invent availability.

Never claim a slot is reserved unless the actual booking system confirms it.

If the system only sends a request to the business, call it a booking request rather than a confirmed booking.

## Date and time

Treat dates and times carefully.

Consider:

- timezone;
- locale;
- daylight-saving changes;
- past dates;
- unavailable dates;
- invalid combinations.

Do not assume browser-local time and business-local time are identical.

## Payments and checkout

Treat payment-related code as high risk.

Never:

- handle raw card details yourself when a trusted payment provider should do so;
- store card numbers or security codes;
- log payment credentials;
- expose secret payment keys;
- trust client-provided price or payment status;
- mark an order paid based only on a browser redirect.

Use the payment provider's supported secure flow.

Where server-side verification or signed webhook verification is required, do not replace it with client-side assumptions.

## Webhooks

When using external webhooks:

- verify authenticity using the provider-supported mechanism;
- protect webhook secrets;
- handle duplicate events safely;
- account for retries;
- do not assume events arrive exactly once or in perfect order.

## External integrations

Before changing an external integration:

- inspect existing configuration;
- verify expected request/response behavior;
- preserve error handling;
- avoid changing production credentials;
- avoid inventing undocumented behavior.

If documentation or environment access is insufficient, state what remains unverified.

## Accessibility and UX

Forms must remain usable.

Provide:

- meaningful labels;
- clear required-field indication;
- understandable validation messages;
- keyboard usability;
- visible focus states;
- appropriate autocomplete attributes where useful;
- mobile-friendly controls.

Do not use placeholder text as the only field label.

## Security review

For meaningful changes, explicitly review:

1. input validation;
2. trust boundaries;
3. secrets;
4. personal data;
5. abuse/spam risk;
6. duplicate actions;
7. failure states;
8. success integrity;
9. external integrations;
10. client/server separation.

## Verification

After meaningful changes:

1. inspect the final diff;
2. run relevant lint/type checks;
3. run relevant tests if available;
4. run a production build when appropriate;
5. verify successful submission behavior;
6. verify failed submission behavior;
7. verify validation behavior;
8. verify repeated-click behavior where relevant;
9. review mobile behavior;
10. confirm no secrets or personal data were introduced.

Never claim these checks passed unless they were actually performed.

## Completion standard

The task is complete only when:

- valid submissions behave correctly;
- invalid submissions are handled safely;
- failures do not masquerade as success;
- sensitive data is protected;
- production and demo behavior are not misleadingly mixed;
- common abuse risks were considered;
- mobile and accessibility remain usable;
- relevant checks were actually performed;
- anything that could not be verified is clearly stated.