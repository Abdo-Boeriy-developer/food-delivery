import React, { createContext, useEffect, useState } from "react";

import { food_list } from "../../assets/frontend_assets/assets";
import { useLocation } from "react-router";

export const StoreContext = createContext(null);

const ShopContext = ({ children }) => {
  const currenscy = "$";
  const [cartItems, setCartItems] = useState({});
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [productData, setProductData] = useState([]);
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);
  const [shcowLogin, setShowLogin] = useState(false);

  useEffect(() => {
    setProductData(food_list);
  }, [food_list]);

  // add to cart

  const addToCart = (id) => {
    if (!cartItems[id]) {
      setCartItems((prev) => ({ ...prev, [id]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    }
  };

  // remove From item
  const removeFromItem = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const value = {
    food_list,
    currenscy,
    cartItems,
    addToCart,
    removeFromItem,
    getTotalAmount,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    productData,
    setProductData,
    location,
    isLogin,
    setIsLogin,
    shcowLogin,
    setShowLogin,
  };
  return (
    <>
      <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    </>
  );
};

export default ShopContext;
