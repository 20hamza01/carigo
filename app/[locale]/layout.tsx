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

// export const metadata: Metadata = {
//   title: "Carigo",
//   description:
//     "Explorer le Maroc est maintenant simple et rapide. Réservez votre voiture en un clic – Exploring Morocco is now fast and easy. Book your car in just one click.",
// };

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const baseUrl = "https://carigo.vercel.app";
  const { locale } = await params;
  const canonicalUrl = `${baseUrl}/${locale}`;

  return {
    metadataBase: new URL(baseUrl), //Required for relative URLs below
    title: "Carigo",
    description:
      "Explorer le Maroc est maintenant simple et rapide. Réservez votre voiture en un clic – Exploring Morocco is now fast and easy. Book your car in just one click.",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: "Carigo",
      description:
        "Explorer le Maroc est maintenant simple et rapide. Réservez votre voiture en un clic – Exploring Morocco is now fast and easy. Book your car in just one click.",
      url: canonicalUrl,
      siteName: "Carigo",
      images: [
        {
          url: `/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Carigo – Rent a car in Morocco",
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
      <body className={`${play.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
