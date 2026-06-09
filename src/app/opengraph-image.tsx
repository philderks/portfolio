import { ImageResponse } from "next/og";

export const alt = "Philipp Derks — Software Engineer";
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
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#1f1f1f",
          color: "#f0f0f0",
          fontFamily: "monospace",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(132,241,232,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(132,241,232,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background:
              "linear-gradient(90deg, #84f1e8, #2bf085, #f7ce0f, #f8080b)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -80,
            top: 90,
            width: 520,
            height: 520,
            border: "1px solid #3d3d3d",
            transform: "rotate(12deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 120,
            top: 120,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div style={{ width: 280, height: 10, background: "#84f1e8" }} />
          <div style={{ width: 246, height: 10, background: "#2bf085" }} />
          <div style={{ width: 212, height: 10, background: "#f7ce0f" }} />
          <div style={{ width: 178, height: 10, background: "#f8080b" }} />
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 88px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#84f1e8",
              fontSize: 24,
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            <div style={{ width: 38, height: 2, background: "#84f1e8" }} />
            <span>Zurich, Switzerland</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 118,
              lineHeight: 0.88,
              letterSpacing: -5,
              fontWeight: 900,
              textTransform: "uppercase",
            }}
          >
            <span>Philipp</span>
            <span style={{ color: "#b6b6b6" }}>Derks</span>
          </div>
          <div
            style={{
              marginTop: 34,
              fontSize: 34,
              color: "#f0f0f0",
              maxWidth: 760,
              lineHeight: 1.3,
            }}
          >
            Software engineer focused on full-stack development and distributed systems.
          </div>
          <div
            style={{
              marginTop: 42,
              display: "flex",
              gap: 18,
              color: "#b6b6b6",
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            <span>derks.dev</span>
            <span style={{ color: "#84f1e8" }}>GitHub: philderks</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
