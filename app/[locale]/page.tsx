"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LuxuriousCars from "@/components/LuxuriousCars";
import MidClassCars from "@/components/MidClassCars";
import EconomicCars from "@/components/EconomicCars";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import PageLoader from "@/components/PageLoader";
import { useTranslations } from "next-intl";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const t = useTranslations("footer");

  useEffect(() => {
    // simulate loading delay (e.g., wait for font load, image decode, etc.)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // adjust based on real metrics or use performance APIs

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-200 relative overflow-hidden">
          <Navbar />

          <Hero />

          <section className="px-6 pt-16 pb-24 bg-white" id="cars">
            <EconomicCars />

            <Separator className="mb-16 mt-32" />

            <MidClassCars />

            <Separator className="mb-16 mt-32" />

            <LuxuriousCars />
          </section>
          <div className="text-center sm:text-start py-2">
            <Button variant={"link"}>
              <Link href="tel:+212715192639" className="mx-auto text-center">
                {t("contactUs")}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
