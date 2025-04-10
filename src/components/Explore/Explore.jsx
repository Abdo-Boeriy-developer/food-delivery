import "./Explore.css";
import { menu_list } from "../../assets/frontend_assets/assets";
const Explore = ({ category, setCategory }) => {
  return (
    <div className="explore">
      <div className="container">
        <div className="explore_text">
          <h2>Explore Our menu</h2>
          <p>
            Choose from a diverse menu featuring a delectable array of dishes
            with the finest ingredients and culinary expertise. Our mission is
            to satisfy your cravings and elevate your dining experience, one
            delicious meal at a time.
          </p>
        </div>
        <div className="menu_list">
          {menu_list.map((item, index) => (
            <ul key={index}>
              <li
                onClick={() =>
                  setCategory((prev) =>
                    prev.menu_name ? "All" : item.menu_name
                  )
                }
              >
                <img
                  src={item.menu_image}
                  alt="menu_image"
                  className={category === item.menu_name ? "active" : ""}
                />
                <p>{item.menu_name}</p>
              </li>
            </ul>
          ))}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Explore;
