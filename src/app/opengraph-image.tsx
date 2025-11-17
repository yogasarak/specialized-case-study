import { ImageResponse } from "next/og";

const ICON_URL =
  "https://iwkgbbmrbksmctgieaoz.supabase.co/storage/v1/object/public/Specialized%20Case%20Study/favicon.png";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const LOGO_WIDTH = 280;

const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(buffer).toString("base64");
  }

  let binary = "";
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;

  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode(...chunk);
  }

  return btoa(binary);
};

export default async function OpenGraphImage() {
  let base64: string | null = null;

  try {
    const response = await fetch(ICON_URL);
    if (!response.ok) {
      throw new Error(`Failed to load favicon from ${ICON_URL}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    base64 = arrayBufferToBase64(arrayBuffer);
  } catch (error) {
    console.error(
      `Unable to load remote favicon for OG image from ${ICON_URL}`,
      error
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          background: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {base64 ? (
          <img
            alt="Case study logo over black background"
            src={`data:image/png;base64,${base64}`}
            style={{
              width: LOGO_WIDTH,
              height: "auto",
            }}
          />
        ) : (
          <span
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#fff",
              letterSpacing: -4,
              textTransform: "uppercase",
            }}
          >
            Specialized
          </span>
        )}
      </div>
    ),
    {
      ...size,
    }
  );
}
