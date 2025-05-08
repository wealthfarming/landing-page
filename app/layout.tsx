import type { Metadata } from "next";
import { dmSerifText, ibmPlexSans, inter } from './fonts';
import "./globals.css";
import { I18nProvider } from "@/components/context/i18n";
import { InterfaceProvider } from "@/components/context/interface-context";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Landing Page - Wealth Farming",
  description: "Landing Page - Wealth Farming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerifText.variable} ${ibmPlexSans.variable} ${inter.variable}`}>
      <I18nProvider>
        <InterfaceProvider>
          <Toaster richColors position="bottom-right"/>
          <body>{children}</body>
        </InterfaceProvider>
      </I18nProvider>
    </html>
  );
}
