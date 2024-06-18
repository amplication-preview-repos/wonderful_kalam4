import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  comment?: string | null;
  product?: ProductWhereUniqueInput | null;
  rating?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
