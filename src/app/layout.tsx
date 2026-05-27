import type { Metadata } from "next";
import { Be_Vietnam_Pro, Jost, Overpass_Mono } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["vietnamese", "latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const overpassMono = Overpass_Mono({
  variable: "--font-overpass-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Repes: Real Estate Media Editing Service",
  description:
    "Repes delivers scalable real estate photo and video editing, floor plans, and virtual staging with Real Estate Media Editing ecosystem. Ensuring fast turnaround and consistent quality for top photography company worldwide.",
  openGraph: {
    title: "Repes: Real Estate Media Editing Service",
    description:
      "Repes delivers scalable real estate photo and video editing, floor plans, and virtual staging. Fast turnaround, consistent quality, global scale.",
    type: "website",
    url: "https://repes.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Repes: Real Estate Media Editing Service",
    description:
      "Scalable real estate media editing — photo, video, floor plans, virtual staging.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${beVietnamPro.variable} ${jost.variable} ${overpassMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

