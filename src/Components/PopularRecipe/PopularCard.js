import React, { useState, useContext } from "react";
import history from "../../history/History";
import { ThemechangeContext } from "../../App";

import { Entity, Content, Img, Contentr, Button } from "./Styles";

function PopularCard(props) {
  const [show, setShow] = useState(false);
  const color = useContext(ThemechangeContext);
  const callStars = () => {
    let ret = [];
    for (let i = 0; i < props.rating; i++) {
      ret.push(
        <i
          key={i}
          className="fa fa-star"
          style={{ color: "rgb(255, 199, 65)" }}
        ></i>
      );
    }
    return ret;
  };

  return (
    <div>
      <Entity>
        <Img
          src={require(`../../Assets/images/${props.image}.jpg`)}
          onMouseEnter={() => setShow(!show)}
          onMouseLeave={() => setShow(show)}
        />
        {show && (
          <Button
            onClick={() => history.push("/Recipepage1")}
            style={{ backgroundColor: color }}
          >
            <i className="fa fa-share" style={{ color: "white" }} />
          </Button>
        )}
        <Content>{props.recipe}</Content>
        <Contentr>{callStars()}</Contentr>
      </Entity>
    </div>
  );
}

export default PopularCard;
