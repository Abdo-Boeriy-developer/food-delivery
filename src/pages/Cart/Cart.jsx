import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../components/Context/ShopContext";
import CartTotals from "../CartTotals/CartTotals";
const Cart = () => {
  const { cartItems, productData, removeFromItem } = useContext(StoreContext);
  return (
    <div className="cart">
      <div className="container">
        <div className="cart_top">
          <div className="cart_text">
            <ul>
              <li>items</li>
              <li i className="name">
                titel
              </li>
              <li>price</li>
              <li>quntity</li>
              <li>total</li>
              <li>remove</li>
            </ul>
          </div>
          <hr />
        </div>
        <div className="cart_bottom_items">
          {productData.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <>
                  <ul key={index}>
                    <li>
                      <img src={item.image} alt="" />
                    </li>
                    <li className="name">{item.name}</li>
                    <li>{item.price}</li>
                    <li>
                      <b>
                        <input
                          type="number"
                          defaultValue={cartItems[item._id]}
                          min={1}
                        />
                      </b>
                    </li>
                    <li>{item.price * cartItems[item._id]}</li>
                    <li
                      className="cross"
                      onClick={() => removeFromItem(item._id)}
                    >
                      X
                    </li>
                  </ul>
                  <hr />
                </>
              );
            }
          })}
        </div>
      </div>
      <div className="container">
        <div className="cart_totals">
          <CartTotals />
        </div>
      </div>
    </div>
  );
};

export default Cart;
