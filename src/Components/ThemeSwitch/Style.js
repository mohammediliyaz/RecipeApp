import styled from "styled-components";
import { theme } from "../../Theme/Theme";

export const Blue = styled.div`
  height: 15px;
  margin-top: 6px;
  width: 15px;
  background-color: ${(props) => theme.backgroundColors.blue};
`;

export const Green = styled.div`
  height: 15px;
  margin-top: 6px;
  width: 15px;
  background-color: ${(props) => theme.backgroundColors.green};
`;

export const Orange = styled.div`
  height: 15px;
  width: 15px;
  margin-top: 6px;
  background-color: ${(props) => theme.backgroundColors.orange};
`;
export const Purple = styled.div`
  height: 15px;
  width: 15px;
  margin-top: 6px;
  background-color: ${(props) => theme.backgroundColors.purple};
`;

export const Yellow = styled.div`
  height: 15px;
  width: 15px;
  margin-top: 6px;
  background-color: ${(props) => theme.backgroundColors.yellow};
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100px;
  height: 50px;
  background-color: #808080;
  position: fixed;
  top: 30px;
  z-index: 99;
`;

export const Cog = styled.div`
  position: fixed;
  z-index: 99;
  top: 0px;
  left: -3px;
  background-color: lightgray;
  width: 35px;
  display: flex;
  justify-content: flex-end;
`;
