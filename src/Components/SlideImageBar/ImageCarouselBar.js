import React, { useState } from "react";
// import { Button } from "../commonComponents/Button/Style";
import { DivBar, Button } from "./Styles";

export default function ImageCarouselBar(props) {
  // const [color, setColor] = useState(false);
  // const [select, setSelect] = useState();
  const dat = [...props.data].splice(0, 4);

  const display = () => {
    if (dat !== undefined && dat.length !== 0) {
      return dat.map((button, Index) => (
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
            // setSelect(button.name);
            // setColor(!color);
          }}
        >
          {button.name}
        </Button>
      ));
    }
  };

  return <DivBar>{display()}</DivBar>;
}
