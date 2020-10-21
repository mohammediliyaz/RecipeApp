import React, { useState, useEffect } from "react";
import { Button } from "../commonComponents/Button/Style";
import { DivBar } from "./Styles";

export default function ImageCarouselBar(props) {
 const dat=[...props.data].splice(0,4);

  const display = () => {
    if (dat !==undefined && dat.length !== 0) {
      return dat.map((button) => (
        <Button
          onClick={() =>
            props.clickHandler({
              imageName: button.bannerimage,
              recipeType: button.tag,
              recipeName: button.name,
              image: button.image,
              time: button.min,
              chef: button.chef,
              num: button.servings,
            })
          }
        >
          {button.name}
        </Button>
      ));
    }
  };

  return <DivBar>{display()}</DivBar>;
}
