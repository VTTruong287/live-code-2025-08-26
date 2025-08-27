import ProductCard from "../components/ProductCard";
import type { InventoryItem } from "../core/models/InventoryItem";
import { useCartStore } from "../store/CartStore";

export default function InventoryPage() {
  const products = useCartStore(state => state.products)
  const addToCart = useCartStore(state => state.addToCart)
  const cart = useCartStore(state => state.cart)

  // Compute available stock for each product based on cart
  const available = (product: InventoryItem) => {
    const inCart = cart.find(c => c.id === product.id)
    return product.quantity - (inCart ? inCart.quantity : 0)
  }

  const handleAddToCart = (item: InventoryItem) => {
    addToCart(item, available(item) > 0 ? 1 : 0);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Inventory page</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((item: InventoryItem) => (
          <li key={item.id} className="m-2 p-2">
            <ProductCard product={item} handleAddToCart={() => handleAddToCart(item)} />
          </li>
        ))}
      </ul>
    </>
  );
}
