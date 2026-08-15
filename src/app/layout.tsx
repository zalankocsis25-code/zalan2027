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

export const metadata: Metadata = {
  metadataBase: new URL("https://zalankocsis2027.com"),
  title: "Zalan Kocsis | 2027 Baseball Recruiting",
  description: "Class of 2027 catcher and first baseman representing Hungary U18 and Club Beisbol Softbol Barcelona. View verified statistics, game footage and academic information.",
  applicationName: "Zalan Kocsis Baseball Recruiting",
  authors: [{ name: "Zalan Kocsis", url: "https://zalankocsis2027.com" }],
  creator: "Zalan Kocsis",
  publisher: "Zalan Kocsis",
  keywords: [
    "Zalan Kocsis",
    "2027 baseball recruit",
    "catcher recruit",
    "first baseman recruit",
    "Hungary U18 baseball",
    "Club Beisbol Softbol Barcelona",
    "European baseball recruit",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Zalan Kocsis Baseball Recruiting",
    title: "Zalan Kocsis | 2027 Baseball Recruiting",
    description: "Catcher and first baseman representing Hungary U18 and Club Beisbol Softbol Barcelona. View verified statistics, game footage and academics.",
    locale: "en_US",
    images: [
      {
        url: "/images/zalan-batting.jpg",
        width: 1280,
        height: 960,
        alt: "Zalan Kocsis batting for the Hungary U18 National Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zalan Kocsis | 2027 Baseball Recruiting",
    description: "Catcher and first baseman representing Hungary U18 and Club Beisbol Softbol Barcelona.",
    images: ["/images/zalan-batting.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
