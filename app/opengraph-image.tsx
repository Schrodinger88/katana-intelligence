import { ImageResponse } from "next/og";

export const alt = "Katana Intelligence";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#3b413c",
          color: "#ffffff",
          position: "relative",
          overflow: "hidden",
          padding: "56px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(218,240,238,0.2), transparent 35%), radial-gradient(circle at bottom left, rgba(157,181,178,0.25), transparent 30%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              letterSpacing: "-0.03em",
              opacity: 0.9,
            }}
          >
            Katana Intelligence
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 880 }}>
            <div
              style={{
                display: "flex",
                fontSize: 74,
                lineHeight: 1,
                letterSpacing: "-0.06em",
                fontWeight: 700,
              }}
            >
              AI growth systems for service businesses.
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 30,
                lineHeight: 1.3,
                color: "rgba(255,255,255,0.72)",
                maxWidth: 760,
              }}
            >
              Websites, automation, AI SEO, and lead generation built as one operator-led engine.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 24,
              color: "#daf0ee",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "12px 20px",
                border: "1px solid rgba(218,240,238,0.35)",
                borderRadius: 999,
              }}
            >
              Free setup
            </div>
            <div style={{ display: "flex", color: "rgba(255,255,255,0.7)" }}>
              Pay for qualified leads
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
