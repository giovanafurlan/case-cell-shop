import { SearchInput } from "@/components/atoms/SearchInput";
import { Select } from "@/components/atoms/Select";

interface ProductFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  brand: string;
  onBrandChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  brands: string[];
  categories: string[];
}

export function ProductFilters({
  search,
  onSearchChange,
  brand,
  onBrandChange,
  category,
  onCategoryChange,
  brands,
  categories,
}: ProductFiltersProps) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="sm:flex-1">
        <SearchInput
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search phone cases..."
          aria-label="Search phone cases"
        />
      </div>
      <Select
        value={brand}
        onChange={(e) => onBrandChange(e.target.value)}
        aria-label="Filter by brand"
      >
        <option value="">All brands</option>
        {brands.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </Select>
      <Select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        aria-label="Filter by category"
      >
        <option value="">All categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </Select>
    </div>
  );
}
