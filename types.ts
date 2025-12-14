export interface Product {
  id: number;
  name: string;
  team: string;
  price: number;
  image: string;
  category: 'Club' | 'National';
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
  size: string;
}

export type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}