import { formatCurrency } from "@/lib/format";

interface PriceProps {
  value: number;
  className?: string;
}

export function Price({ value, className = "" }: PriceProps) {
  return (
    <span className={`font-semibold text-neutral-900 dark:text-neutral-100 ${className}`}>
      {formatCurrency(value)}
    </span>
  );
}
