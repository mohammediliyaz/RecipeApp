import React from "react";
import { useState } from "react";
import {
  Blue,
  Green,
  Yellow,
  Orange,
  Div,
  Purple,
  Cog,
  Container,
  ResetButton,
  ColorPicker,
} from "./Style";
import { SketchPicker } from "react-color";

export default function ThemeSwitch(props) {
  const [colorPicker, setColorPicker] = useState("#8dc63f");
  const [showColorPicker, setShowSolorPicker] = useState(false);
  const [show, setShow] = useState(false);

  const handleCog = () => {
    setShow(!show);
  };

  return (
    <div>
      <Cog>
        <i className="fa fa-cog fa-2x cogIcon" onClick={handleCog}></i>
      </Cog>
      {show && (
        <Container>
          <h4 style={{ color: "#fff" }}>Predefined colors</h4>
          <Div>
            <Blue onClick={() => props.handler("#2db2ea")}></Blue>
            <Green onClick={() => props.handler("#8dc63f")}></Green>
            <Orange onClick={() => props.handler("#fa5b0f")}></Orange>
            <Purple onClick={() => props.handler("#917ae9")}></Purple>
            <Yellow onClick={() => props.handler(" #ffb400")}></Yellow>
          </Div>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ResetButton onClick={() => props.handler("#8dc63f")}>
              reset
            </ResetButton>
            <ColorPicker
              onClick={() => {
                setShowSolorPicker((showColorPicker) => !showColorPicker);
                props.handler(colorPicker);
              }}
            >
              {showColorPicker ? "close custom" : "custom"}
            </ColorPicker>
          </div>
          {showColorPicker && (
            <SketchPicker
              color={colorPicker}
              onChange={(updatedcolorPicker) =>
                setColorPicker(updatedcolorPicker.hex)
              }
            />
          )}
        </Container>
      )}
    </div>
  );
}
