import type { Metadata } from "next";
import { Play } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import "./globals.css";
import { Locale, routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages, getTranslations } from "next-intl/server";
import { GoogleAnalytics } from "@next/third-parties/google";

const play = Play({
  variable: "--font-play",
  weight: ["400", "700"],
  subsets: ["cyrillic"],
});

// export const metadata: Metadata = {
//   title: "Carigo",
//   description:
//     "Explorer le Maroc est maintenant simple et rapide. Réservez votre voiture en un clic – Exploring Morocco is now fast and easy. Book your car in just one click.",
// };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const baseUrl = "https://www.carigo.ma";
  const { locale } = await params;
  const canonicalUrl = `${baseUrl}/${locale}`;

  const ogImageUrl = locale === "en" ? "/og-image-en.png" : "/og-image-fr.png"; // fallback/default
  const ogImageAlt =
    locale === "en"
      ? "Carigo – Rent a car in Morocco"
      : "Carigo – Réserver votre voiture au Maroc"; // fallback/default

  return {
    metadataBase: new URL(baseUrl), //Required for relative URLs below
    title: "Carigo",
    description:
      "Louez une voiture à Casablanca, Aéroport & partout en ville. Explorer le Maroc est maintenant simple et rapide – Rent a Car in Casablanca, Airport & Citywide. Exploring Morocco is now fast and easy.",
    alternates: {
      canonical: canonicalUrl,
    },
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      title: "Carigo",
      description:
        "Louez une voiture à Casablanca, Aéroport & partout en ville. Explorer le Maroc est maintenant simple et rapide – Rent a Car in Casablanca, Airport & Citywide. Exploring Morocco is now fast and easy.",
      url: canonicalUrl,
      siteName: "Carigo",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
  };
}

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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${play.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <GoogleAnalytics gaId="G-RZ03P8YM8W" />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
