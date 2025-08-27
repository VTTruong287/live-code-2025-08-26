import { Link, NavLink } from "react-router-dom";
import { useCartStore } from "../core/store/CartStore";

export default function Header() {
  const cart = useCartStore((state) => state.cart);
  const totalQuantity = cart.reduce((s, i) => s + i.quantity, 0);

  return (
    <header className="bg-green-900 shadow-sm text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">
          Shop
        </Link>
        <nav className="flex gap-4 items-center">
          <NavLink to="/inventory" end className={({ isActive }) => (isActive ? "text-blue-400" : "text-white")}>
            Inventory
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? "text-blue-400" : "text-white")}>
            Cart
          </NavLink>
          <Link to="/cart" className="relative inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-100">
            <span className="text-sm font-medium text-black">{totalQuantity}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
