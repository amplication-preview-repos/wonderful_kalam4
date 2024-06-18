import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  status?: "Option1" | null;
};
