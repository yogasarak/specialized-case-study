import { ImageResponse } from "next/og";
import { arrayBufferToBase64 } from "../lib/base64";
import { FAVICON_URL } from "../../favicon-url";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default async function Icon() {
  try {
    const response = await fetch(FAVICON_URL);
    if (!response.ok) {
      throw new Error(`Failed to load favicon from ${FAVICON_URL}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const base64 = arrayBufferToBase64(arrayBuffer);

    return new ImageResponse(
      <img
        alt="Case study favicon"
        src={`data:image/png;base64,${base64}`}
        width={size.width}
        height={size.height}
        style={{ width: "100%", height: "100%" }}
      />,
      { ...size }
    );
  } catch (error) {
    console.error(
      `Unable to generate favicon from remote source ${FAVICON_URL}`,
      error
    );
  }

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
    />,
    { ...size }
  );
}
