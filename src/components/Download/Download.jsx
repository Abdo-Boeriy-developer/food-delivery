import React from "react";
import "./Download.css";
import { assets } from "../../assets/frontend_assets/assets";
const Download = () => {
  return (
    <div className="download" id="mobile">
      <div className="container">
        <div className="download_text">
          <h2>For Better Experience Download</h2>
          <hr />
          <h2>Tomato App</h2>
          <div className="app_store">
            <img className="store" src={assets.app_store} alt="store" />
            <img src={assets.play_store} alt="store" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
