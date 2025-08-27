import type { IInventoryService } from "../interfaces/IInventoryService";
import type { InventoryItem } from "../models/InventoryItem";
import { inventoryMockData } from "../../mock/mockData";
import { delay } from "../../utils/common";
import { useInventoryStore } from "../../store/InventoryStore";

class InventoryService implements IInventoryService {
  public getItems(): InventoryItem[] {
    return useInventoryStore.getState().items;
  }
  public setItems(items: InventoryItem[]) {
    useInventoryStore.getState().setItems(items);
  }
  public async getAll(): Promise<InventoryItem[]> {
    await delay(1000);
    this.setItems(inventoryMockData);
    return Promise.resolve(inventoryMockData);
  }
  
}

export default InventoryService;
