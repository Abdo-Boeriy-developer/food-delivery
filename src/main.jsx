import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShopContext from "./components/Context/ShopContext.jsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ShopContext>
        <App />
      </ShopContext>
    </BrowserRouter>
  </StrictMode>
);
