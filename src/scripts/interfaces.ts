export interface Template {
  name: string;
  amount: number;
  year: number;
  cost: string;
  color?: string;
  producer?: string;
  image: string;
  designer: string;
  type: string;
  isPopular?: boolean;
  isInCart: boolean;
}