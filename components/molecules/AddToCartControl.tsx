"use client";

import { useState } from "react";
import { Button } from "@/components/atoms/Button";
import { QuantitySelector } from "@/components/atoms/QuantitySelector";
import { useCart } from "@/lib/cart-context";
import { checkout } from "@/lib/api/checkout";
import { Product } from "@/types/product";

interface AddToCartControlProps {
  product: Product;
}

export function AddToCartControl({ product }: AddToCartControlProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stock, setStock] = useState(product.stock);

  const handleAdd = async () => {
    setError(null);
    setIsSubmitting(true);
    try {
      const result = await checkout(product.id, quantity);
      addItem(product, quantity);
      setStock(result.stock);
      setAdded(true);
      setQuantity(1);
      setTimeout(() => setAdded(false), 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (stock <= 0) {
    return (
      <Button variant="secondary" disabled className="w-full">
        Out of stock
      </Button>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <QuantitySelector
          quantity={quantity}
          onChange={setQuantity}
          max={stock}
        />
        <Button onClick={handleAdd} disabled={isSubmitting} className="flex-1">
          {isSubmitting ? "Adding..." : added ? "Added" : "Add to cart"}
        </Button>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
