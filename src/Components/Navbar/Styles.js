import styled from "styled-components";
import { theme } from "../../Theme/Theme";

export const Nav = styled.nav`
  background-color: ${(props) => theme.backgroundColors.white};
  font-family: ${(props) => props.theme.fontFamily.Arvoserif};
  font-size: ${(props) => props.theme.fontSizes.primary};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const MenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Img = styled.div`
  margin-left: 10px;
  @media screen and (max-width: 960px) {
    position: absolute;
    left: 1rem;
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  height: 80px;
  @media screen and (max-width: 960px) {
    height: 40px;
  }
`;
