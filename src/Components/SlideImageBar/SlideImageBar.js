import React from "react";

import { Img } from "./Styles";

import Discription from "./Discription";

export default function SlideImageBar(props) {
  return (
    <div style={{ background: "#333" }}>
      <Img
        src={props.image !== undefined ? props.image : false}
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
