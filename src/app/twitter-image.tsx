import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#09090b",
          color: "white",
          padding: 80,
          position: "relative",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: -200,
            background:
              "radial-gradient(circle at 30% 30%, rgba(56,189,248,0.25), transparent 45%), radial-gradient(circle at 70% 40%, rgba(168,85,247,0.22), transparent 45%), radial-gradient(circle at 50% 80%, rgba(34,197,94,0.14), transparent 55%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 26,
              opacity: 0.9,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
              }}
            >
              Z
            </div>
            <div style={{ fontWeight: 700 }}>{site.name}</div>
          </div>

          <div
            style={{
              fontSize: 74,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: -1,
              maxWidth: 900,
            }}
          >
            Complex systems that make businesses run smarter.
          </div>

          <div style={{ fontSize: 30, opacity: 0.75, maxWidth: 950 }}>
            Custom CRMs · AI automation · APIs · AWS + Cloudflare
          </div>
        </div>
      </div>
    ),
    size,
  );
}

