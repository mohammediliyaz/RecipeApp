import React from "react";
import { DirectionsStyle } from "./Styles";
import { Directionset } from "./Dataset";

export default function Directions(props) {
  const DirectionsValue = Object.values(props.Directionset);
  return (
    <DirectionsStyle>
      <h1>Directions</h1>
      {
        <ul>
          {DirectionsValue.map((e) => (
            <label>
              {e} <br></br>
              <br></br>
            </label>
          ))}
        </ul>
      }
    </DirectionsStyle>
  );
}
