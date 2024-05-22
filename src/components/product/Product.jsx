import React from "react";
import "../../sass/__product.scss";
import { FaHeart, FaStar } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import useStore from "../../context/store";
const Product = ({ data, loading }) => {
  let handleHeart = useStore((state) => state.toggleHeart);
  let heart = useStore((state) => state.value);
  let handleAddToCart = useStore((store) => store.addToCart);

  let products = data?.map((el) => (
    <div className="product__card" key={el.id}>
      <img src={el.images[0]} alt="" />
      <h4 title={el.description}>{el.description}</h4>
      <h5>
        <FaStar />
        {el.rating} <span>{el.stock} ta sotilgan</span>
      </h5>
      <div className="card__wish">
        <h3>${el.price}</h3>
        <div>
          <button onClick={() => handleHeart(el)}>
            {heart?.some((item) => item.id === el.id) ? (
              <FaHeart style={{ color: "red" }} />
            ) : (
              <FaRegHeart />
            )}
          </button>

          <button onClick={() => handleAddToCart(el)}>
            <HiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="product__wrapper">
      <div className="container">
        <div className="product__section">{products}</div>
      </div>
    </div>
  );
};

export default Product;
