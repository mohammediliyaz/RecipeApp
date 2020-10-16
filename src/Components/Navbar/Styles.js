import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
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
