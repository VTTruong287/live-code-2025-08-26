import type { InventoryItem } from "../core/models/InventoryItem";

type ProductCardProps = {
  product: InventoryItem;
  handleAddToCart: (product: InventoryItem) => void;
};

export default function ProductCard({ product, handleAddToCart }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 flex flex-col justify-between">
      <div>
        <h3 className="font-semibold text-lg capitalize">{product.name}</h3>
        <p className="text-sm text-gray-600">Price: ${product.unitPrice.toFixed(2)}</p>
        <p className="text-sm text-gray-500">Available: {product.quantity}</p>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          onClick={() => handleAddToCart(product)}
          disabled={product.quantity <= 0}
        >
          Add
        </button>
      </div>
    </div>
  );
}
