import React from "react";
import "./Header.css";
import { NavLink } from "react-router";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="text">
          <h1>
            Order your <br /> favourite food here
          </h1>
          <p>
            Choose from a diverse menu featuring a delectable array of dishes
            with the finest ingredients and culinary expertise. Our mission is
            to satisfy your cravings and elevate your dining experience, one
            delicious meal at a time.
          </p>
          <NavLink to="/menu">
            <button>View Menu</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
