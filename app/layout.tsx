import "./globals.css";
import { Inter, Crimson_Text, JetBrains_Mono } from "next/font/google";
import ThemeInitScript from "@/components/site/ThemeInitScript";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
});
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ThemeInitScript />
      </head>
      <body className={`${inter.variable} ${crimson.variable} ${jetbrains.variable} font-sans bg-brand-bg text-brand-fg`}>
        {children}
      </body>
    </html>
  );
}
