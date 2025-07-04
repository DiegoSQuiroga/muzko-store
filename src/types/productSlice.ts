export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: "buzo" | "remera" | "gorra";
  gender: "hombre" | "mujer" | "unisex";
  sizes: string[];
}