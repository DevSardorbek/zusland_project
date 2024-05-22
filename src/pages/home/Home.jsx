import React, { memo } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";
import { useFetch } from "../../hooks/useFetch";
const Home = () => {
  const { data, loading, error } = useFetch("/products");
  console.log(data);
  return (
    <div>
      <Hero />
      <Product data={data?.data?.products} loading={loading} />
    </div>
  );
};

export default memo(Home);
