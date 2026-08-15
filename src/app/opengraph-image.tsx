import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "ONE CARE PHARMA — medical store in Bhajanpura, Delhi";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo.jpg"));
  const logoSrc = `data:image/jpeg;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#e7f6ec",
          alignItems: "center",
          padding: 64,
          gap: 48,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 420,
            height: 420,
            background: "white",
            borderRadius: 24,
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt=""
            width={360}
            height={290}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 620 }}>
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "#146c36",
              lineHeight: 1.1,
            }}
          >
            ONE CARE PHARMA
          </div>
          <div style={{ marginTop: 16, fontSize: 28, color: "#24a148" }}>
            Medical store · Bhajanpura
          </div>
          <div style={{ marginTop: 12, fontSize: 24, color: "#4d6658" }}>
            Main Wazirabad Road, Delhi 110053
          </div>
          <div style={{ marginTop: 28, fontSize: 22, color: "#146c36" }}>
            WhatsApp · Call · Google Maps
          </div>
        </div>
      </div>
    ),
    size,
  );
}
