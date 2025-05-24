import type { Metadata, Viewport } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";

import { GetPageMetadata } from "@/utils/meta-data";

// STYLE SHEETS SOURCE
import "../styles/globals.css";
import "../styles/includes.css";
import "../styles/animations.css";

// FONT CONFIGURATIONS
const libre = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre",
  weight: ["400", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// WEBSITE METADATA AND VIEWPORT
export const metadata: Metadata = GetPageMetadata();
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${libre.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
