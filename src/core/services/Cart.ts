import type { ICartService } from "../interfaces/ICartService";
import type { CartItem } from "../models/CartItem";
import type { InventoryItem } from "../models/InventoryItem";

// Simple DB (localStorage) based cart service implementation
class CartService implements ICartService {
  private storageKey: string;
  constructor(storageKey = "shopping_cart_v1") {
    this.storageKey = storageKey;
  }

  load() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error("Failed to load cart data: ", e);
      return [];
    }
  }

  save(cart: CartItem[]) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart data: ", e);
    }
  }

  addItem(cart: CartItem[], product: InventoryItem, qty = 1) {
    // Open for extension: we keep core logic here
    const existing = cart.find((i) => i.id === product.id);
    if (existing) {
      if(existing.quantity + qty >= product.quantity) {
        alert(`Only ${product.quantity} items in stock. Please adjust your cart quantity accordingly.`);
        return cart;
      }
      existing.quantity = Math.min(product.quantity, existing.quantity + qty);
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        unitPrice: product.unitPrice,
        quantity: qty,
      });
    }
    return cart;
  }

  updateItem(cart: CartItem[], id: string, qty: number) {
    const item = cart.find((i) => i.id === id);
    if (!item) {
      alert("Item not found in cart");
      return cart;
    }
    item.quantity = Math.max(0, qty);
    return cart;
  }

  removeItem(cart: CartItem[], id: string) {
    return cart.filter((i) => i.id !== id);
  }
}

export default new CartService();
