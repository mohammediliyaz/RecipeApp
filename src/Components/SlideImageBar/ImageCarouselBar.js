import React, { useState } from "react";

import { DivBar, Button, ButtonSelected } from "./Styles";

export default function ImageCarouselBar(props) {
  const dat = [...props.data].splice(0, 4);
  const [select, setSelect] = useState("Mexican Grilled Corn Recipe");

  const display = () => {
    if (dat !== undefined && dat.length !== 0) {
      return dat.map((button, Index) =>
        select === button.name ? (
          <ButtonSelected
            key={Index + button.name}
            onClick={() => {
              props.clickHandler({
                imageName: button.bannerimage,
                recipeType: button.tag,
                recipeName: button.name,
                image: button.image,
                time: button.min,
                chef: button.chef,
                num: button.servings,
              });
              setSelect(button.name);
            }}
          >
            {button.name}
          </ButtonSelected>
        ) : (
          <Button
            key={Index}
            onClick={() => {
              props.clickHandler({
                imageName: button.bannerimage,
                recipeType: button.tag,
                recipeName: button.name,
                image: button.image,
                time: button.min,
                chef: button.chef,
                num: button.servings,
              });
              setSelect(button.name);
            }}
          >
            {button.name}
          </Button>
        )
      );
    }
  };

  return <DivBar>{display()}</DivBar>;
}
