import React from "react";
import { Separator } from "./ui/separator";
import LuxuriousCars from "@/components/LuxuriousCars";
import MidClassCars from "@/components/MidClassCars";
import EconomicCars from "@/components/EconomicCars";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Car,
  ChevronDown,
  ChevronUp,
  CircleCheckBig,
  ClockFading,
  HandCoins,
  ShieldCheck,
  Truck,
} from "lucide-react";
import LocaleSwitcher from "@/components/LocalSwitcher";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MobileComponent = () => {
  const tHero1 = useTranslations("hero");
  const tHero2 = useTranslations("hero2");

  const [open, setOpen] = useState(false);
  const touchStartY = useRef<number | null>(null);

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
      <div className="min-h-screen bg-gradient-to-b from-blue-800 to-blue-500 relative overflow-hidden">
        <div className="rounded-full bg-white/9 absolute h-[500px] w-[500px] left-[230px] top-[-200px]"></div>
        <div className="rounded-full bg-white/9 absolute h-[500px] w-[500px] right-[260px] top-160"></div>
        <Link
          href={whatsappLink} // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto animate-pulse fixed bottom-10 right-6 z-[9999] bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        >
          <Image
            width={100}
            height={100}
            src="/whatsapp-icon.png"
            alt="WhatsApp"
            className="w-10 h-10"
          />
        </Link>
        {/* NAV */}
        <div className="flex justify-between items-center mx-4 pb-4 pt-12">
          <div className="flex justify-between items-center gap-2">
            <Car className="text-white h-12 w-12" />
            <p className="text-3xl font-extrabold text-white">CariGO</p>
          </div>
          <div className="rounded-full border-0 mr-2">
            <LocaleSwitcher />
          </div>
        </div>
        {/* BODY */}
        <Drawer open={open} onOpenChange={setOpen}>
          <div className="mx-4 mt-6 flex flex-col gap-4 items-center mb-24">
            <div className="py-6 px-3 flex flex-col gap-12 flex-1 justify-between">
              <div className="flex flex-col gap-2">
                <h1
                  style={{ letterSpacing: "-1.6px" }}
                  className="text-3xl font-semibold text-white flex-1"
                >
                  {tHero2("hook1")}
                </h1>
                <h1
                  style={{ letterSpacing: "-1.6px" }}
                  className="text-3xl font-semibold text-white flex-1"
                >
                  {tHero2("hook2")}
                </h1>
              </div>
              <h3 className="text-2xl font-bold text-blue-500 flex-1 rounded-lg bg-white flex justify-center items-center p-2 shadow text-center">
                {tHero2("subhook")}
              </h3>
            </div>

            <div className="flex flex-col justify-between gap-2 px-2 py-4 flex-1">
              <div className="flex items-center gap-4 font-semibold text-white text-lg">
                <CircleCheckBig />
                {tHero2("checkMark-1")}
              </div>
              <div className="flex items-center gap-4 font-semibold text-white text-lg">
                <CircleCheckBig />
                {tHero2("checkMark-2")}
              </div>
              <div className="flex items-center gap-4 font-semibold text-white text-lg">
                <CircleCheckBig />
                {tHero2("checkMark-3")}
              </div>
            </div>
            <div className="flex flex-col gap-4 flex-1 bg-white rounded-2xl p-4 px-6 w-full">
              <div className="flex flex-1 gap-4 items-start p-0 text-blue-500">
                <Truck className="h-6 w-6" />
                <p className="font-semibold">{tHero2("features.f1")}</p>
              </div>
              <div className="flex flex-1 gap-4 items-start p-0 text-blue-500">
                <HandCoins className="h-6 w-6" />
                <p className="font-semibold">{tHero2("features.f2")}</p>
              </div>
              <div className="flex flex-1 gap-4 items-start p-0 text-blue-500">
                <ShieldCheck className="h-6 w-6" />
                <p className="font-semibold">{tHero2("features.f3")}</p>
              </div>
              <div className="flex flex-1 gap-4 items-start p-0 text-blue-500">
                <ClockFading className="h-6 w-6" />
                <p className="font-semibold">{tHero2("features.f4")}</p>
              </div>
            </div>
            <div className="flex justify-center items-center font-semibold text-white text-lg italic text-center py-4 flex-1">
              {tHero2("land&drive")}
            </div>
          </div>

          <DrawerTrigger>
            <div
              className="fixed bottom-0 w-full bg-white rounded-t-4xl shadow-lg p-4 z-50"
              onTouchStart={(e) => {
                touchStartY.current = e.touches[0].clientY;
              }}
              onTouchEnd={(e) => {
                if (
                  touchStartY.current &&
                  touchStartY.current - e.changedTouches[0].clientY > 50
                ) {
                  setOpen(true); // open drawer on swipe up
                }
                touchStartY.current = null;
              }}
            >
              <div className="flex flex-col justify-center items-center gap-2 w-full pt-2">
                <ChevronUp className="text-white bg-blue-500 rounded-full p-1 animate-bounce" />
                <p className="text-xl font-semibold text-blue-500 text-center">
                  {tHero2("explore")}
                </p>
              </div>
            </div>
          </DrawerTrigger>

          <DrawerContent className="pointer-events-none">
            <DrawerHeader>
              <DrawerTitle className="flex flex-col items-center gap-2">
                <DrawerClose className="flex-1">
                  <ChevronDown className="text-white bg-blue-500 rounded-full p-1" />
                </DrawerClose>
                <p className="flex-1 text-blue-500">{tHero1("explore")}</p>
              </DrawerTitle>
            </DrawerHeader>
            {/* <div className="absolute min-h-screen w-full bg-white rounded-4xl top-30 shadow-[0_-8px_12px_rgba(0,0,0,0.2)]"> */}
            <div className="mx-auto w-full overflow-y-scroll">
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
            </div>
            {/* </div> */}
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default MobileComponent;
