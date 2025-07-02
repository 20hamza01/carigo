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
}

export const cars: Car[] = [
  // Economic Cars
  {
    class: "Economic",
    brand: "Peugeot",
    model: "208",
    pricePerDay: 300,
    image: "/cars/peugeot-208.png",
    carType: "Manual",
    fuel: "Diesel",
  },
  {
    class: "Economic",
    brand: "Hyundai",
    model: "Accent",
    pricePerDay: 450,
    image: "/cars/accent.png",
    carType: "Manual",
    fuel: "Diesel",
  },
  {
    class: "Economic",
    brand: "Renault",
    model: "Clio 5",
    pricePerDay: 300,
    image: "/cars/clio5.png",
    carType: "Manual",
    fuel: "Diesel",
  },
  {
    class: "Economic",
    brand: "Dacia",
    model: "Logan",
    pricePerDay: 250,
    image: "/cars/dacia-Logan.png",
    carType: "Manual",
    fuel: "Diesel",
  },
  {
    class: "Economic",
    brand: "Citroen",
    model: "C3",
    pricePerDay: 370,
    image: "/cars/citroen_c3.png",
    carType: "Manual",
    fuel: "Diesel",
  },

  // Mid-Class Cars
  {
    class: "Mid-Class",
    brand: "Hyundai",
    model: "Tucson",
    pricePerDay: 750,
    image: "/cars/hyundai-tucson.png",
    carType: "Automatic",
    fuel: "Diesel",
  },
  {
    class: "Mid-Class",
    brand: "Volkswagen",
    model: "T\u2011Roc", // \u2011 is a hyphen, but not a breakable hyphen.
    pricePerDay: 750,
    image: "/cars/t-roc.png",
    carType: "Automatic",
    fuel: "Diesel",
  },
  {
    class: "Mid-Class",
    brand: "Hyundai",
    model: "Creta",
    pricePerDay: 750,
    image: "/cars/hyundai-creta.png",
    carType: "Automatic",
    fuel: "Essence",
  },
  {
    class: "Mid-Class",
    brand: "Changan",
    model: "C35",
    pricePerDay: 600,
    image: "/cars/Changan-C35-auto.png",
    carType: "Automatic",
    fuel: "Essence",
  },
  {
    class: "Mid-Class",
    brand: "MG",
    model: "ZS",
    pricePerDay: 700,
    image: "/cars/MG-ZS.png",
    carType: "Automatic",
    fuel: "Essence",
  },
  {
    class: "Mid-Class",
    brand: "Renault",
    model: "Arkana Hybrid",
    pricePerDay: 800,
    image: "/cars/renault-arkana.png",
    carType: "Automatic",
    fuel: "Essence",
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
  },
  {
    class: "Luxury",
    brand: "Volkswagen",
    model: "Touareg",
    pricePerDay: 1500,
    image: "/cars/volkswagen-touareg.png",
    carType: "Automatic",
    fuel: "Diesel",
  },
  {
    class: "Luxury",
    brand: "Range Rover",
    model: "Vogue",
    pricePerDay: 5500,
    image: "/cars/range-rover-vogue.png",
    carType: "Automatic",
    fuel: "Diesel",
  },
  {
    class: "Luxury",
    brand: "Mercedes Benz",
    model: "AMG G63",
    pricePerDay: 9000,
    image: "/cars/Mercedes-Benz-AMG-G63.png",
    carType: "Automatic",
    fuel: "Diesel",
  },
  {
    class: "Luxury",
    brand: "Mercedes Benz",
    model: "S400",
    pricePerDay: 7500,
    image: "/cars/Mercedes-Benz-S400.png",
    carType: "Automatic",
    fuel: "Diesel",
  },
];
