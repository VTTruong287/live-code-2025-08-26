import type { CartItem } from "../models/CartItem";
import type { InventoryItem } from "../models/InventoryItem";

export interface ICartService {
  load(): CartItem[];
  save(cart: CartItem[]): void;
  addItem(cart: CartItem[], product: InventoryItem, qty?: number): CartItem[];
  updateItem(cart: CartItem[], id: string, qty: number): CartItem[];
  removeItem(cart: CartItem[], id: string): CartItem[];
}
