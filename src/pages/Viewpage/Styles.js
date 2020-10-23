import styled from "styled-components";

export const Img = styled.img`
  height: 15rem;
  width: 100%;
  position: relative;
`;

export const Title = styled.div`
  height: 6.2rem;

  background-color: rgb(248, 248, 248);
  position: absolute;
  top: 220px;
  width: 49rem;

  @media screen and (max-width: 1440px) {
    width: 59%;
    paddind-right: 10px;
  }
  @media screen and (max-width: 1024px) {
    width: 73%;
    paddind-right: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 97%;

    margin-right: 20px;
  }
  @media screen and (max-width: 320px) {
    width: 94%;

    margin-right: 20px;
  }
`;

export const IngredientsStyle = styled.div`
  display: block;
  heigth: 200px;

  margin-top: 10px;
`;
export const DirectionsStyle = styled.div`
  heigth: 200px;

  margin-top: 10px;
`;
export const RecipeInfodiv = styled.div`
  display: flex;
  padding: 20px 23px 20px 35px;
  position: relative;
  margin-top: -5px;
  width: 50%;
  justify-content: space-around;

  @media screen and (max-width: 425px) {
    width: 83%;
    font-size: 12px;
    padding: 15px 19px 15px 27px;
  }
`;
export const RecipeInfo = styled.div`
width:
  background-color: rgb(248, 248, 248);
`;
export const Values = styled.div`
  position: absolute;
  top: 60px;
  color: rgb(128, 128, 128);
  font-weight: 600;
`;
