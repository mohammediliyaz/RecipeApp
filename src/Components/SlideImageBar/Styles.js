import styled from "styled-components";

export const Img = styled.img`
  height: 25rem;
  width: 100%;
  z-index: -1;

  @media screen and (max-width: 970px) {
    background-size: cover;
    background-position: center;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  margin: 0 8rem 0 8rem;
`;
