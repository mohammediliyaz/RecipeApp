import React from "react";
import "./Styles/App.css";
import { Route, browserhistory } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import SubmitRecipe from "./Components/SubmitRecipe/SubmitRecipe";
import SlideImageBar from "../src/Components/SlideImageBar/SlideImageBar";
import ImageCarouselBar from "./Components/SlideImageBar/ImageCarouselBar";
import Slide from "./Components/SlideImageBar/Slide";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path={"/Home"} strict component={Slide} />
        <Route path={"/submitRecipes"} component={SubmitRecipe} />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
