import { create } from "zustand";
import type { InventoryItem } from "../core/models/InventoryItem";
import { persist } from "zustand/middleware";

type InventoryState = {
  items: InventoryItem[];
  setItems: (items: InventoryItem[]) => void;
};

export const useInventoryStore = create(
  persist<InventoryState>(
    (set) => ({
      items: [],
      setItems: (items) => set({ items }),
    }),
    {
      name: "inventory-storage"
    }
  )
);
