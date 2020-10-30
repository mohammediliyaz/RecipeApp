import React, { useState } from "react";
import {
  MenuItemsRecipe,
  MenuItemsDemo,
  MenuItemsShop,
  MenuItemsPages,
} from "./MenuItems";

import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const enumerate = (list) => {
    return list.map((item, index) => {
      return (
        <li key={item.title + index}>
          <Link className={item.cName} onClick={() => setClick(!false)}>
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
