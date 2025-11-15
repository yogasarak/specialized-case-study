import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const FAVICON_URL =
  "https://iwkgbbmrbksmctgieaoz.supabase.co/storage/v1/object/public/Specialized%20Case%20Study/favicon.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = "Specialized Bikes E-Commerce Case Study";
const DESCRIPTION =
  "A comprehensive redesign of Specialized's product listing page highlighting responsive shopping, streamlined filtering, and higher conversion performance.";

export const metadata: Metadata = {
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
        url: FAVICON_URL,
        type: "image/png",
      },
    ],
    shortcut: [{ url: FAVICON_URL }],
    apple: [{ url: FAVICON_URL }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
