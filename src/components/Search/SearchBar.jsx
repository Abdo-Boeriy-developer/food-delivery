import React, { useContext, useEffect, useState } from "react";
import "./SearchBar.css";
import { StoreContext } from "../Context/ShopContext";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch, location } =
    useContext(StoreContext);
  const [visible, setVisibel] = useState(false);
  useEffect(() => {
    if (location.pathname.includes("menu")) {
      setVisibel(true);
      // toast.success("yeas Search Bar");
    } else {
      setVisibel(false);
      // toast.error("Please open the menu to access the search feature.");
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="search">
      <div className="container">
        <div className="searh_bar">
          <input
            type="search"
            placeholder="Search"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <h1 onClick={() => setShowSearch(false)}>X</h1>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default SearchBar;
