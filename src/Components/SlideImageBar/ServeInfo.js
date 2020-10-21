import React from "react";
import { Li } from "./Styles";
export default function ServeInfo(props) {
  return (
    <>
      <Li>
        <i className="fa fa-utensils"></i> {props.serveNumber} SERVINGS
      </Li>
      <Li>
        <i className="fa fa-clock"></i>
        {props.serveTime} min
      </Li>
      <Li>
        <i className="fa fa-user"></i> {"BY "} {props.chef}
      </Li>
    </>
  );
}
