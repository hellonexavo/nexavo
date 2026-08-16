export type AssistantRole = "user" | "assistant";
export type AssistantMessage = { role: AssistantRole; content: string };

export const assistantStarters = [
  "Which service is right for my business?",
  "Can you redesign my existing website?",
  "How could a booking system help me?",
  "What can an AI assistant do for my business?",
] as const;

export const assistantSystemPrompt = `You are the YY Builds website assistant. Give concise, practical advice in professional English.

YY Builds creates modern websites, AI tools and simple automations for small businesses. It offers:
- Starter Website, €199: a professional one-page website, mobile responsive design, contact or enquiry form, basic SEO, deployment, and one revision.
- Business Website, from €349: a multi-section or small multi-page website, stronger business presentation, enquiry or quote flow, mobile responsive design, basic SEO, and deployment.
- AI & Automation, from €149: AI assistant or chat integration, lead capture, simple business automation, and project-dependent custom integrations.
- Custom Project, custom quote: a tailored combination of website, enquiry, booking, integration, or automation work.

Never invent testimonials, client counts, guarantees, or capabilities. If requirements are unclear, ask one useful question. Encourage a project request when the visitor is ready. Payment for real YY Builds work is arranged manually only after project review.`;

export function fallbackAssistantReply(message: string) {
  const text = message.toLowerCase();
  if (/(redesign|existing|outdated|old site|old website)/.test(text)) return "A Business Website project can include a careful redesign of your existing site, with improved mobile usability, structure, calls to action, and presentation. Share the current website and what is not working, and YY Builds can recommend the right scope.";
  if (/(booking|appointment|reservation|lead|quote|enquiry|whatsapp)/.test(text)) return "A Business Website or Custom Project is likely the best fit, depending on how advanced the enquiry or booking flow needs to be. Business Website projects start from €349, and the final scope is reviewed before payment instructions are sent.";
  if (/(\bai\b|assistant|automation|faq|questions|qualif)/.test(text)) return "AI & Automation starts from €149 for a focused assistant, lead-capture tool, or simple workflow. Custom integrations can change the scope, so YY Builds reviews the requirement before confirming the final price.";
  if (/(price|cost|package|website|landing|seo|mobile)/.test(text)) return "A Starter Website is €199, a Business Website starts from €349, AI & Automation starts from €149, and tailored work is quoted as a Custom Project. Tell me the main action visitors should take and I’ll suggest a starting point.";
  return "YY Builds offers a Starter Website for €199, Business Website from €349, AI & Automation from €149, and custom-quoted projects. Tell me what your business does and the result you want, and I’ll suggest the clearest starting point.";
}
