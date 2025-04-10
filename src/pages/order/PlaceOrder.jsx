import React, { useContext } from "react";
import "./palceorder.css";
import { StoreContext } from "../../components/Context/ShopContext";
import { toast } from "react-toastify";
const PlaceOrder = () => {
  const { currenscy, getTotalAmount } = useContext(StoreContext);

  return (
    <div className="place_order">
      <div className="container">
        <div className="delivery">
          <h2>Delivery Information</h2>
          <div>
            <input type="text" name="name" placeholder="First Name" />
            <input type="text" name="lastName" placeholder="Last Name" />
          </div>
          <input type="email" name="email" placeholder="Email Address" />
          <div>
            <input type="text" name="city" placeholder="City" />
            <input type="text" name="state" placeholder="State" />
          </div>
          <div>
            <input type="text" name="zip_code" placeholder="Zip code" />
            <input type="text" name="country" placeholder="Country" />
          </div>
          <input type="number" name="number" placeholder="phone" />
        </div>
        <div className="cart_totals">
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
              <p>Discount</p>
              <b>
                {" "}
                {currenscy}
                {getTotalAmount() === 0 ? 0 : 10}
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
              <strong>Total</strong>
              <strong>
                {currenscy}
                {getTotalAmount() === 0
                  ? 0
                  : getTotalAmount() + 2 && getTotalAmount() - 8}
              </strong>
            </li>
          </ul>
          <button
            onClick={() => {
              if (getTotalAmount() > 0) {
                toast.success("Your Order has been successfully confirmed.");
                setInterval(() => location.reload(), 5000);
                
              } else {
                toast.error("No Orders available.");
              }
            }}
          >
            proceed to payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
