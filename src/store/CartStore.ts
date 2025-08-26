import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem } from '../core/models/CartItem';

type CartState = {
  lines: Record<string, CartItem>,    // id: {CartItem}
  // update: (id: string, qty: number) => void
}

export const useCartStore = create<CartState>(persist(
    (set, get) => ({
      lines: {},
      // update: (id: string, qty: number) => set({ fishes: get().fishes + 1 })
    }),
    {
      name: 'cart-storage'
    },
  ),
)