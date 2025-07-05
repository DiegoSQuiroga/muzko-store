import type { Product } from "../types/productSlice";
import buzo1 from "../assets/buzo1.png";
import gorra1 from "../assets/gorra1.png";
import remera1 from "../assets/remera1.png"; // 👈 nuevo import

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Buzo Galaxia",
    description: "Diseño exclusivo con tonos galácticos.",
    price: 11990,
    imageUrl: buzo1,
    category: "buzo",
    gender: "unisex",
    sizes: ["S", "M", "L"],
  },
  {
    id: 2,
    name: "Gorra Neón",
    description: "Estilo urbano con detalles brillantes.",
    price: 5990,
    imageUrl: gorra1,
    category: "gorra",
    gender: "hombre",
    sizes: ["Única"],
  },
  {
    id: 3,
    name: "Remera Grafitti", // 👈 nuevo producto
    description: "Ilustración única inspirada en el arte callejero.",
    price: 7990,
    imageUrl: remera1,
    category: "remera",
    gender: "unisex",
    sizes: ["S", "M", "L", "XL"],
  },
];