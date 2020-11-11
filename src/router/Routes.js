import React from "react";
import SubmitRecipe from "../pages/SubmitRecipe/SubmitRecipe";
import Home from "../pages/Home/Home";
import ViewRecipe from "../pages/Viewpage/ViewRecipe";
import { Router, Route, Switch } from "react-router-dom";
import Login from "../pages/Login/Login";
import Signup from "../pages/Login/Signup";
import history from "../history/History";
import { useSelector } from "react-redux";

export default function Routing() {
  const tokenid = useSelector((state) => state.tokenid);

  return (
    <Router history={history}>
      <Switch>
        <Route path={"/"} exact strict component={Login} />
        <Route path={"/signup"} exact strict component={Signup} />
        {true ? (
          <Switch>
            <Route path={"/Home"} exact component={Home} />
            <Route
              path={"/submitRecipes"}
              exact
              strict
              component={SubmitRecipe}
            />
            <Route path={"/Recipepage1"} exact strict component={ViewRecipe} />{" "}
          </Switch>
        ) : (
          history.push("/")
        )}
      </Switch>
    </Router>
  );
}
