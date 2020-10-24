import styled from "styled-components";
import { theme } from "../../../Theme/Theme";

export const Button = styled.button`
  padding: 10px;
  font-family: ${(props) => props.theme.fontFamily.Opensans};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.color};
  transition: all 0.2s ease-in-out;

  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;
