import type { Metadata } from "next";
import { Play } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { Locale, routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";

const play = Play({
  variable: "--font-play",
  weight: ["400", "700"],
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Carigo",
  description:
    "Explorer le Maroc est désormais rapide, simple et à un seul clic. Réservez votre voiture en un clic - Exploring Morocco is now fast, simple, and just a click away. Book your ride in on click.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`${play.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
