import React from "react";
import { Ingridentset } from "./Dataset";
import { IngredientsStyle } from "./Styles";
import "../Viewpage/Styles.css";

export default function Ingridents(props) {
  const IngredientsValue = Object.values(props.Ingridentset);
  return (
    <IngredientsStyle>
      <h1>Ingredients</h1>
      {
        <ul>
          {IngredientsValue.map((e) => (
            <label>
              <input type="checkbox" class="strikethrough" value="1" />
              <span>{e}</span> <br></br>
              <br></br>
            </label>
          ))}
        </ul>
      }
    </IngredientsStyle>
  );
}
