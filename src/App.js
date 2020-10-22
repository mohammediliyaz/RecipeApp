import React from "react";
import "./Styles/App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/Theme/Theme";

import Routes from "../src/router/Routes";
import ThemeSwitch from "./Components/ThemeSwitch/ThemeSwitch";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ThemeSwitch />
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
