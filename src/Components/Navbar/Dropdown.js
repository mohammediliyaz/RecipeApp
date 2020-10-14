import React, { useState } from "react";
import { MenuItemsRecipe, MenuItemsDemo } from "./MenuItems";
// import { MenuItemsRecipe } from "./MenuItemsRecipe";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {props.type !== "demo"
          ? MenuItemsRecipe.map((item, index) => {
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
            })
          : MenuItemsDemo.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className={item.cName}
                    to={item.path}
                    onClick={() => setClick(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
      </ul>
    </>
  );
}

export default Dropdown;
