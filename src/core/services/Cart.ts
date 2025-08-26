import type { ICartService } from "../interfaces/ICartService";

class CartService implements ICartService {
  public add (id: string, qty: number) {
    return;
  }
  public update (id: string, qty: number) {
    return;
  }
  public delete (id: string) {
    return;
  }
}

export default new CartService();
