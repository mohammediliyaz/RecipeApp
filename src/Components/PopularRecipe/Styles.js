import styled from "styled-components";

export const Entity = styled.div`
  height: 100px;
  position: relative;
  display: flex;
  justify-direction: column;
  @media screen and (max-width: 768px) {
    margin: 10px 0px 10px 0;
  }
`;

export const Content = styled.div`
  color: white;
  position: absolute;
  top: 23px;
  line-height: 22px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  cursor: pointer;
  z-index: 2;
`;
export const Contentr = styled.div`
  position: absolute;
  color: white;
  top: 65px;
  font-size: 700;
  z-index: 2;
`;
export const Img = styled.img`
  width: 99%;
  height: 100%;
  opacity: 0.8;
  z-index: 1;
`;
export const Button = styled.button`
  height: 40px;
  position: absolute;
  top: 0;
  right: 3px;
  width: 40px;
  z-index: 2;
  background-color: ${(props) => props.theme.color};
  border: none;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 1024px) {
    right: 8px;
  }
`;
