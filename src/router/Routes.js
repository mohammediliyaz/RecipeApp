import React from "react";
import SubmitRecipe from "../pages/SubmitRecipe/SubmitRecipe";
import Home from "../pages/Home/Home";
import ViewRecipe from "../pages/Viewpage/ViewRecipe";
import { Router, Route, Switch } from "react-router-dom";
import Login from "../pages/Login/Login";
import Signup from "../pages/Login/Signup";
import history from "../history/History";

export default function Routing() {
  return (
    <Router history={history}>
      <Switch>
        <Route path={"/"} exact strict component={Signup} />
        <Route path={"/Home"} exact component={Home} />
        <Route path={"/login"} exact strict component={Login} />
        <Route path={"/submitRecipes"} exact strict component={SubmitRecipe} />
        <Route path={"/Recipepage1"} exact strict component={ViewRecipe} />
      </Switch>
    </Router>
  );
}
