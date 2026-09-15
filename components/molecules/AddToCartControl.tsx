"use client";

import { useState } from "react";
import { Button } from "@/components/atoms/Button";
import { QuantitySelector } from "@/components/atoms/QuantitySelector";
import { useCart } from "@/lib/cart-context";
import { Product } from "@/types/product";

interface AddToCartControlProps {
  product: Product;
}

export function AddToCartControl({ product }: AddToCartControlProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    setQuantity(1);
    setTimeout(() => setAdded(false), 1500);
  };

  if (product.stock <= 0) {
    return (
      <Button variant="secondary" disabled className="w-full">
        Out of stock
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <QuantitySelector
        quantity={quantity}
        onChange={setQuantity}
        max={product.stock}
      />
      <Button onClick={handleAdd} className="flex-1">
        {added ? "Added" : "Add to cart"}
      </Button>
    </div>
  );
}
