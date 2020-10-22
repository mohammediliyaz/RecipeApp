import React, { useState, useEffect } from "react";
import axios from "axios";
import PopularCard from "./PopularCard";

export default function PopularRecipe() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://my-food-recipe.firebaseio.com/.json`).then((res) => {
      const v = Object.values(res.data.RecipeList);
      v.sort((a, b) => (Number(a.rating) > Number(b.rating) ? -1 : 1));
      const newdata = v.slice(0, 3);
      setData(newdata);
    });
  }, []);

  return data.map((data) => {
    return (
      <PopularCard
        recipe={data.name}
        image={data.bannerimage}
        rating={data.rating}
      />
    );
  });
}
