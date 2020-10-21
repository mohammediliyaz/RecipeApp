import React from "react";
import { IngredientsStyle } from "./Styles";

export default function Ingridents(props) {
  return (
    <IngredientsStyle>
      <input type="checkbox" />
      {<label>{props.Ingridentset.one}</label>}
    </IngredientsStyle>
  );
}
