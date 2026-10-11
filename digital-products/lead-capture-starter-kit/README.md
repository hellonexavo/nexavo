# YY Builds — Lead Capture Starter Kit
Version 1.0 · Digital template pack · €49 one-time

## What buyers receive
This is a DIY implementation guide and copy-ready templates. No deployment, hosting, payment handling, maintenance, or revenue guarantee is included.

## 1. Lead workflow blueprint
1. A visitor sends a form containing name, email, service, message, and consent where necessary.
2. Validate required fields and normalize the email address. Reject malformed or suspicious payloads and rate-limit requests.
3. Generate a unique lead ID and record an ISO timestamp.
4. Check for duplicate leads within a defined period, using email plus service as matching keys.
5. Write new leads to a restricted-access sheet or CRM; keep duplicate updates rather than creating extra leads.
6. Notify the owner using a connected authorized email system.
7. Send an acknowledgement to the visitor only after successful intake.
8. Log failures without exposing personally identifiable data in public logs; trigger an operator alert on repeated errors.

## 2. Suggested form fields
- Name (required)
- Email (required)
- Phone (optional)
- Service or product interest (required)
- Project description (required)
- Consent checkbox only where applicable
- Hidden honeypot input, server-side validation and rate limiting

## 3. Owner notification template
**Subject:** New website enquiry — {{service}} — {{lead_id}}

A new website enquiry was received.
Name: {{name}}
Email: {{email}}
Service: {{service}}
Message: {{message}}
Received: {{created_at}}
Lead reference: {{lead_id}}

Check the lead in your CRM or internal sheet. Avoid forwarding customer data to unapproved third parties.

## 4. Customer acknowledgement
**Subject:** We received your enquiry — {{business_name}}

Hello {{name}},

Thanks for contacting {{business_name}}. We've received your request about {{service}} and will review the details.

Your reference is {{lead_id}}. You can reply to this email if you need to add anything.

Best regards,
{{business_name}}

## 5. Deduplication rules
- Normalize email by trimming spaces and lowercasing it.
- Use the email and service combination as a matching key for the last 24 hours.
- Preserve an audit record of duplicates, but avoid sending multiple acknowledgements for the same enquiry.
- Never permanently discard a legitimate enquiry solely because the name matches an existing customer.

## 6. Setup checklist
- [ ] The sender owns or is authorized to configure the site and connected systems.
- [ ] Securely store API credentials outside source control.
- [ ] Restrict sheet/CRM access to necessary staff.
- [ ] Create a legitimate test lead and confirm receipt.
- [ ] Verify that duplicate submissions do not create duplicate notifications.
- [ ] Test malformed input and rate limits.
- [ ] Confirm email acknowledgement is not sent when intake fails.
- [ ] Establish a retention and deletion policy for customer data.
- [ ] Monitor errors and failed deliveries.

## 7. Starter implementation notes
For n8n: Webhook/Form Trigger → Validate → Normalize → CRM/Sheet Lookup → IF Duplicate → Create/Update → Owner Email → Customer Confirmation. Enable error workflows, least-privilege credentials, and test with synthetic contacts. Before accepting live leads, adapt the flow to local privacy requirements.

© 2026 YY Builds. Template for the purchaser's internal use; redistribution or resale not included.