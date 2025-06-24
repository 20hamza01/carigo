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
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          {t("luxurious-title")}
        </h2>
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
    </>
  );
};

export default EconomicCars;
