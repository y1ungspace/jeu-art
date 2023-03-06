
export interface Template {
  id: number;
  name: string;
  amount?: number;
  year?: number;
  cost?: number;
  color?: string;
  producer?: string;
  image?: string[];
  designer?: string;
  type?: string;
  description?: string,
  popularity?: number;
  isInCart?: boolean;
}
 
export type Product = {
  id: number;
  name: string;
  amount: number;
  year: number;
  cost: number;
  color: string;
  producer: string;
  image: string[];
  designer: string;
  type: string;
  description: string;
  popularity: number;
  isInCart: boolean;
}

export type SearchPannelType = {
  arr: Product[]
}

export type TPannel = {
  pannelType: keyof Product
}

export type Colors = {
  red: string,
  blue: string,
  white: string,
  black: string,
  metal: string,
}
