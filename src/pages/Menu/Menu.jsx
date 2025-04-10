import React, { useContext, useEffect, useState } from "react";
import "./Menu.css";
import { StoreContext } from "../../components/Context/ShopContext";
import ProductItem from "../ProductItem/ProductItem";
import Download from "../../components/Download/Download";
const Menu = () => {
  const { food_list, search, productData, setProductData } =
    useContext(StoreContext);
  const productsSearch = () => {
    let MenuProduct = food_list.slice();

    if (search) {
      MenuProduct = MenuProduct.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setProductData(MenuProduct);
  };

  useEffect(() => {
    productsSearch();
  }, [search]);

  return (
    <>
      <div className="product menu">
        <div className="container">
          <div className="text">
            <h2>Top dishes near you Menu</h2>
          </div>
          <div className="product_items">
            {productData.map((item, index) => (
              <div className="items" key={index}>
                <ProductItem
                  id={item._id}
                  img={item.image}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Download />
    </>
  );
};

export default Menu;
