import React, { useState } from "react";
import SlideImage from "./SlideImageBar";
import ImageCarousel from "./ImageCarouselBar";

export default function Slide() {
  const [image, setImage] = useState("");
  const clickHandler = (imageName) => {
    setImage(imageName);
  };
  return (
    <>
      <SlideImage image={image} />
      <ImageCarousel clickHandler={clickHandler} />
    </>
  );
}
