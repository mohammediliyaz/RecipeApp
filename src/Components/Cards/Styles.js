import styled from "styled-components";

export const Div = styled.div`
  display: block;
  position: relative;
  width: 240px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 187x;
  z-index: 1;
  &:hover {
    z-index: 1;
    background-color: #333;
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const Viewbutton = styled.button`
  top: 90px;
  left: 58px;

  position: absolute;
  border: 3px solid #fff;

  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 0;
  width: 130px;
  text-align: center;
  transition: all 0.2s ease-in-out !important;
`;
