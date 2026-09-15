export interface Product {
  id: string;
  name: string;
  phoneModel: string;
  brand: string;
  price: number;
  category: string;
  imageUrl: string;
  description?: string;
  stock: number;
}
