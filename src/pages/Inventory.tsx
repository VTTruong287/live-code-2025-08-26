import ProductCard from "../components/ProductCard";
import type { InventoryItem } from "../core/models/InventoryItem";
import { useCartStore } from "../core/store/CartStore";

export default function InventoryPage() {
  const products = useCartStore((state) => state.products);
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);

  // Compute available stock for each product based on cart
  const available = (product: InventoryItem) => {
    const inCart = cart.find((c) => c.id === product.id);
    return product.quantity - (inCart ? inCart.quantity : 0);
  };

  const handleAddToCart = (item: InventoryItem) => {
    addToCart(item, available(item) > 0 ? 1 : 0);
  };

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Inventory</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={{ ...p, quantity: available(p) }} handleAddToCart={() => handleAddToCart(p)} />
        ))}
      </div>
    </main>
  );
}
