import React, { useState } from "react";
import "./Styles/App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/Theme/Theme";

import Routes from "../src/router/Routes";
import ThemeSwitch from "./Components/ThemeSwitch/ThemeSwitch";

export const ThemechangeContext = React.createContext();

function App() {
  const [col, setColor] = useState("#8dc63f");
  const handlecolor = (color) => setColor(color);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <ThemeSwitch handler={handlecolor} />
        <ThemechangeContext.Provider value={col}>
          <Routes />
        </ThemechangeContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
