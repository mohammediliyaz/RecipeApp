import React, { useState } from "react";
import { Div, Img, P } from "./Styles";
import RecipeService from "../../Service/RecipeService";
export default function Author() {
  const [authorData, setauthorData] = useState("");

  return (
    <Div>
      {RecipeService.getAuthorData().map((authorData) => (
        <>
          <div>
            <Img src={authorData.image} />
            <p>AUTHOR</p>
            <p
              style={{
                color: "#606060",
                fontWeight: "bolder",
                fontSize: "20px",
                marginTop: "-5px",
              }}
            >
              {authorData.authorName}
            </p>
          </div>
          <P>{authorData.mail}</P>
          <p style={{ color: "#808080" }}>{authorData.authorDescription}</p>
        </>
      ))}
    </Div>
  );
}
