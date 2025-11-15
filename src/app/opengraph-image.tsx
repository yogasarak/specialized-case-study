import { ImageResponse } from "next/og";

const ICON_URL =
  "https://asgngaofemmqdyjcetkm.supabase.co/storage/v1/object/public/specialized-case-study/favicon.png";

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
  const response = await fetch(ICON_URL);
  if (!response.ok) {
    throw new Error(`Failed to load favicon from ${ICON_URL}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const base64 = arrayBufferToBase64(arrayBuffer);

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
        <img
          alt="Case study logo over black background"
          src={`data:image/png;base64,${base64}`}
          style={{
            width: LOGO_WIDTH,
            height: "auto",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
