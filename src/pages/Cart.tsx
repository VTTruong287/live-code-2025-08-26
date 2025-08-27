import CartItem from "../components/CartItemCard";
import { useCartStore } from "../store/CartStore";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const update = useCartStore((state) => state.updateCartItem);
  const remove = useCartStore((state) => state.removeFromCart);
  const clear = useCartStore((state) => state.clearCart);

  const subtotal = cart.reduce((s, i) => s + i.unitPrice * i.quantity, 0);
  const total = subtotal;

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="p-6 bg-gray-50 rounded text-center">Your cart is empty. Go add some items!</div>
      ) : (
        <div className="bg-white shadow rounded">
          <div>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} onUpdate={update} onRemove={remove} />
            ))}
          </div>
          <div className="p-4 flex flex-col sm:flex-row sm:justify-end gap-3 items-center">
            <div className="text-right mr-4">
              <div className="text-sm text-gray-600">Subtotal</div>
              <div className="font-semibold text-lg">${subtotal.toFixed(2)}</div>
              <div className="text-sm text-gray-600">Total</div>
              <div className="font-bold text-2xl">${total.toFixed(2)}</div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded bg-red-500 text-white" onClick={clear}>
                Clear
              </button>
              <button className="px-4 py-2 rounded bg-green-600 text-white" onClick={() => alert("Checked out — thank you!")}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
