import React from "react";
import { Div, Img, P, Container } from "./Styles";
import authorImage from "../../Assets/images/author-photo.png";
export default function Author() {
  const authorData = [
    {
      image: authorImage,
      authorName: "Sandra Fortin",
      mail: "Sandra@chow.com",
      authorDescription:
        "I'm Sandra and this is where I share my stuff. I am madly in love with food. You will find a balance of healthy recipes, comfort food and indulgent desserts.",
    },
  ];
  return (
    <Container>
      <Div>
        {authorData.map((authorData, Index) => (
          <div key={authorData + Index}>
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
          </div>
        ))}
      </Div>
    </Container>
  );
}
