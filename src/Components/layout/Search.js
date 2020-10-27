import React, { useState } from "react";

import { Button } from "../commonComponents/Button/Style";
import { Input } from "../Footer/styles";
import { SearchDiv } from "./Styles";

export default function Search(props) {
  const lists = props.searchList;
  const [searchText, setSearchText] = useState("");
  // let searched = "";
  // const [suggestions, setSuggestions] = useState([]);

  // const ChangeHandler = (e) => {
  //   setSearchText(e.target.value);
  //   setSuggestions(getSuggestions(e.target.value));
  // };
  // const selectedRecipe = (e) => {
  //   console.log("selected", e.target.outerText);

  //   props.clickHandler(e.target.outerText);
  //   searched = e.target.outerText;
  //   setSuggestions([]);
  // };
  // const clickHandler = () => {
  //   console.log("search", searchText);
  //   props.clickHandler(searchText);
  // };
  // const getSuggestions = (value) => {
  //   const inputValue = value.trim().toLowerCase();
  //   const inputLength = inputValue.length;

  //   return inputLength === 0
  //     ? []
  //     : lists.filter(
  //         (e) => e.recipeName.toLowerCase().slice(0, inputLength) === inputValue
  //       );
  // };

  const ChangeHandler = (e) => {
    setSearchText(e.target.value);
    props.clickHandler(e.target.value);
    console.log("searched", searchText);
  };

  const clickHandler = () => {
    console.log("clicked search butoon");
  };
  return (
    <SearchDiv>
      <Input
        type="text"
        autocomplete="on"
        placeholder="search for recipes"
        style={{
          backgroundColor: "white",
          border: "1px solid lightgray",
          padding: "10px",
          width: "11.6rem",
        }}
        value={searchText}
        onChange={(e) => ChangeHandler(e)}
      ></Input>
      <Button type="button" onClick={clickHandler}>
        <i className="fa fa-search"></i>
      </Button>
      {/* {suggestions &&
        suggestions.map((e) => (
          <label onClick={(e) => selectedRecipe(e)}>{e.recipeName}</label>
        ))} */}
    </SearchDiv>
  );
}
