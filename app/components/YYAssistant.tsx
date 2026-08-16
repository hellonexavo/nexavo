"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { assistantStarters, type AssistantMessage } from "@/app/lib/assistant";

const welcome: AssistantMessage = { role: "assistant", content: "Hi — I’m YY AI. Tell me what you want to improve, and I’ll help you choose between a Starter Website, Business Website, AI & Automation, or a custom project." };

export default function YYAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<AssistantMessage[]>([welcome]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [demoMode, setDemoMode] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  async function sendMessage(content: string) {
    const clean = content.trim();
    if (!clean || status === "loading") return;
    const history = [...messages.slice(1), { role: "user", content: clean } satisfies AssistantMessage].slice(-12);
    setMessages((current) => [...current, { role: "user", content: clean }]);
    setInput("");
    setStatus("loading");
    try {
      const response = await fetch("/api/assistant", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: history }) });
      const data = (await response.json()) as { reply?: string; error?: string; mode?: "live" | "demo" };
      if (!response.ok || !data.reply) throw new Error(data.error || "The assistant could not respond.");
      setDemoMode(data.mode === "demo");
      setMessages((current) => [...current, { role: "assistant", content: data.reply! }]);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  function startProject() {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent("yy-service-select", { detail: "AI & Automation — From €149" }));
    window.setTimeout(() => document.getElementById("request")?.scrollIntoView({ behavior: "smooth" }), 100);
  }

  return <>
    <button type="button" onClick={() => setIsOpen(true)} className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-white/15 bg-white px-4 py-3.5 font-semibold text-black shadow-2xl transition hover:scale-105 sm:px-5" aria-label="Open YY AI Assistant"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm text-white">YY</span><span>Ask YY AI</span></button>

    {isOpen && <div className="fixed inset-0 z-[60] flex items-end justify-end bg-black/60 p-3 backdrop-blur-sm sm:p-6" role="dialog" aria-modal="true" aria-label="YY AI Assistant">
      <div className="flex max-h-[min(760px,90vh)] w-full max-w-md flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#101012] text-white shadow-[0_30px_100px_rgba(0,0,0,.65)]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-semibold text-black">YY</span><div><p className="font-semibold">YY AI</p><p className="flex items-center gap-2 text-xs text-white/40"><span className="h-2 w-2 rounded-full bg-emerald-400" />Digital services guide</p></div></div>
          <button type="button" onClick={() => setIsOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl hover:bg-white/20" aria-label="Close assistant">×</button>
        </div>

        <div ref={scrollRef} className="min-h-0 flex-1 space-y-4 overflow-y-auto p-5" aria-live="polite">
          {messages.map((message, index) => <div key={`${message.role}-${index}`} className={`max-w-[88%] whitespace-pre-wrap rounded-2xl p-4 text-sm leading-6 ${message.role === "user" ? "ml-auto rounded-tr-sm bg-violet-600 text-white" : "rounded-tl-sm bg-white/[0.07] text-white/75"}`}>{message.content}</div>)}
          {messages.length === 1 && <div className="grid gap-2 pt-1">{assistantStarters.map((question) => <button key={question} type="button" onClick={() => void sendMessage(question)} className="rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-left text-sm text-white/70 hover:border-violet-300/30 hover:bg-white/[0.07]">{question} <span className="text-violet-300">→</span></button>)}</div>}
          {status === "loading" && <div className="flex w-fit items-center gap-2 rounded-2xl rounded-tl-sm bg-white/[0.07] px-4 py-3 text-xs text-white/45"><span className="h-2 w-2 animate-pulse rounded-full bg-violet-300" />Thinking…</div>}
          {status === "error" && <div role="alert" className="rounded-2xl border border-rose-300/20 bg-rose-300/[0.07] p-4 text-sm text-rose-100"><p>The assistant couldn’t respond just now.</p><button type="button" onClick={() => void sendMessage(messages.at(-1)?.role === "user" ? messages.at(-1)!.content : input)} className="mt-2 font-semibold underline underline-offset-4">Try again</button></div>}
        </div>

        <div className="border-t border-white/10 p-4">
          {demoMode && <p className="mb-3 text-center text-[11px] text-white/35">Guided demo mode — project requests still go directly to YY Builds.</p>}
          <form onSubmit={submit} className="flex gap-2"><label className="sr-only" htmlFor="yy-assistant-message">Message</label><input id="yy-assistant-message" value={input} onChange={(event) => setInput(event.target.value)} maxLength={1200} placeholder="Ask about your project…" className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/[0.05] px-4 py-3 text-sm outline-none placeholder:text-white/25 focus:border-violet-300/40" /><button type="submit" disabled={!input.trim() || status === "loading"} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white font-semibold text-black disabled:opacity-40" aria-label="Send message">↑</button></form>
          <button type="button" onClick={startProject} className="mt-3 w-full rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white/75 hover:bg-white/[0.07]">Start a Project <span className="ml-2 text-violet-300">↗</span></button>
        </div>
      </div>
    </div>}
  </>;
}
