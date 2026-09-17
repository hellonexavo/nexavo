"use client";

export default function AssistantTrigger({ className }: { className: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event("yy-open-assistant"))}
    >
      Try YY AI <span aria-hidden="true">↗</span>
    </button>
  );
}
