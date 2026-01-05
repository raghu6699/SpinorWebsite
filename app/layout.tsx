import type { Metadata } from "next";
import "@/app/globals.css";
import { Inter, Crimson_Text, JetBrains_Mono } from "next/font/google";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ThemeInitScript from "@/components/site/ThemeInitScript";
import LeadCapturePopup from "@/components/ui/LeadCapturePopup";

export const metadata: Metadata = {
  metadataBase: new URL("https://spinorinnovations.com"),
  title: {
    default: "Spinor Innovations",
    template: "%s | Spinor Innovations",
  },
  description:
    "Spinor builds business-ready software, AI agents, and growth systems—with change management so teams actually adopt what you ship.",
  applicationName: "Spinor Innovations",
  keywords: [
    "Software Development",
    "AI Agents",
    "Marketing",
    "Change Management",
    "Next.js Agency",
    "D2C Marketing",
    "B2B Marketing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://spinorinnovations.com",
    siteName: "Spinor Innovations",
    title: "Spinor Innovations",
    description:
      "Turn manual work into automated growth with software and AI agents built for real adoption.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Spinor Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spinor Innovations",
    description:
      "Turn manual work into automated growth with software and AI agents built for real adoption.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${crimson.variable} ${jetbrains.variable}`}>
      <body>
        <ThemeInitScript />
        <Header />
        <main>{children}</main>
        <Footer />
        <LeadCapturePopup />
      </body>
    </html>
  );
}
