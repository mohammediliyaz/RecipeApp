import React, { useState, useEffect } from "react";
import SlideImage from "./SlideImageBar";
import ImageCarousel from "./ImageCarouselBar";
import axios from "axios";
import images from "../../Service/imageFiles";

export default function Slide() {
  const [image, setImage] = useState("");
  const [recipeInSlide, setRecipeInSlide] = useState({});
  const [data, setData] = useState([]);

  const clickHandler = (arg) => {
    console.log(arg);
    if (data !== undefined && data.length !== 0) {
      const selectedRecipe = data.find((ele) => ele.name === arg.recipeName);
      console.log(
        "Recipe name:" + arg.recipeName + " and object is:" + selectedRecipe
      );
      const keyed = selectedRecipe.bannerimage;
      console.log("banner image is:", images[keyed]);
      setImage(images[keyed]);
      setRecipeInSlide(selectedRecipe);
    }
  };

  useEffect(() => {
    axios.get(`https://foodrecipejson.firebaseio.com/.json`).then((res) => {
      const v = Object.values(res.data.RecipeList);
      setData(v);
      setRecipeInSlide(v[0]);
      console.log("current recipe updated", recipeInSlide);
      const keyed = v[0].bannerimage;
      setImage(images[keyed]);
      clickHandler(v[0]);
    });
  }, []);

  return (
    <>
      <SlideImage
        image={image}
        recipeType={recipeInSlide.tag}
        recipeName={recipeInSlide.name}
        serveNumber={recipeInSlide.servings}
        serveTime={recipeInSlide.min}
        chef={recipeInSlide.chef}
      />
      <ImageCarousel clickHandler={clickHandler} data={data} />
    </>
  );
}
