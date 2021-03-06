import React, { useState } from "react";

import { Button } from "../commonComponents/Button/Style";
import { Input } from "../Footer/styles";
import { SearchDiv } from "./Styles";

export default function Search(props) {
  const [searchText, setSearchText] = useState("");

  const ChangeHandler = (e) => {
    setSearchText(e.target.value);
    props.clickHandler(e.target.value);
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
      <Button type="button">
        <i className="fa fa-search"></i>
      </Button>
    </SearchDiv>
  );
}
