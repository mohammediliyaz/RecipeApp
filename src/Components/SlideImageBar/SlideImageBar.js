import React from "react";

import { Img } from "./Styles";
import { imageList } from "./ImageSet";
import Discription from "./Discription";

export default function SlideImageBar(props) {
  const output = imageList.find((e) => e.imageName === props.image);
  let obj = {};
  Object.assign(obj, output);
  console.log(obj.src);

  return (
    <div style={{ background: "#333" }}>
      <Img
        src={props.image !== undefined ? props.image : imageList[0].src}
        alt="img1"
      ></Img>
      <Discription
        recipeType={props.recipeType}
        recipeName={props.recipeName}
        serveNumber={props.serveNumber}
        serveTime={props.serveTime}
        chef={props.chef}
      />
    </div>
  );
}
