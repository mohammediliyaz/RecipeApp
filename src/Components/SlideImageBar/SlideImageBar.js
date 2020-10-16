import React, { useState } from "react";

import { Img } from "./Styles";
import { imageList } from "../SlideImageBar/ImageSet";
import Discription from "./Discription";

export default function SlideImageBar(props) {
  const output = imageList.find((e) => e.imageName === props.image);
  let obj = {};
  Object.assign(obj, output);
  console.log(obj.src);

  return (
    <div>
      <Img
        src={obj.src !== undefined ? obj.src : imageList[0].src}
        alt="img1"
      ></Img>
      <Discription />
    </div>
  );
}
