import React from "react";
import { DirectionsStyle } from "./Styles";
import { Directionset } from "./Dataset";

export default function Directions(props) {
  const DirectionsValue = Object.values(props.Directionset);
  return (
    <DirectionsStyle>
      <h1 style={{ color: "#606060", fontFamily: "Arvo" }}>Directions</h1>
      {
        <ol>
          {DirectionsValue.map((e) => (
            <li style={{ margin: "20px" }}>
              {e}
              <br></br>
            </li>
          ))}
        </ol>
      }
    </DirectionsStyle>
  );
}
