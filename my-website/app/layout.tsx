import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/components/Layout";

// Daikon font family
// Using the uploaded TTF files
const daikonFont = localFont({
  src: [
    {
      path: "../assets/fonts/Daikon-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Daikon-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Daikon-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-daikon",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "GENNERO - Moderní gynekologická a estetická klinika",
  description: "Péče, která začíná důvěrou. Moderní gynekologická a estetická klinika.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${daikonFont.variable} antialiased`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
