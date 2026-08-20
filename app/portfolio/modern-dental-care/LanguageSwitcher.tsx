type LanguageSwitcherProps = {
  current: "nl" | "en";
  englishPath: string;
  dutchPath: string;
};

export default function LanguageSwitcher({ current, englishPath, dutchPath }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center rounded-full border border-[#173f39]/15 bg-white p-1 text-[10px] font-semibold uppercase tracking-[0.12em]">
      <a href={dutchPath} aria-current={current === "nl" ? "page" : undefined} className={`rounded-full px-3 py-2 ${current === "nl" ? "bg-[#173f39] text-white" : "text-[#60736d]"}`}>NL</a>
      <a href={englishPath} aria-current={current === "en" ? "page" : undefined} className={`rounded-full px-3 py-2 ${current === "en" ? "bg-[#173f39] text-white" : "text-[#60736d]"}`}>EN</a>
    </div>
  );
}