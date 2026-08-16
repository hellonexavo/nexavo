import { ImageResponse } from "next/og";

export const alt = "YY Builds — Websites, AI & Automation for small businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#070709", color: "white", fontFamily: "Arial, sans-serif" }}>
      <div style={{ position: "absolute", width: 620, height: 620, borderRadius: 999, left: -180, top: -290, background: "rgba(109,66,216,.28)", filter: "blur(90px)" }} />
      <div style={{ position: "absolute", width: 520, height: 520, borderRadius: 999, right: -170, bottom: -260, background: "rgba(41,93,167,.22)", filter: "blur(90px)" }} />
      <div style={{ position: "absolute", inset: 32, border: "1px solid rgba(255,255,255,.12)", borderRadius: 38 }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", padding: "82px 94px", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 74, height: 74, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", background: "white", color: "#09090b", fontSize: 28, fontWeight: 700 }}>YY</div>
          <div style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: 34, fontWeight: 700 }}>YY Builds</span><span style={{ marginTop: 7, color: "rgba(255,255,255,.48)", fontSize: 18 }}>yybuilds.com</span></div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, letterSpacing: 5, color: "rgba(196,181,253,.9)", textTransform: "uppercase" }}>Websites • AI • Automation</div>
          <div style={{ marginTop: 28, maxWidth: 940, fontSize: 66, lineHeight: 1.02, letterSpacing: -3, fontWeight: 700 }}>Modern digital systems for small businesses</div>
        </div>
      </div>
    </div>,
    size,
  );
}
