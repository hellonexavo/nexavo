import { assistantSystemPrompt, fallbackAssistantReply, type AssistantMessage } from "@/app/lib/assistant";

export const runtime = "nodejs";
const requests = new Map<string, { count: number; resetAt: number }>();
type ProviderResponse = { choices?: Array<{ message?: { content?: string } }> };

function isRateLimited(request: Request) {
  const key = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  const current = requests.get(key);
  if (!current || current.resetAt <= now) {
    requests.set(key, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  current.count += 1;
  return current.count > 12;
}

function parseMessages(value: unknown): AssistantMessage[] | null {
  if (!Array.isArray(value) || value.length === 0 || value.length > 12) return null;
  const messages = value.filter((item): item is AssistantMessage => typeof item === "object" && item !== null && ["user", "assistant"].includes((item as AssistantMessage).role) && typeof (item as AssistantMessage).content === "string" && (item as AssistantMessage).content.trim().length > 0 && (item as AssistantMessage).content.length <= 1200);
  return messages.length === value.length && messages.at(-1)?.role === "user" ? messages : null;
}

export async function POST(request: Request) {
  if (isRateLimited(request)) return Response.json({ error: "Too many messages. Please wait a moment and try again." }, { status: 429 });
  let messages: AssistantMessage[] | null = null;
  try {
    messages = parseMessages(((await request.json()) as { messages?: unknown }).messages);
  } catch {
    return Response.json({ error: "The message could not be read." }, { status: 400 });
  }
  if (!messages) return Response.json({ error: "Please send a valid message." }, { status: 400 });

  const apiKey = process.env.AI_API_KEY;
  const apiUrl = process.env.AI_API_URL;
  const model = process.env.AI_MODEL;
  if (!apiKey || !apiUrl || !model) return Response.json({ reply: fallbackAssistantReply(messages.at(-1)!.content), mode: "demo" });

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model, messages: [{ role: "system", content: assistantSystemPrompt }, ...messages], temperature: 0.3, max_tokens: 350 }),
      signal: AbortSignal.timeout(15_000),
    });
    if (!response.ok) throw new Error(`AI provider returned ${response.status}`);
    const reply = ((await response.json()) as ProviderResponse).choices?.[0]?.message?.content?.trim();
    if (!reply) throw new Error("AI provider returned an empty response");
    return Response.json({ reply, mode: "live" });
  } catch (error) {
    console.error("YY Assistant provider request failed", error instanceof Error ? error.message : "Unknown error");
    return Response.json({ error: "The assistant is temporarily unavailable. Please try again or start a project request." }, { status: 502 });
  }
}
