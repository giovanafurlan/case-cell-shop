import Link from "next/link";
import { CartIndicator } from "@/components/molecules/CartIndicator";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Cell Shop"
              width={60}
              height={60}
            />
            <p className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
              Case Cell Shop
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <CartIndicator />
        </div>
      </div>
    </header>
  );
}
