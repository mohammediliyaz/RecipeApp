import React from "react";
import { Ingridentset } from "./Dataset";
import { IngredientsStyle } from "./Styles";
import "../Viewpage/Styles.css";

export default function Ingridents(props) {
  const IngredientsValue = Object.values(props.Ingridentset);
  return (
    <IngredientsStyle>
      <h1 style={{ color: "#606060", fontFamily: "Arvo" }}>Ingredients</h1>
      {
        <ul>
          {IngredientsValue.map((e, Index) => (
            <label key={Index}>
              <input type="checkbox" className="strikethrough" value="1" />
              <span>{e}</span> <br></br>
              <br></br>
            </label>
          ))}
        </ul>
      }
    </IngredientsStyle>
  );
}
