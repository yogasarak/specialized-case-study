import { ImageResponse } from "next/og";
import { arrayBufferToBase64 } from "../lib/base64";
import { FAVICON_URL } from "../../favicon-url";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const LOGO_WIDTH = 280;

export default async function OpenGraphImage() {
  let base64: string | null = null;

  try {
    const response = await fetch(FAVICON_URL);
    if (!response.ok) {
      throw new Error(`Failed to load favicon from ${FAVICON_URL}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    base64 = arrayBufferToBase64(arrayBuffer);
  } catch (error) {
    console.error(
      `Unable to load remote favicon for OG image from ${FAVICON_URL}`,
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
