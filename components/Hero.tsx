import React from "react";

import { useTranslations } from "next-intl";
import {
  CircleCheckBig,
  ClockFading,
  HandCoins,
  ShieldCheck,
  Truck,
} from "lucide-react";

import Image from "next/image";

const Hero = () => {
  const tHero2 = useTranslations("hero2");

  return (
    <>
      <div className="flex flex-col gap-12 mx-16 my-12">
        <div className="flex gap-12 w-full">
          {/* LEFT */}
          <div className="flex flex-col gap-24 py-12 w-full">
            <div className="flex gap-32">
              <div className="py-6 flex flex-col gap-24 justify-center w-3/5">
                <p className="text-7xl font-semibold text-white">
                  {tHero2("hook")}
                </p>
                <p className="text-4xl font-bold text-blue-500 rounded-lg bg-white flex justify-center items-center px-1 py-2 shadow">
                  {tHero2("subhook")}
                </p>
              </div>
              <div className="w-2/5 pt-42">
                <div className="relative z-10">
                  <Image
                    src="/hero.png"
                    alt="Blue Mercedes-Benz car"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-32 justify-center">
              <div className="flex flex-col gap-4 bg-white rounded-2xl p-4 px-6 text-3xl">
                <div className="flex flex-1 gap-4 items-start p-0 text-blue-500">
                  <Truck className="h-8 w-8" />
                  <p className="font-semibold">{tHero2("features.f1")}</p>
                </div>
                <div className="flex flex-1 gap-4 items-start p-0 text-blue-500">
                  <HandCoins className="h-8 w-8" />
                  <p className="font-semibold">{tHero2("features.f2")}</p>
                </div>
                <div className="flex flex-1 gap-4 items-start p-0 text-blue-500">
                  <ShieldCheck className="h-8 w-8" />
                  <p className="font-semibold">{tHero2("features.f3")}</p>
                </div>
                <div className="flex flex-1 gap-4 items-start p-0 text-blue-500">
                  <ClockFading className="h-8 w-8" />
                  <p className="font-semibold">{tHero2("features.f4")}</p>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-2 px-2 py-4">
                <div className="flex items-center gap-4 font-semibold text-white text-3xl">
                  <CircleCheckBig />
                  {tHero2("checkMark-1")}
                </div>
                <div className="flex items-center gap-4 font-semibold text-white text-3xl">
                  <CircleCheckBig />
                  {tHero2("checkMark-2")}
                </div>
                <div className="flex items-center gap-4 font-semibold text-white text-3xl">
                  <CircleCheckBig />
                  {tHero2("checkMark-3")}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center font-semibold text-white text-3xl italic text-center pt-12 flex-1 mb-16">
          {tHero2("land&drive")}
        </div>
      </div>
    </>
  );
};

export default Hero;
