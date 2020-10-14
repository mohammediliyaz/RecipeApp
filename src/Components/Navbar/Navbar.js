import React, { Component } from "react";
import { useState } from "react";
import logo from "../../Assets/images/chow.png";
import Dropdown from "../Navbar/Dropdown";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

function Navabar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState("");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (d) => {
    console.log(d);
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(d);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown("");
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => onMouseEnter("demo")}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/demos" className="nav-links" onClick={closeMobileMenu}>
            Demos <i className="fas fa-caret-down" />
          </Link>
          {dropdown === "demo" && <Dropdown type="demo" />}
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => onMouseEnter("recipe")}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/recipes" className="nav-links" onClick={closeMobileMenu}>
            Recipes <i className="fas fa-caret-down" />
          </Link>
          {dropdown === "recipe" && <Dropdown type="recipe" />}
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => onMouseEnter("pages")}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/pages" className="nav-links" onClick={closeMobileMenu}>
            Pages <i className="fas fa-caret-down" />
          </Link>
          {dropdown === "pages" && <Dropdown type="pages" />}
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => onMouseEnter("shop")}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/shop" className="nav-links" onClick={closeMobileMenu}>
            Shop <i className="fas fa-caret-down" />
          </Link>
          {dropdown === "shop" && <Dropdown type="shop" />}
        </li>
        <li className="nav-item">
          <Link
            to="/submitRecipes"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Submit Recipes
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navabar;
