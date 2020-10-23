import React, { useState } from "react";
import "./Styles/App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/Theme/Theme";

import Routes from "../src/router/Routes";
import ThemeSwitch from "./Components/ThemeSwitch/ThemeSwitch";

function App() {
  const [col, setColor] = useState("#8dc63f");
  const handlecolor = (color) => setColor(color);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ThemeProvider theme={{ color: col }}>
          <ThemeSwitch handler={handlecolor} />
          <Routes />
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
