import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");
  return (
    <>
      <main className="relative mx-3 py-12">
        {/* Sky Highlights */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large cloud-like highlights */}
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-1/3 w-24 h-24 bg-sky-300/30 rounded-full blur-lg"></div>
          <div className="absolute top-60 left-1/2 w-40 h-20 bg-white/15 rounded-full blur-2xl"></div>

          {/* Smaller sky accents */}
          <div className="absolute top-32 right-1/4 w-16 h-16 bg-blue-200/40 rounded-full blur-md"></div>
          <div className="absolute top-80 left-1/3 w-20 h-20 bg-sky-100/50 rounded-full blur-lg"></div>
          <div className="absolute bottom-40 right-1/2 w-28 h-28 bg-white/25 rounded-full blur-xl"></div>

          {/* Gradient overlays for depth */}
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="absolute top-34 sm:top-10 right-10 w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute top-110 sm:top-32 left-8 w-8 h-8 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full opacity-80"></div>
            <div className="absolute bottom-20 right-20 w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full opacity-75 animate-bounce"></div>
            <div className="absolute bottom-10 left-16 w-6 h-6 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-90"></div>
            <div className="absolute top-20 left-20 w-4 h-4 bg-white/60 rounded-full blur-sm"></div>
            <div className="absolute bottom-32 right-8 w-14 h-14 bg-sky-200/40 rounded-full blur-md"></div>
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-[1.94rem] lg:text-5xl font-bold text-gray-900 leading-tight relative z-10">
                  {t("hook-1")}
                  <br />
                  {t("hook-2")}
                  <br />
                  <span className="text-blue-500 text-5xl pt-10">
                    {t("hook-3")}
                  </span>
                </h1>
                <p className="text-xl text-gray-800 max-w-md">{t("subhook")}</p>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center sm:justify-start items-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-md px-4 sm:px-6 md:px-8 py-2 min-w-fit">
                  <Link href="#cars" className="whitespace-nowrap">
                    {t("explore")}
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="bg-gray-800 text-white border-gray-800 hover:bg-gray-700 hover:text-gray-200 px-4 sm:px-6 md:px-8 py-2 min-w-fit"
                >
                  <Popover>
                    <PopoverTrigger asChild>
                      <p className="cursor-pointer whitespace-nowrap">
                        {t("howto-title")}
                      </p>
                    </PopoverTrigger>
                    <PopoverContent align="end">
                      <ol className="list-decimal list-inside space-y-1 w-full">
                        <li>{t("howto-1")}</li>
                        <li>{t("howto-2")}</li>
                        <li>{t("howto-3")}</li>
                      </ol>
                    </PopoverContent>
                  </Popover>
                </Button>
              </div>
            </div>

            {/* Right Content - Car Image */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/hero.png"
                  alt="Blue Mercedes-Benz car"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              {/* Sky-themed Decorative Elements */}
              <div className="absolute top-32 right-170 w-8 h-8 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full opacity-80"></div>
              <div className="absolute bottom-20 right-190 w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full opacity-75 animate-bounce"></div>
              <div className="absolute bottom-10 right-146 w-6 h-6 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-90"></div>
              <div className="absolute top-20 left-20 w-4 h-4 bg-white/60 rounded-full blur-sm"></div>
              <div className="absolute bottom-32 right-8 w-14 h-14 bg-sky-200/40 rounded-full blur-md"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
