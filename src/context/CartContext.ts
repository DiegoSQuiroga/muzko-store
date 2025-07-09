import { createContext } from "react";
import type { CartItem } from "../types/productSlice";

export interface CartState {
  items: CartItem[];
}

export type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem["product"] }
  | { type: "REMOVE_FROM_CART"; payload: string }
  | { type: "CLEAR_CART" }
  | { type: "INCREASE_QUANTITY"; payload: string }
  | { type: "DECREASE_QUANTITY"; payload: string };

export interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);