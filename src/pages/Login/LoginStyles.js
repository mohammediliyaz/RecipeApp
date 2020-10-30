import styled from "styled-components";
export const Div = styled.div`
  display: grid;

  grid-template-columns: 59% 40%;
  justify-content: space-between;
`;

export const Section = styled.section`
  margin: 6rem 0 22rem 0;
`;

export const Input = styled.input`
  width: 32rem;

  padding: 10px;
  &:focus {
    outline: none;
  }
`;
export const LoginButtons = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-around;
`;
export const Button = styled.button`
  padding: 10px;
  width: 7rem;
  font-size: 20px;
  border: none;
  border-radius: 20px;
  &:focus {
    outline: none;
  }
`;
export const H1 = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.Arvoserif};
  color: ${(props) => props.theme.colors.Zambezi};
`;

export const Inputt = styled.input`
  width: 90%;

  color: ${(props) => props.theme.colors.green};
  padding: 10px;
  position: relative;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
  @media screen and (max-width: 425px) {
    padding: 7px;
  }
  @media screen and (max-width: 320px) {
    padding: 5px;
  }
`;

export const InputPassLogin = styled.p`
  position: absolute;
  right: 40px;
  top: 300px;
  &:hover {
    color: green;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    top: 225px;
    right: 10px;
  }
  @media screen and (max-width: 425px) {
    right: 40px;
    top: 260px;
  }
  @media screen and (max-width: 375px) {
    right: 40px;
    top: 262px;
  }
  @media screen and (max-width: 320px) {
    right: 20px;
    top: 250px;
    font-size: 16px;
  }
`;
