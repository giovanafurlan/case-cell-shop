import { ProductImage } from "@/components/atoms/ProductImage";
import { Price } from "@/components/atoms/Price";
import { Badge } from "@/components/atoms/Badge";
import { AddToCartControl } from "@/components/molecules/AddToCartControl";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-neutral-200 p-4">
      <ProductImage src={product.imageUrl} alt={product.name} />

      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            {product.brand}
          </p>
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            {product.name}
          </h3>
        </div>
        <Badge tone={product.stock > 0 ? "success" : "danger"}>
          {product.stock > 0 ? `In stock` : "Out of stock"}
        </Badge>
      </div>

      {product.description && (
        <p className="line-clamp-2 text-sm text-neutral-500 dark:text-neutral-400">
          {product.description}
        </p>
      )}

      <Price value={product.price} className="text-lg" />

      <AddToCartControl product={product} />
    </div>
  );
}
