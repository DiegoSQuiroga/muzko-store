import { Request, Response } from "express";
import { Product } from "../models/Product";

console.log("✅ productController cargado");

const products: Product[] = [
  {
    id: "1",
    name: "Buzo Galaxia",
    description: "Diseño exclusivo con tonos galácticos.",
    price: 11990,
    imageUrl: "/assets/buzo1.png",
    category: "buzos",
    gender: "unisex",
    sizes: ["S", "M", "L"],
  },
  {
    id: "2",
    name: "Gorra Neón",
    description: "Estilo urbano con detalles brillantes.",
    price: 5990,
    imageUrl: "/assets/gorra1.png",
    category: "gorras",
    gender: "hombre",
    sizes: ["Única"],
  },
  {
    id: "3",
    name: "Remera Grafitti",
    description: "Ilustración única inspirada en el arte callejero.",
    price: 7990,
    imageUrl: "/assets/remera1.png",
    category: "remeras",
    gender: "unisex",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "4",
    name: "Chaleco Cargo",
    description: "Chaleco utilitario urbano, ideal para climas intermedios.",
    price: 14990,
    imageUrl: "/assets/chaleco.png",
    category: "chalecos",
    gender: "unisex",
    sizes: ["M", "L", "XL"],
  },
];

// ✅ GET /api/products
export function getProducts(_req: Request, res: Response): void {
  console.log("📦 Enviando productos:", products);
  res.json(products);
}

// ✅ GET /api/products/:id
export function getProductById(req: Request, res: Response): void {
  const { id } = req.params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    res.status(404).json({ message: "Producto no encontrado" });
    return;
  }

  res.json(product);
}