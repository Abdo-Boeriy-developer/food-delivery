import React, { useContext } from "react";
import "./CartTotals.css";
import { StoreContext } from "../../components/Context/ShopContext";
import { useNavigate } from "react-router";
const CartTotals = () => {
  const { currenscy, getTotalAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cartTotals">
      <div className="contianer">
        <div className="cart_Total">
          <h2>Cart Totals</h2>
          <ul>
            <li>
              <p>Subtotal</p>
              <b>
                {currenscy}
                {getTotalAmount()}
              </b>
            </li>
            <li>
              <p>Delivery Free</p>
              <b>
                {currenscy}
                {getTotalAmount() === 0 ? 0 : 2}
              </b>
            </li>
            <li>
              <p>Discount</p>
              <b>
                {" "}
                {currenscy}
                {getTotalAmount() === 0 ? 0 : 10}
              </b>
            </li>
            <li>
              <strong>Total</strong>
              <b>
                {currenscy}
                {getTotalAmount() === 0
                  ? 0
                  : getTotalAmount() + 2 && getTotalAmount() - 8}
              </b>
            </li>
          </ul>
          <button onClick={() => navigate("/place")}>
            product to checkout
          </button>
        </div>
        <div className="premo_code">
          <h3>if you have a promo code, Enter it here</h3>
          <div>
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
