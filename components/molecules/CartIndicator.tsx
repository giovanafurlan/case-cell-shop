"use client";

import { useCart } from "@/lib/cart-context";
import { MdShoppingCart } from "react-icons/md";

export function CartIndicator() {
  const { totalItems } = useCart();

  return (
    <div className="relative inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
      <MdShoppingCart size={20}/>
      {totalItems > 0 && (
        <span className="flex items-center justify-center rounded-full bg-neutral-900 px-1 text-xs font-semibold text-white">
          {totalItems}
        </span>
      )}
    </div>
  );
}
