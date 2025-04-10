import React, { useContext, useState } from "react";
import "./ProductItem.css";
import { StoreContext } from "../../components/Context/ShopContext";
import { Link } from "react-router";
import { assets } from "../../assets/frontend_assets/assets";
const ProductItem = ({ id, name, img, price, description }) => {
  const {
    currenscy,
    cartItems,
    addToCart,
    removeFromItem,
    isLogin,
    setShowLogin,
  } = useContext(StoreContext);
  // console.log(cartItems);
  return (
    <div className="items_box">
      <div className="item_box">
        <Link>
          <img src={img} alt="images_products" />
        </Link>
        <div className="addToCart">
          {!cartItems[id] ? (
            <img
              src={assets.add_icon_white}
              onClick={() => {
                if (isLogin === false) {
                  setShowLogin(true);
                } else {
                  addToCart(id);
                }
              }}
            />
          ) : (
            <div className="add_remove">
              <img
                src={assets.remove_icon_red}
                alt="remov_icons"
                onClick={() => removeFromItem(id)}
              />
              <p>{cartItems[id]}</p>
              <img
                src={assets.add_icon_green}
                alt=""
                onClick={() => addToCart(id)}
              />
            </div>
          )}
        </div>
        <div className="item_box_text">
          <div className="rating">
            <h2>{name}</h2>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p>{description}</p>
          <h3>
            {currenscy}
            {price}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
