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

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseEnterDemo = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown("Demo");
    }
  };
  const onMouseEnterRecipe = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown("Recipe");
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
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
          onMouseEnter={onMouseEnterDemo}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/demos" className="nav-links" onClick={closeMobileMenu}>
            Demos <i className="fas fa-caret-down" />
          </Link>
          {dropdown === "Demo" && <Dropdown type="demo" />}
        </li>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnterRecipe}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/recipes" className="nav-links" onClick={closeMobileMenu}>
            Recipes <i className="fas fa-caret-down" />
          </Link>
          {dropdown === "Recipe" && <Dropdown type="recipe" />}
        </li>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/pages" className="nav-links" onClick={closeMobileMenu}>
            Pages <i className="fas fa-caret-down" />
          </Link>
          {/* {dropdown && <Dropdown />} */}
        </li>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/shop" className="nav-links" onClick={closeMobileMenu}>
            Shop <i className="fas fa-caret-down" />
          </Link>
          {/* {dropdown && <Dropdown />} */}
        </li>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
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
