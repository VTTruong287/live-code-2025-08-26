import type { InventoryItem } from "./InventoryItem";

export type CartItem = InventoryItem & {
  selectedQuantity: number;
};