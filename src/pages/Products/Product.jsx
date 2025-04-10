import React, { useContext, useEffect, useState } from "react";
import "./prodcut.css";

import { StoreContext } from "../../components/Context/ShopContext";
import ProductItem from "../ProductItem/ProductItem";
const Product = ({ category }) => {
  const { food_list, productData } = useContext(StoreContext);

  return (
    <div className="product">
      <div className="container">
        <div className="text">
          <h2>Top dishes near you</h2>
        </div>

        <div className="product_items">
          {productData?.length ? (
            productData?.map((item, index) => {
              if (category === "All" || category === item.category) {
                return (
                  <div key={index} className="items">
                    <ProductItem
                      id={item._id}
                      img={item.image}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                    />
                  </div>
                );
              }
            })
          ) : (
            <p>no Products</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
