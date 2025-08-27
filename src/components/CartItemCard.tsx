import type { CartItem } from "../core/models/CartItem";

type CartItemProps = {
  item: CartItem;
  onUpdate: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
};

export default function CartItem({ item, onUpdate, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center justify-between gap-4 p-3 border-b">
      <div className="flex-1">
        <div className="font-medium capitalize">{item.name}</div>
        <div className="text-sm text-gray-600">${item.unitPrice.toFixed(2)} each</div>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="number"
          min="0"
          value={item.quantity}
          onChange={(e) => onUpdate(item.id, Math.max(0, Number(e.target.value)))}
          className="w-20 p-1 border rounded text-center"
        />
        <div className="w-24 text-right font-semibold">${(item.unitPrice * item.quantity).toFixed(2)}</div>
        <button onClick={() => onRemove(item.id)} className="px-2 py-1 rounded bg-red-500 text-white">
          Remove
        </button>
      </div>
    </div>
  );
}
