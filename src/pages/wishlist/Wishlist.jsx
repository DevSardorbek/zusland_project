import React from "react";
import Product from "../../components/product/Product";
import useStore from "../../context/store";

const Wishlist = () => {
  let heart = useStore((state) => state.value);
  return (
    <div>
      <Product data={heart} />
    </div>
  );
};

export default Wishlist;
