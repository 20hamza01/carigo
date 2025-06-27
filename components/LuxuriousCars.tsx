import React from "react";
import CarCard from "./CarCard";
import Carousel from "./Carousel";
import { useTranslations } from "next-intl";
import { cars } from "@/lib/carData";

const EconomicCars = () => {
  const t = useTranslations("carSection");

  const luxuriousCars = cars.filter((car) => car.class === "Luxury");

  return (
    <>
      <div className="flex flex-col justify-between items-center gap-6">
        <h2 className="hidden md:block text-3xl font-bold text-gray-900 text-center">
          {t("luxurious-title")}
        </h2>
        <div className="hidden md:block">
          <Carousel>
            {luxuriousCars.map((car, index) => (
              <div className="p-1" key={`${car.brand}-${car.model}-${index}`}>
                <CarCard
                  carClass={t("luxurious")}
                  brand={`${car.brand} ${car.model}`}
                  price={car.pricePerDay}
                  image={car.image || "/hero.png"}
                  carType={car.carType}
                  fuel={car.fuel}
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* MOBILE VIEW */}
        <div className="w-full py-2 mt-4">
          <h2 className="block md:hidden text-2xl font-bold text-blue-500 py-4 px-4">
            {t("luxurious-title")}
          </h2>
          <div className="md:hidden w-full px-2">
            <div className="flex gap-12 overflow-x-scroll bg-transparent rounded-xl m-2">
              {luxuriousCars.map((car, index) => (
                <div
                  className="min-h-[400px] w-[300px] shrink-0 shadow-lg p-1"
                  key={`${car.brand}-${car.model}-${index}`}
                >
                  <CarCard
                    carClass={t("economic")}
                    brand={`${car.brand} ${car.model}`}
                    price={car.pricePerDay}
                    image={car.image || "/hero.png"}
                    carType={car.carType}
                    fuel={car.fuel}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EconomicCars;
