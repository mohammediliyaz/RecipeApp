import React, { useState } from "react";
import img1 from "../../Assets/images/recipeThumb-02.jpg";
import { Viewbutton } from "./Styles";
import { Img } from "./Styles";
import { Div } from "./Styles";
import history from "../../history/History";

export default function Cards(props) {
  const [show, setShow] = useState(false);

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

      <h2>{props.recipe}</h2>
      <p>
        <i className="fa fa-clock"></i>
        {props.time} {" MIN"}
      </p>
      <p>{props.rating}</p>
    </Div>
  );
}
