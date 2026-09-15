"use client";

import { useMemo, useState } from "react";
import { ProductGrid } from "@/components/organisms/ProductGrid";
import { ProductFilters } from "@/components/molecules/ProductFilters";
import { Product } from "@/types/product";

interface ProductsTemplateProps {
  products: Product[];
}

export function ProductsTemplate({ products }: ProductsTemplateProps) {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  const brands = useMemo(
    () => Array.from(new Set(products.map((p) => p.brand))).sort(),
    [products]
  );
  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))).sort(),
    [products]
  );

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return products.filter((p) => {
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.phoneModel.toLowerCase().includes(query);
      const matchesBrand = !brand || p.brand === brand;
      const matchesCategory = !category || p.category === category;
      return matchesSearch && matchesBrand && matchesCategory;
    });
  }, [products, search, brand, category]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-neutral-100">Cellphone cases</h1>
      <ProductFilters
        search={search}
        onSearchChange={setSearch}
        brand={brand}
        onBrandChange={setBrand}
        category={category}
        onCategoryChange={setCategory}
        brands={brands}
        categories={categories}
      />
      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <p className="text-neutral-500 dark:text-neutral-400">
          No cases found matching your filters.
        </p>
      )}
    </main>
  );
}
