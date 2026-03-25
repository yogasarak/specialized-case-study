import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import "./globals.css";

const TITLE = "Sara Keyser | Senior Software Engineer / UX Lead";
const DESCRIPTION =
  "Senior UX case studies spanning product strategy, design systems, responsive commerce, and frontend delivery.";
const ICON_PATH = "/favicon.ico";

export const metadata: Metadata = {
  metadataBase: new URL("https://specialized-case-study.vercel.app"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      {
        url: ICON_PATH,
        type: "image/png",
        sizes: "32x32",
      },
    ],
    shortcut: [{ url: ICON_PATH }],
    apple: [{ url: ICON_PATH }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
