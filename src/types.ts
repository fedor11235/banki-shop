export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
}

export type BuyState = 'idle' | 'processing' | 'inCart';
