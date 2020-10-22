import styled from "styled-components";

export const Entity = styled.div`
  height: 100px;
  position: relative;
`;

export const Content = styled.div`
  color: white;
  position: absolute;
  top: 40px;
  line-height: 22px;
  font-weight: 900;
  cursor: pointer;
  z-index: 2;
`;
export const Contentr = styled.div`
  position: absolute;
  color: white;
  top: 65px;
  font-weight: 700;
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
  background-color: #8dc63f;
  border: none;
  &:focus {
    outline: none;
  }
`;
