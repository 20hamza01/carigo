import React from "react";
import { Car, MapPin } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocalSwitcher";

const Navbar = () => {
  const t = useTranslations("navbar");

  return (
    <>
      {/* LEFT SIDE */}
      <div className="flex justify-between items-center bg-transparent mx-4 mt-2 pt-4">
        <div className="flex justify-between items-center gap-4 sm:ml-8">
          <Car className="h-8 w-8 lg:h-14 lg:w-14 text-white" />
          <p className="font-bold text-3xl lg:text-4xl text-white">CariGo</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-between items-center gap-4 sm:mr-8">
          <div className="bg-blue-500 rounded-md p-2 md:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <MapPin className="w-4 h-4 text-white" />
              </PopoverTrigger>
              <PopoverContent className="w-full">
                <p className="font-bold text-sm text-blue-500">
                  {t("country")}
                </p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="hidden md:flex justify-between items-center gap-2 my-6 bg-white rounded-md px-4 py-1">
            <MapPin className="w-4 h-4 text-blue-500" />
            <p className="font-bold text-blue-500">{t("country")}</p>
          </div>

          <div className="bg-white rounded-xl">
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
