export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  gender: string;
  sizes: string[];
  price: number;
  imageUrl: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}