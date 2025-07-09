import type { Product } from "../types/productSlice";

const BASE_URL = "http://localhost:4000/api/products";

export async function getAllProducts(): Promise<Product[]> {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Error al obtener productos desde el backend");
  }
  return response.json();
}

export async function getProductById(id: string): Promise<Product> {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error("No se pudo obtener el producto");
  }
  return response.json();
}