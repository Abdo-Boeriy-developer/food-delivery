import React, { useContext } from "react";
import "./shcowLogin.css";
import { StoreContext } from "../Context/ShopContext";
import { useLocation, useNavigate } from "react-router";

const ShowLogin = () => {
  const location = useLocation();

  const { shcowLogin, setShowLogin } = useContext(StoreContext);
  const navigate = useNavigate();
  return shcowLogin ? (
    <div className="showLogin">
      <div className="container">
        <div className="show_log">
          <p>
            You must be logged in to add items to the cart. Do you want to login
            now ?
          </p>
          <div>
            <button className="cancel" onClick={() => setShowLogin(false)}>
              Cancel
            </button>
            <button
              onClick={() => {
                navigate("login"), setShowLogin(false);
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ShowLogin;
