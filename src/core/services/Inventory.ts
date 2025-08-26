import type { IInventoryService } from "../interfaces/IInventoryService";
import { inventoryMockData } from "../../mock/mockData";
import { delay } from "../../utils/common";

class Inventory implements IInventoryService {
  public async getAll() {
    await delay(1000);
    return Promise.resolve<Inventory[]>(inventoryMockData);
  }
}

export default new Inventory();
