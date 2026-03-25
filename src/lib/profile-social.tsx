/* eslint-disable @next/next/no-img-element */

import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { arrayBufferToBase64 } from "./base64";

const PROFILE_IMAGE_PATH = path.join(
  process.cwd(),
  "public",
  "images",
  "portfolio-favicon.png"
);

const PROFILE_SHARE_IMAGE_PATH = path.join(
  process.cwd(),
  "public",
  "images",
  "portfolio-share-preview.png"
);

async function getImageBase64(imagePath: string) {
  const imageBuffer = await readFile(imagePath);
  return arrayBufferToBase64(
    imageBuffer.buffer.slice(
      imageBuffer.byteOffset,
      imageBuffer.byteOffset + imageBuffer.byteLength
    )
  );
}

export async function createProfileIconResponse(size: { width: number; height: number }) {
  const base64 = await getImageBase64(PROFILE_IMAGE_PATH);

  return new ImageResponse(
    <img
      alt="Sara Keyser portfolio icon"
      src={`data:image/png;base64,${base64}`}
      width={size.width}
      height={size.height}
      style={{ width: "100%", height: "100%" }}
    />,
    size
  );
}

export async function createProfileShareImageResponse(size: {
  width: number;
  height: number;
}) {
  const base64 = await getImageBase64(PROFILE_SHARE_IMAGE_PATH);

  return new ImageResponse(
    <img
      alt="Sara Keyser portfolio share preview"
      src={`data:image/png;base64,${base64}`}
      width={size.width}
      height={size.height}
      style={{ width: "100%", height: "100%" }}
    />,
    size
  );
}
