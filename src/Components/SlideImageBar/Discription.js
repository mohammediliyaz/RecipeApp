import React from "react";
import { DivDiscrption, RecipeName, List, ViewRecipeButton } from "./Styles";
import { Button } from "../commonComponents/Button/Style";
import ServeInfo from "./ServeInfo";
import history from "../../history/History";

export default function Discription(props) {
  return (
    <DivDiscrption>
      <Button>{props.recipeType}</Button>
      <RecipeName>{props.recipeName}</RecipeName>
      <List>
        <ServeInfo
          serveNumber={props.serveNumber}
          serveTime={props.serveTime}
          chef={props.chef}
        />
      </List>
      <ViewRecipeButton onClick={() => history.push("/Recipepage1")}>
        VIEW RECIPE
      </ViewRecipeButton>
    </DivDiscrption>
  );
}
