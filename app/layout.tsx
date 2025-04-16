import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/components/context/i18n";
import { InterfaceProvider } from "@/components/context/interface-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landing page - Wealth Farming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <I18nProvider>
        <InterfaceProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}
          </body>
          </InterfaceProvider>
      </I18nProvider>
    </html>
  );
}
