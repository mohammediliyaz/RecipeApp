import React, { useState } from "react";
import history from "../../history/History";

import { Entity, Content, Img, Contentr, Button } from "./Styles";

function PopularCard(props) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Entity>
        <Img
          src={require(`../../Assets/images/${props.image}.jpg`)}
          onMouseEnter={() => setShow(!show)}
          onMouseLeave={() => setShow(show)}
        />
        {show && (
          <Button onClick={() => history.push("/Recipepage1")}>
            <i className="fa fa-share" style={{ color: "white" }} />
          </Button>
        )}
        <Content>{props.recipe}</Content>
        <Contentr>{props.rating}</Contentr>
      </Entity>
    </div>
  );
}

export default PopularCard;
