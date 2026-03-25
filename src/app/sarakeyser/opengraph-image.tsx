import { createProfileShareImageResponse } from "@/lib/profile-social";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  return createProfileShareImageResponse(size);
}
