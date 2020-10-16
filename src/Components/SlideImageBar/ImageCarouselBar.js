import React from "react";
import { Button } from "../commonComponents/Button/Style";
import { Div } from "./Styles";
import SlideImage from "./SlideImageBar";

export default function ImageCarouselBar(props) {
  const buttonList = [
    { recipeName: " Mexican Grilled Corn Recipe", imageName: "sliderimg1" },
    { recipeName: "Roast Chicken With Lemon Gravy", imageName: "sliderimg2" },
    {
      recipeName: " Avocado Melon Salad With Lime Vinaigrette ",
      imageName: "sliderimg3",
    },
    { recipeName: "Chunky Beef Stew", imageName: "sliderimg4" },
    {
      recipeName: "Farmhouse Vegetable And Barley Soup",
      imageName: "sliderimg1",
    },
  ];
  return (
    <Div>
      {buttonList.map((button) => (
        <Button onClick={() => props.clickHandler(button.imageName)}>
          {button.recipeName}
        </Button>
      ))}
    </Div>
  );
}
