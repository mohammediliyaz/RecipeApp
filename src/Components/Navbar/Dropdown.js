import React, { useState } from "react";
import {
  MenuItemsRecipe,
  MenuItemsDemo,
  MenuItemsShop,
  MenuItemsPages,
} from "./MenuItems";
// import { MenuItemsRecipe } from "./MenuItemsRecipe";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown(props) {
  console.log("props got", props.type);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const enumerate = (list) => {
    return list.map((item, index) => {
      return (
        <li>
          <Link
            className={item.cName}
            to={item.path}
            onClick={() => setClick(!false)}
          >
            {item.title}
          </Link>
        </li>
      );
    });
  };
  const DisplayList = () => {
    switch (props.type) {
      case "demo":
        return enumerate(MenuItemsDemo);

      case "recipe":
        return enumerate(MenuItemsRecipe);

      case "pages":
        return enumerate(MenuItemsPages);

      case "shop":
        return enumerate(MenuItemsShop);

      default:
        break;
    }
  };
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {DisplayList()}
      </ul>
    </>
  );
}

export default Dropdown;
