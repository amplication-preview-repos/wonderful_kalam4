import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  product?: Product | null;
  quantity: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
