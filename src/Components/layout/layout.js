import React, { useState, useEffect } from "react";

import { Div, Left, Right } from "./Styles";

import Cards from "../Cards/Cards";
import Search from "./Search";
import Author from "../Author/Author";
import PopularRecipe from "../PopularRecipe/PopularRecipe";
import axios from "axios";

export default function Layout() {
  const [idata, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    axios.get(`https://foodrecipejson.firebaseio.com/.json`).then((res) => {
      const v = Object.values(res.data.RecipeList);
      setData(v);
      setFiltered(v);
    });
  }, []);

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : setFiltered(idata.filter((e) => e.name.toLowerCase().includes(value)));
  };
  const clickHandler = (searchRecipe) => {
    getSuggestions(searchRecipe);
  };

  const displayCards = () => {
    if (filtered.length !== 0) {
      return filtered.map((recipe, Index) => {
        return (
          <Cards
            key={Index}
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
    <>
      <h1 style={{ marginLeft: "11%", color: "#606060", fontFamily: "Arvo" }}>
        Latest recipes
      </h1>
      <Div>
        <Left>{displayCards()}</Left>
        <Right>
          <Search clickHandler={clickHandler} searchList={idata} />
          <Author />
          <h3 style={{ color: "#606060", fontFamily: "Arvo" }}>
            Popular Recipes
          </h3>
          <PopularRecipe />
        </Right>
      </Div>
    </>
  );
}
