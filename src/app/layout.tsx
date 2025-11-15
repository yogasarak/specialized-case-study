import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        url: "https://asgngaofemmqdyjcetkm.supabase.co/storage/v1/object/public/specialized-case-study/favicon.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      "https://asgngaofemmqdyjcetkm.supabase.co/storage/v1/object/public/specialized-case-study/favicon.png",
    ],
  },
  icons: {
    icon: "https://asgngaofemmqdyjcetkm.supabase.co/storage/v1/object/public/specialized-case-study/favicon.png",
    shortcut:
      "https://asgngaofemmqdyjcetkm.supabase.co/storage/v1/object/public/specialized-case-study/favicon.png",
    apple:
      "https://asgngaofemmqdyjcetkm.supabase.co/storage/v1/object/public/specialized-case-study/favicon.png",
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
