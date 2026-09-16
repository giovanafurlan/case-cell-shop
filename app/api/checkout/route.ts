import { NextRequest, NextResponse } from "next/server";
import { products } from "@/lib/products";

interface CheckoutRequestBody {
  productId?: string;
  quantity?: number;
}

export async function POST(request: NextRequest) {
  let body: CheckoutRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { productId, quantity } = body;

  if (!productId || typeof productId !== "string") {
    return NextResponse.json({ error: "productId is required" }, { status: 400 });
  }

  if (typeof quantity !== "number" || !Number.isInteger(quantity) || quantity <= 0) {
    return NextResponse.json(
      { error: "quantity must be a positive integer" },
      { status: 400 }
    );
  }

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  if (quantity > product.stock) {
    return NextResponse.json(
      {
        error: `Only ${product.stock} unit(s) of "${product.name}" are available in stock`,
      },
      { status: 409 }
    );
  }

  product.stock -= quantity;

  return NextResponse.json(
    {
      productId: product.id,
      quantity,
      stock: product.stock,
      message: "Checkout successful",
    },
    { status: 200 }
  );
}
