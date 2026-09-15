"use client";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

export function QuantitySelector({
  quantity,
  onChange,
  min = 1,
  max = 99,
}: QuantitySelectorProps) {
  const decrement = () => onChange(Math.max(min, quantity - 1));
  const increment = () => onChange(Math.min(max, quantity + 1));

  return (
    <div className="inline-flex items-center rounded-md border border-neutral-300">
      <button
        type="button"
        onClick={decrement}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className="flex h-8 w-8 items-center justify-center text-neutral-600 hover:bg-neutral-100 disabled:opacity-40"
      >
        −
      </button>
      <span className="w-8 text-center text-sm font-medium">{quantity}</span>
      <button
        type="button"
        onClick={increment}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        className="flex h-8 w-8 items-center justify-center text-neutral-600 hover:bg-neutral-100 disabled:opacity-40"
      >
        +
      </button>
    </div>
  );
}
