import type { InventoryItem } from "../models/InventoryItem";

export interface IInventoryService {
  getAll(): Promise<InventoryItem[]>;
  getItems(): InventoryItem[];
  setItems(items: InventoryItem[]): void;
}
