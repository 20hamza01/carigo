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
    brand: "Dacia",
    model: "Logan",
    pricePerDay: 180,
    image: "",
    carType: "Manual",
    fuel: "Diesel",
  },
  {
    class: "Economic",
    brand: "Dacia",
    model: "Sandero",
    pricePerDay: 190,
    image: "",
    carType: "Manual",
    fuel: "Essence",
  },
  {
    class: "Economic",
    brand: "Renault",
    model: "Clio 4",
    pricePerDay: 220,
    image: "",
    carType: "Manual",
    fuel: "Diesel",
  },
  {
    class: "Economic",
    brand: "Peugeot",
    model: "208",
    pricePerDay: 230,
    image: "",
    carType: "Manual",
    fuel: "Essence",
  },
  {
    class: "Economic",
    brand: "Hyundai",
    model: "i10",
    pricePerDay: 200,
    image: "",
    carType: "Manual",
    fuel: "Essence",
  },
  {
    class: "Economic",
    brand: "Kia",
    model: "Picanto",
    pricePerDay: 210,
    image: "",
    carType: "Manual",
    fuel: "Essence",
  },
  {
    class: "Economic",
    brand: "Fiat",
    model: "Panda",
    pricePerDay: 190,
    image: "",
    carType: "Manual",
    fuel: "Essence",
  },
  {
    class: "Economic",
    brand: "Citroën",
    model: "C3",
    pricePerDay: 240,
    image: "",
    carType: "Manual",
    fuel: "Diesel",
  },
  {
    class: "Economic",
    brand: "Toyota",
    model: "Yaris",
    pricePerDay: 250,
    image: "",
    carType: "Automatic",
    fuel: "Essence",
  },
  {
    class: "Economic",
    brand: "Chevrolet",
    model: "Spark",
    pricePerDay: 200,
    image: "",
    carType: "Manual",
    fuel: "Essence",
  },

  // Mid-Class Cars
  {
    class: "Mid-Class",
    brand: "Hyundai",
    model: "Elantra",
    pricePerDay: 350,
    image: "",
    carType: "Automatic",
    fuel: "Essence",
  },
  {
    class: "Mid-Class",
    brand: "Volkswagen",
    model: "Golf",
    pricePerDay: 370,
    image: "",
    carType: "Automatic",
    fuel: "Diesel",
  },
  {
    class: "Mid-Class",
    brand: "Skoda",
    model: "Octavia",
    pricePerDay: 400,
    image: "",
    carType: "Automatic",
    fuel: "Diesel",
  },
  {
    class: "Mid-Class",
    brand: "Toyota",
    model: "Corolla",
    pricePerDay: 380,
    image: "",
    carType: "Automatic",
    fuel: "Essence",
  },
  {
    class: "Mid-Class",
    brand: "Renault",
    model: "Megane",
    pricePerDay: 360,
    image: "",
    carType: "Manual",
    fuel: "Diesel",
  },
  {
    class: "Mid-Class",
    brand: "Peugeot",
    model: "3008",
    pricePerDay: 420,
    image: "",
    carType: "Automatic",
    fuel: "Diesel",
  },

  // Luxury Cars
  {
    class: "Luxury",
    brand: "Mercedes-Benz",
    model: "E-Class",
    pricePerDay: 1200,
    image: "",
    carType: "Automatic",
    fuel: "Diesel",
  },
  {
    class: "Luxury",
    brand: "Range Rover",
    model: "Sport",
    pricePerDay: 1400,
    image: "",
    carType: "Automatic",
    fuel: "Diesel",
  },
  {
    class: "Luxury",
    brand: "BMW",
    model: "X5",
    pricePerDay: 1500,
    image: "",
    carType: "Automatic",
    fuel: "Diesel",
  },
];
