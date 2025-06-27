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
import { Car, Phone } from "lucide-react";
import LocaleSwitcher from "@/components/LocalSwitcher";

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
      <div className="hidden md:block">
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
      </div>

      <div className="block md:hidden">
        {loading ? (
          <PageLoader />
        ) : (
          <div className="min-h-screen bg-gradient-to-tr from-blue-900 via-blue-600 to-blue-300">
            {/* NAV */}
            <div className="flex justify-between items-center mx-4 py-8">
              <div className="flex justify-between items-center gap-2">
                <Car className="text-white h-12 w-12" />
                <p className="text-3xl font-extrabold text-white">CariGO</p>
              </div>
              <div className="rounded-full border-0 mr-2">
                <LocaleSwitcher />
              </div>
            </div>

            {/* BODY */}
            <div className="absolute min-h-screen w-full bg-white rounded-4xl top-30 shadow-[0_-8px_12px_rgba(0,0,0,0.2)]">
              <div className="flex flex-col justify-center items-start">
                {/* ECONOMIC CARS */}
                <div className="w-full">
                  <EconomicCars />
                </div>

                <Separator className="mt-8" />

                {/* MIDCLASS CARS */}
                <div className="w-full">
                  <MidClassCars />
                </div>

                <Separator className="mt-8" />

                {/* LUXURIOUS CARS */}
                <div className="w-full">
                  <LuxuriousCars />
                </div>
              </div>
              <Separator className="mt-8" />
              <div className="flex items-center justify-center gap-3 bg-gradient-to-tr from-blue-900 via-blue-600 to-blue-300">
                <Phone className="w-4 h-4 text-white" />

                <Link
                  href="tel:+212715192639"
                  className="text-sm font-bold text-white py-4"
                >
                  {t("contactUs")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
