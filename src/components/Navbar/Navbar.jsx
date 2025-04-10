import React, { useContext, useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";
import { StoreContext } from "../Context/ShopContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { setShowSearch, location } = useContext(StoreContext);
  return (
    <header>
      <div className="content">
        <div className="logo">
          <NavLink to="/">
            <img src={assets.logo} alt="" />
          </NavLink>
        </div>
        <div className="Links_center">
          <nav>
            <ul>
              <li
                className={`${menu === "home" ? "active" : ""}`}
                onClick={() => setMenu("home")}
              >
                <NavLink to={"/"}>home</NavLink>
              </li>
              <li
                onClick={() => setMenu("about")}
                className={`${menu === "about" ? "active" : ""}`}
              >
                <a href="#">about</a>
              </li>
              <li
                className={`${menu === "menu" ? "active" : ""}`}
                onClick={() => setMenu("menu")}
              >
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li
                onClick={() => setMenu("mobile")}
                className={`${menu === "mobile" ? "active" : ""}`}
              >
                <a href="#mobile">mobile-app</a>
              </li>
              <li
                onClick={() => setMenu("contact")}
                className={`${menu === "contact" ? "active" : ""}`}
              >
                <a href="#footer">contact us</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="btns_search">
          <ul>
            <li>
              <img
                onClick={() => {
                  if (location.pathname.includes("menu")) {
                    setShowSearch(true);
                  } else {
                    toast.error(
                      "Please open the menu to access the search feature."
                    );
                  }
                }}
                src={assets.search_icon}
                alt=""
              />
            </li>
            <li>
              <NavLink to="/cart">
                <img src={assets.basket_icon} alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <button>sing in</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
