import React from "react";
import { useState } from "react";
import { Blue, Green, Yellow, Orange, Div, Purple, Cog } from "./Style";

export default function ThemeSwitch(props) {
  const [show, setShow] = useState(false);

  const handleCog = () => {
    setShow(!show);
  };

  return (
    <>
      <Cog>
        <i className="fa fa-cog fa-2x cogIcon" onClick={handleCog}></i>
      </Cog>
      {show && (
        <Div>
          <Blue onClick={() => props.handler("#2db2ea")}></Blue>
          <Green onClick={() => props.handler("#8dc63f")}></Green>
          <Orange onClick={() => props.handler("#fa5b0f")}></Orange>
          <Purple onClick={() => props.handler("#917ae9")}></Purple>
          <Yellow onClick={() => props.handler(" #ffb400")}></Yellow>
          <div style={{ position: "relative" }}></div>
        </Div>
      )}
    </>
  );
}
