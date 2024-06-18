import { Product } from "../product/Product";
import { User } from "../user/User";

export type Review = {
  comment: string | null;
  createdAt: Date;
  id: string;
  product?: Product | null;
  rating?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
