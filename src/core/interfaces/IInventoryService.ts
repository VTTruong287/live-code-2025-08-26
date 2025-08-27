import type { InventoryItem } from "../models/InventoryItem";

export interface IInventoryService {
  getAll(): Promise<InventoryItem[]>;
}
