import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { Separator } from "./ui/separator";
import LuxuriousCars from "@/components/LuxuriousCars";
import MidClassCars from "@/components/MidClassCars";
import EconomicCars from "@/components/EconomicCars";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const DesktopComponent = () => {
  const tSupport = useTranslations("support");
  const helloMessage = tSupport("WhatsApp");

  // Encode message for URL
  const encodedMessage = useMemo(
    () => encodeURIComponent(helloMessage),
    [helloMessage]
  );

  const whatsappLink = `https://wa.me/212715192639?text=${encodedMessage}`;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-500 to-blue-200 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-full bg-white/9 absolute h-[700px] w-[700px] right-[-100px] top-[-100px]"></div>
          <div className="rounded-full bg-white/9 absolute h-[700px] w-[700px] left-[-350px] top-160"></div>
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse fixed bottom-10 right-6 bg-green-500 z-590 hover:bg-green-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
          >
            <Image
              width={100}
              height={100}
              src="/whatsapp-icon.png"
              alt="WhatsApp"
              className="w-10 h-10"
            />
          </Link>
          <div className="relative z-10">
            <Navbar />
          </div>

          <Hero />
        </motion.div>
        <section className="px-6 pt-16 pb-24 bg-white" id="cars">
          <EconomicCars />

          <Separator className="mb-16 mt-32" />

          <MidClassCars />

          <Separator className="mb-16 mt-32" />

          <LuxuriousCars />
        </section>
      </div>
    </>
  );
};

export default DesktopComponent;
