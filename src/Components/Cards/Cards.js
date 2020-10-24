import React, { useState } from "react";

import { Viewbutton } from "./Styles";
import { Img } from "./Styles";
import { Div, H2 } from "./Styles";
import history from "../../history/History";

export default function Cards(props) {
  const [show, setShow] = useState(false);

  const callStars = () => {
    let ret = [];
    for (let i = 0; i < props.rating; i++) {
      ret.push(
        <i className="fa fa-star" style={{ color: "rgb(255, 199, 65)" }}></i>
      );
    }
    return ret;
  };

  return (
    <Div>
      <Img
        src={require(`../../Assets/images/${props.image}.jpg`)}
        alt=""
        onMouseEnter={() => setShow(!show)}
        onMouseLeave={() => setShow(show)}
      />
      {show && (
        <Viewbutton onClick={() => history.push("/Recipepage1")}>
          VIEW RECIPE
        </Viewbutton>
      )}

      <H2>{props.recipe}</H2>
      <p>
        <i className="fa fa-clock"></i>
        {props.time}
      </p>
      <p>Ratings : {callStars()}</p>
    </Div>
  );
}
