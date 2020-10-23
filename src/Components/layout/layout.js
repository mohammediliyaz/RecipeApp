import React, { useState, useEffect } from "react";

import { Div, Left, Right } from "./Styles";
import "./Style.css";
import Cards from "../Cards/Cards";
import RecipeService from "../../Service/RecipeService";
import Search from "./Search";
import Author from "../Author/Author";
import PopularRecipe from "../PopularRecipe/PopularRecipe";
import axios from "axios";

export default function Layout() {
  const [search, setSearch] = useState("All");
  const [idata, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://my-food-recipe.firebaseio.com/.json`).then((res) => {
      const v = Object.values(res.data.RecipeList);
      setData(v);
    });
  }, [idata]);

  const clickHandler = (searchRecipe) => {
    setSearch(searchRecipe);
  };
  const displayCards = () => {
    if (idata.length !== 0) {
      const filteredList = idata.filter((e) =>
        search === "All" ? true : e.name === search
      );
      return filteredList.map((recipe) => {
        return (
          <Cards
            recipe={recipe.name}
            image={recipe.bannerimage}
            rating={recipe.rating}
            time={recipe.min}
          />
        );
      });
    }
  };

  return (
    <Div>
      <Left>{displayCards()}</Left>
      <Right>
        <Search clickHandler={clickHandler} searchList={idata} />
        <Author />
        <PopularRecipe />
      </Right>
    </Div>
  );
}
