interface CheckoutResponse {
  productId: string;
  quantity: number;
  stock: number;
  message: string;
}

interface CheckoutErrorResponse {
  error: string;
}

export async function checkout(
  productId: string,
  quantity: number
): Promise<CheckoutResponse> {
  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId, quantity }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error((data as CheckoutErrorResponse).error ?? "Checkout failed");
  }

  return data as CheckoutResponse;
}
