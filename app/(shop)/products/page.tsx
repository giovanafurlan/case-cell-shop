import { ProductsTemplate } from "@/components/templates/ProductsTemplate";
import { products } from "@/lib/products";

export default function ProductsPage() {
  return <ProductsTemplate products={products} />;
}
