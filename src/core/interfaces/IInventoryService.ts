import type { Inventory } from "../models/InventoryItem";

export interface IInventoryService {
  getAll: () => Inventory[];
}
