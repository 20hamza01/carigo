type CarType = "Manual" | "Automatic";
type FuelType = "Diesel" | "Essence" | "Electrique";
type CarClass = "Economic" | "Mid-Class" | "Luxury";

interface Car {
  class: CarClass;
  brand: string;
  model: string;
  pricePerDay: number; // in MAD
  image: string;
  carType: CarType;
  fuel: FuelType;
  pointsEarnedPerDay: number;
  pointsNeededForRent: number;
}

export const cars: Car[] = [
  // Economic Cars
  {
    class: "Economic",
    brand: "Peugeot",
    model: "208",
    pricePerDay: 350,
    image: "/cars/peugeot-208.png",
    carType: "Manual",
    fuel: "Diesel",
    pointsEarnedPerDay: 22,
    pointsNeededForRent: 350,
  },
  {
    class: "Economic",
    brand: "Hyundai",
    model: "Accent",
    pricePerDay: 500,
    image: "/cars/accent.png",
    carType: "Manual",
    fuel: "Diesel",
    pointsEarnedPerDay: 22,
    pointsNeededForRent: 500,
  },
  {
    class: "Economic",
    brand: "Renault",
    model: "Clio 5",
    pricePerDay: 350,
    image: "/cars/clio5.png",
    carType: "Manual",
    fuel: "Diesel",
    pointsEarnedPerDay: 22,
    pointsNeededForRent: 350,
  },
  {
    class: "Economic",
    brand: "Dacia",
    model: "Logan",
    pricePerDay: 300,
    image: "/cars/dacia-Logan.png",
    carType: "Manual",
    fuel: "Diesel",
    pointsEarnedPerDay: 22,
    pointsNeededForRent: 300,
  },
  {
    class: "Economic",
    brand: "Citroen",
    model: "C3",
    pricePerDay: 420,
    image: "/cars/citroen_c3.png",
    carType: "Manual",
    fuel: "Diesel",
    pointsEarnedPerDay: 22,
    pointsNeededForRent: 420,
  },

  // Mid-Class Cars
  {
    class: "Mid-Class",
    brand: "Hyundai",
    model: "Tucson",
    pricePerDay: 800,
    image: "/cars/hyundai-tucson.png",
    carType: "Automatic",
    fuel: "Diesel",
    pointsEarnedPerDay: 45,
    pointsNeededForRent: 800,
  },
  {
    class: "Mid-Class",
    brand: "Volkswagen",
    model: "T\u2011Roc", // \u2011 is a hyphen, but not a breakable hyphen.
    pricePerDay: 800,
    image: "/cars/t-roc.png",
    carType: "Automatic",
    fuel: "Diesel",
    pointsEarnedPerDay: 45,
    pointsNeededForRent: 800,
  },
  {
    class: "Mid-Class",
    brand: "Hyundai",
    model: "Creta",
    pricePerDay: 800,
    image: "/cars/hyundai-creta.png",
    carType: "Automatic",
    fuel: "Essence",
    pointsEarnedPerDay: 45,
    pointsNeededForRent: 800,
  },
  {
    class: "Mid-Class",
    brand: "Changan",
    model: "C35",
    pricePerDay: 650,
    image: "/cars/Changan-C35-auto.png",
    carType: "Automatic",
    fuel: "Essence",
    pointsEarnedPerDay: 45,
    pointsNeededForRent: 650,
  },
  {
    class: "Mid-Class",
    brand: "MG",
    model: "ZS",
    pricePerDay: 750,
    image: "/cars/MG-ZS.png",
    carType: "Automatic",
    fuel: "Essence",
    pointsEarnedPerDay: 45,
    pointsNeededForRent: 750,
  },
  {
    class: "Mid-Class",
    brand: "Renault",
    model: "Arkana Hybrid",
    pricePerDay: 850,
    image: "/cars/renault-arkana.png",
    carType: "Automatic",
    fuel: "Essence",
    pointsEarnedPerDay: 45,
    pointsNeededForRent: 850,
  },

  // Luxury Cars
  {
    class: "Luxury",
    brand: "Range Rover",
    model: "Sport HSE",
    pricePerDay: 4500,
    image: "/cars/range-rover-hse.png",
    carType: "Automatic",
    fuel: "Diesel",
    pointsEarnedPerDay: 225,
    pointsNeededForRent: 4500,
  },
  {
    class: "Luxury",
    brand: "Volkswagen",
    model: "Touareg",
    pricePerDay: 1500,
    image: "/cars/volkswagen-touareg.png",
    carType: "Automatic",
    fuel: "Diesel",
    pointsEarnedPerDay: 225,
    pointsNeededForRent: 1500,
  },
  {
    class: "Luxury",
    brand: "Range Rover",
    model: "Vogue",
    pricePerDay: 5500,
    image: "/cars/range-rover-vogue.png",
    carType: "Automatic",
    fuel: "Diesel",
    pointsEarnedPerDay: 225,
    pointsNeededForRent: 5500,
  },
  {
    class: "Luxury",
    brand: "Mercedes Benz",
    model: "AMG G63",
    pricePerDay: 9000,
    image: "/cars/Mercedes-Benz-AMG-G63.png",
    carType: "Automatic",
    fuel: "Diesel",
    pointsEarnedPerDay: 225,
    pointsNeededForRent: 9000,
  },
  {
    class: "Luxury",
    brand: "Mercedes Benz",
    model: "S400",
    pricePerDay: 7500,
    image: "/cars/Mercedes-Benz-S400.png",
    carType: "Automatic",
    fuel: "Diesel",
    pointsEarnedPerDay: 225,
    pointsNeededForRent: 7500,
  },
];
