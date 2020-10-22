import React from "react";
import { Img, Title, RecipeInfo, RecipeInfodiv, Values } from "./Styles";
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
            <h1>Mexican Grilled Corn Recipe</h1>
            <div id="container"> </div>
          </Title>
          <Img
            src="https://my-food-recipe.firebaseapp.com/static/media/recipeThumb-01.2147f47a.jpg"
            style={{ height: "20rem" }}
          />
          <RecipeInfo>
            <RecipeInfodiv>
              <div>
                <p>Serves:</p>
                <Values>5</Values>
              </div>
              <div>
                <p>Prep Time:</p>
                <Values>30 min</Values>
              </div>
              <div>
                <p>Cooking:</p>
                <Values>2 hours</Values>
              </div>
              <div>
                <p>Calories:</p>
                <Values>632 kcal</Values>
              </div>
            </RecipeInfodiv>
          </RecipeInfo>
          <div
            style={{
              height: "100%",
              marginTop: "30px",
            }}
          >
            Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet
            scelerisque bibendum. Aenean ullamcorper neque ac tristique semper.
            Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.
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
