import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Explore from "../Explore/Explore";
import Product from "../../pages/Products/Product";
import Download from "../Download/Download";
const Home = () => {
  const [category, setCategory] = useState("All");
  // const [menuList, setMenuList] = useState("All");
  return (
    <div className="container">
      <Header />
      <Explore category={category} setCategory={setCategory} />
      <Product category={category} />
      <Download />
    </div>
  );
};

export default Home;
