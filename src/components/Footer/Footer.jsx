import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer_box">
          <div className="box box_home">
            <img src={assets.logo} alt="logo" />
            <p>
              lorem ipsum is simply dummy text of the prinling and typeseling
              industry. lorem ipsum has been the industry's standard dummy text
              ever since the 1500s, when on unknown printer fook a galley fo
              type and scrambled if to make a type specimen book.
            </p>
            <div>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
          <div className="box">
            <h3>Company</h3>
            <ul>
              <li>Home</li>
              <li>about us</li>
              <li>delivery</li>
              <li>privacy</li>
            </ul>
          </div>
          <div className="box">
            <h3>Company</h3>
            <ul>
              <li>+02 10 33 41 36 96</li>
              <li>eng.abdoboeriy@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="text_bottom">
          <h2>Eng.Abdo_Boeriy</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
