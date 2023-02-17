
export interface Template {
  name: string;
  amount?: number;
  year?: number;
  cost?: number;
  color?: string;
  producer?: string;
  image?: string;
  designer?: string;
  type?: string;
  popularity?: number;
  isInCart?: boolean;
}
 
export type Product = {
  name: string;
  amount: number;
  year: number;
  cost: number;
  color: string;
  producer?: string;
  image: string;
  designer: string;
  type: string;
  popularity?: number;
  isInCart: boolean;
}

export type SearchPannelType = {
  arr: Product[]
}

export type TPannel = {
  pannelType: keyof Product
}
