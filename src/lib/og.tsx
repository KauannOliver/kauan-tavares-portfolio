import { ImageResponse } from "next/og";
export const ogSize = { width: 1200, height: 630 };
export function createOg(title: string, subtitle: string, accent = "#00D4FF") {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "70px 78px",
        background: "#050816",
        color: "#f4f7ff",
        fontFamily: "sans-serif",
        borderBottom: `8px solid ${accent}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            display: "flex",
            padding: "14px 20px",
            border: `1px solid ${accent}`,
            borderRadius: 12,
            color: accent,
            fontSize: 35,
          }}
        >
          k.t
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#AAB3C5" }}>
          KAUAN TAVARES / PORTFÓLIO
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 55 ? 52 : 68,
            fontWeight: 700,
            letterSpacing: -3,
            lineHeight: 1.1,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            color: "#AAB3C5",
            fontSize: 25,
            lineHeight: 1.4,
            maxWidth: 950,
          }}
        >
          {subtitle}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 17,
          color: accent,
          letterSpacing: 3,
        }}
      >
        AUTOMAÇÃO · DESENVOLVIMENTO · DADOS
      </div>
    </div>,
    ogSize,
  );
}
