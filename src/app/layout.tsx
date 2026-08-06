import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SchemaMarkup from "./components/SchemaMarkup";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "BarebackBronc.pro - #1 Bareback Bronc Riding App | Rigging, Draw Analysis & Community",
  description:
    "The everything app for bareback bronc riding. Check your rigging against the association spec before a chute judge does, see every recorded trip on the horse you drew, track the injuries and conditioning that decide how long your career lasts, and connect with the whole bareback bronc community.",
  keywords:
    "bareback bronc riding, bareback bronc, bareback bronc riding app, bareback bronc rigging, rigging specification, rigging spec, mark out rule, spur out, bucking horse database, draw analysis, rodeo scores, bareback bronc glove, NHSRA bareback bronc, NIRA bareback bronc, amateur rodeo, roughstock app, rodeo injury tracking",
  authors: [{ name: "BarebackBronc.pro" }],
  creator: "BarebackBronc.pro",
  publisher: "BarebackBronc.pro",
  metadataBase: new URL("https://www.barebackbronc.pro"),
  alternates: {
    canonical: "https://www.barebackbronc.pro",
  },
  openGraph: {
    title: "BarebackBronc.pro - #1 Bareback Bronc Riding App",
    description:
      "Shortest career in rodeo. Make it longer. Rigging management, draw analysis, injury tracking, and the whole bareback bronc community.",
    url: "https://www.barebackbronc.pro",
    siteName: "BarebackBronc.pro",
    type: "website",
    images: [
      {
        url: "https://www.barebackbronc.pro/logo.png",
        width: 1200,
        height: 630,
        alt: "BarebackBronc.pro",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BarebackBronc.pro - #1 Bareback Bronc Riding App",
    description:
      "Shortest career in rodeo. Make it longer. Rigging, draws, injuries, and community.",
    images: ["https://www.barebackbronc.pro/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable + " antialiased"}>
        <SchemaMarkup />
        {children}
      </body>
    </html>
  );
}
