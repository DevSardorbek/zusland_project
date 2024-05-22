import { create } from "zustand";
import { wishlist } from "./wishlistSlice";
import { bears } from "./bears";
import { cart } from "./cartSlice";
const useStore = create((set) => ({
  ...wishlist(set),
  ...cart(set),
  ...bears(set),
}));
export default useStore;
