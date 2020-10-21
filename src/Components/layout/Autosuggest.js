import React from "react";
export const Autosuggest = (props) => {
  return props.suggestions.map((e) => <li>{e}</li>);
};
