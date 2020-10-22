import React from "react";
import { Blue, Green, Yellow, Orange, Div, Purple, Cog } from "./Style";

export default function ThemeSwitch() {
  return (
    <Div>
      <Blue></Blue>
      <Green></Green>
      <Orange></Orange>
      <Purple></Purple>
      <Yellow></Yellow>
      <div style={{ position: "relative" }}>
        <Cog>
          <i className="fa fa-cog fa-2x"></i>
        </Cog>
      </div>
    </Div>
  );
}
