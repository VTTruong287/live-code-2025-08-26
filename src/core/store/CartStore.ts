import { create } from "zustand";
import cartService from "../services/Cart";
import type { CartItem } from "../models/CartItem";
import type { InventoryItem } from "../models/InventoryItem";
import { inventoryMockData } from "../../mock/mockData";
import Inventory from "../services/Inventory";

type CartState = {
  cart: CartItem[];
  products: InventoryItem[];
  addToCart: (product: InventoryItem, qty?: number) => void;
  updateCartItem: (id: string, qty: number | undefined) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  products: [],
  cart: cartService.load(),
  addToCart: (product: InventoryItem, qty = 1) =>
    set((state: CartState) => {
      console.log("Adding to cart:", product, qty);
      if (qty <= 0) {
        alert("Cannot add zero quantity to cart");
        return { cart: [...state.cart] };
      }
      const newCart = cartService.addItem([...state.cart], product, qty);
      cartService.save(newCart);
      return { cart: [...newCart] };
    }),
  updateCartItem: (id: string, qty: number | undefined) =>
    set((state: CartState) => {
      if (qty === undefined || qty < 0) {
        alert("Quantity must be a non-negative number");
        return { cart: [...state.cart] };
      }
      const newCart = cartService.updateItem([...state.cart], id, qty || 0);
      // remove item with 0 quantity
      const filtered = newCart.filter((i) => i.quantity > 0);
      cartService.save(filtered);
      return { cart: [...filtered] };
    }),
  removeFromCart: (id: string) =>
    set((state: CartState) => {
      const newCart = cartService.removeItem([...state.cart], id);
      cartService.save(newCart);
      return { cart: [...newCart] };
    }),
  clearCart: () =>
    set(() => {
      cartService.save([]);
      return { cart: [] };
    }),
}));
