import styled from "styled-components";

export const Div = styled.div`
  display: grid;
  height: 100%;

  grid-template-columns: 75% 23%;
  grid-column-gap: 20px;

  margin: 0 9rem 0 9rem;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 75% 23%;
    margin: 10px;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export const Left = styled.div`
  height: 100%;

  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    grid-template-columns: auto auto auto;
    justify-content: space-around;
    margin-top: 20px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: auto;

    margin-top: 20px;
  }
`;

export const Right = styled.div`
  display: block;

  width: 100%;
  justify-content: flex-start;
  height: 100%;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
  // @media screen and (max-width: 1024px) {
  // }
`;

export const SearchDiv = styled.div`
  @media screen and (max-width: 1024px) {
    display: flex;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 425px) {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
`;
