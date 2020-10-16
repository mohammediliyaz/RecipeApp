import React, { useState } from "react";
import logo from "../../Assets/images/chow.png";
import Dropdown from "../Navbar/Dropdown";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import { Nav, MenuIcon, Img, Li } from "./Styles";

function Navabar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState("");
  const [homeHover, setHomehover] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (d) => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(d);
    }
  };

  const onMouseEnterHome = () => {
    setHomehover(!homeHover);
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown("");
    }
  };

  return (
    <Nav>
      <Img>
        <img src={logo} alt="logo" />
      </Img>
      <MenuIcon onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </MenuIcon>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <Li
          onMouseEnter={() => onMouseEnterHome()}
          onMouseLeave={onMouseEnterHome}
        >
          <Link
            to="/Home"
            className={homeHover ? "nav-links nav-links-border " : "nav-links "}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
        </Li>
        <Li
          onMouseEnter={() => onMouseEnter("demo")}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/demos" className="nav-links" onClick={closeMobileMenu}>
            Demos <i className="fas fa-caret-down" />
          </Link>
          {dropdown === "demo" && <Dropdown type="demo" />}
        </Li>
        <Li
          onMouseEnter={() => onMouseEnter("recipe")}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/recipes" className="nav-links" onClick={closeMobileMenu}>
            Recipes <i className="fas fa-caret-down" />
          </Link>
          {dropdown === "recipe" && <Dropdown type="recipe" />}
        </Li>
        <Li
          onMouseEnter={() => onMouseEnter("pages")}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/pages" className="nav-links" onClick={closeMobileMenu}>
            Pages <i className="fas fa-caret-down" />
          </Link>
          {dropdown === "pages" && <Dropdown type="pages" />}
        </Li>
        <Li
          onMouseEnter={() => onMouseEnter("shop")}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/shop" className="nav-links" onClick={closeMobileMenu}>
            Shop <i className="fas fa-caret-down" />
          </Link>
          {dropdown === "shop" && <Dropdown type="shop" />}
        </Li>
        <Li>
          <Link
            to="/submitRecipes"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Submit Recipes
          </Link>
        </Li>
      </ul>
    </Nav>
  );
}

export default Navabar;
