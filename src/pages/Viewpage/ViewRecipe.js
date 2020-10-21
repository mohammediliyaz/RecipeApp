import React from "react";
import { Img, Title } from "./Styles";
import { Div } from "../../Components/layout/Styles";
import Search from "../../Components/layout/Search";
import Author from "../../Components/Author/Author";
import PopularRecipe from "../../Components/PopularRecipe/PopularRecipe";
import Navabar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Styles.css";
import Ingridents from "./Ingridents";
import Directions from "./Directions";
import { Ingridentset, Directionset } from "./Dataset";

export default function Viewrecipe() {
  return (
    <>
      <Navabar />
      <div>
        <Img src="https://my-food-recipe.firebaseapp.com/static/media/sliderA_02.9513fb69.jpg" />
      </div>
      <Div>
        <div>
          <Title>
            <h1>Recipe Name</h1>
            <div id="container"> </div>
          </Title>
          <Img
            src="https://my-food-recipe.firebaseapp.com/static/media/recipeThumb-01.2147f47a.jpg"
            style={{ height: "20rem" }}
          />
          <div style={{ display: "inline" }}>
            services cooking time calories prep
          </div>
          <div style={{ height: "150px", border: "1px solid red" }}>
            discription
          </div>
          <Ingridents Ingridentset={Ingridentset} />
          <Directions Directionset={Directionset} />
        </div>
        <div>
          <Search />
          <Author />
          <PopularRecipe />
        </div>
      </Div>
      <Footer />
    </>
  );
}
