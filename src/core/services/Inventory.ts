import { inventoryMockData } from "../../mock/mockData";
import { useCartStore } from "../store/CartStore";
import { delay } from "../../utils/common";
import type { IInventoryService } from "../interfaces/IInventoryService";
import type { InventoryItem } from "../models/InventoryItem";

class InventoryService implements IInventoryService {
  public async getAll(): Promise<InventoryItem[]> {
    await delay(1000);
    useCartStore.setState({ products: inventoryMockData });
    return Promise.resolve(inventoryMockData);
  }
  
}

export default new InventoryService();
