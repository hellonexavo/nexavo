export type AssistantRole = "user" | "assistant";
export type AssistantMessage = { role: AssistantRole; content: string };

export const assistantStarters = [
  "Which service is right for my business?",
  "Can you redesign my existing website?",
  "How could a booking system help me?",
  "What can an AI assistant do for my business?",
] as const;

export const assistantSystemPrompt = `You are the YY Builds website assistant. Give concise, practical advice in professional English.

YY Builds creates websites, AI assistants, and automated business workflows for small businesses. It offers:
- Starter Website: a professional one-page website, mobile responsive design, contact or enquiry form, basic SEO, deployment, and one revision.
- Business Website: a larger business website focused on services, credibility, useful lead forms, and a clear customer journey.
- Business Automation: focused lead capture, email notifications, confirmations, follow-ups, routing, and practical business-tool connections.
- AI Assistant & Automation: website assistance, customer information capture, lead qualification, service guidance, AI-assisted workflows, and appropriately scoped integrations.

Do not provide prices, price ranges, budgets, or other monetary amounts. Never invent testimonials, client counts, guarantees, or capabilities. If requirements are unclear, ask one useful question. Encourage a project request when the visitor is ready. Payment for real YY Builds work is arranged manually only after project review.`;

export function fallbackAssistantReply(message: string) {
  const text = message.toLowerCase();
  if (/(redesign|existing|outdated|old site|old website)/.test(text)) return "A Business Website project can include a careful redesign of your existing site, with improved mobile usability, structure, calls to action, and presentation. Share the current website and what is not working, and YY Builds can recommend the right scope.";
  if (/(booking|appointment|reservation|lead|quote|enquiry|whatsapp)/.test(text)) return "Business Automation is a strong fit when enquiries need to trigger notifications, confirmations, follow-ups, or structured lead handling. If the main need is a stronger public website, start with a Business Website and connect an automation where useful.";
  if (/(\bai\b|assistant|faq|questions|qualif)/.test(text)) return "AI Assistant & Automation can answer common questions, collect useful details, qualify leads, and guide customers toward the right service. The exact workflow and integrations are confirmed during scoping.";
  if (/(automation|workflow|email|notification|routing|spreadsheet|crm|reminder)/.test(text)) return "Business Automation is suited to focused processes such as notifications, follow-ups, routing, reminders, or structured data handling. If the workflow needs an AI assistant or AI-assisted decisions, AI Assistant & Automation may be the better fit.";
  if (/(price|cost|package|website|landing|seo|mobile)/.test(text)) return "YY Builds offers Starter Website, Business Website, Business Automation, and AI Assistant & Automation services. Tell me the result you need and I’ll suggest the clearest starting point.";
  return "YY Builds offers two clear paths: websites, or AI and business automation. Tell me what your business does, where time or leads are being lost, and the outcome you want.";
}
