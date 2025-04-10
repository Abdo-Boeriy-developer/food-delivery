import React from "react";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router";
import Login from "./pages/Login/Login";
import Product from "./pages/Products/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Menu from "./pages/Menu/Menu";
import SearchBar from "./components/Search/SearchBar";
import Cart from "./pages/Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import PlaceOrder from "./pages/order/PlaceOrder";
import ShowLogin from "./components/setShowLogin/ShowLogin";
const App = () => {
  return (
    <>
      <div className="container">
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <ShowLogin />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
