import styled from "styled-components";

export const Div = styled.div`
  display: block;
  position: relative;
  width: 240px;
  height: 100%;
  font-family: ${(props) => props.theme.fontFamily.Arvoserif};
  color: ${(props) => props.theme.colors.Zambezi};
  background-color: rgb(248, 248, 248);
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
export const H2 = styled.h2`
  font-family: ${(props) => props.theme.fontFamily.Arvo};
`;

export const Img = styled.img`
  width: 100%;
  height: 187px;
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
  z-index: 2;
  position: absolute;
  border: 0;

  background-color: rgb(0, 0, 0, 0.5);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 0;
  width: 130px;
  text-align: center;
  transition: all 0.2s ease-in-out !important;
  cursor: pointer;
`;
