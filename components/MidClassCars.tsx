import React from "react";
import CarCard from "./CarCard";
import { useTranslations } from "next-intl";
import { cars } from "@/lib/carData";

const MidClassCars = () => {
  const t = useTranslations("carSection");

  const midClassCars = cars.filter((car) => car.class === "Mid-Class");

  return (
    <>
      <div className="flex flex-col justify-between items-center gap-6">
        <div className="w-full py-2 mt-4">
          <h2 className="md:text-3xl md:text-center text-2xl font-bold text-blue-500 py-4 px-4">
            {t("midclass-title")}
          </h2>
          <div className="w-full px-2">
            <div className="flex gap-12 overflow-x-scroll bg-transparent rounded-xl m-2">
              {midClassCars.map((car, index) => (
                <div
                  className="min-h-[400px] w-[300px] shrink-0 shadow-lg p-1"
                  key={`${car.brand}-${car.model}-${index}`}
                >
                  <CarCard
                    carClass={t("midclass")}
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

export default MidClassCars;
