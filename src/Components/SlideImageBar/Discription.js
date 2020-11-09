import React, { useContext } from "react";
import { DivDiscrption, RecipeName, List, ViewRecipeButton } from "./Styles";
import { Button } from "../commonComponents/Button/Style";
import { ThemechangeContext } from "../../App";
import ServeInfo from "./ServeInfo";
import history from "../../history/History";

export default function Discription(props) {
  const color = useContext(ThemechangeContext);
  return (
    <DivDiscrption>
      <Button style={{ backgroundColor: color }}>{props.recipeType}</Button>
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
