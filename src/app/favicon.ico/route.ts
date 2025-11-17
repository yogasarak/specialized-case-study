import { NextResponse } from "next/server";
import { FAVICON_URL } from "../../../favicon-url";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const response = await fetch(FAVICON_URL, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Failed to load favicon from ${FAVICON_URL}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    return new NextResponse(Buffer.from(arrayBuffer), {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error(
      `Unable to proxy favicon request from ${FAVICON_URL}`,
      error
    );
    return NextResponse.json(
      { error: "Unable to load favicon" },
      { status: 500 }
    );
  }
}
