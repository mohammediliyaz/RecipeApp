import styled from "styled-components";
export const Div = styled.div`
  display: grid;

  grid-template-columns: 59% 40%;
  justify-content: space-between;
  @media screen and (max-width: 425px) {
    grid-template-columns: auto;
  }
`;

export const Section = styled.section`
  margin: 6rem 0 16rem 0;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin: 0 1rem 0 0;
  }
  @media screen and (max-width: 425px) {
    width: 110%;
    margin: 1rem 0 0rem 1rem;
  }
  @media screen and (max-width: 320px) {
    margin: 1rem 0 0rem 1rem;
  }
`;

export const Input = styled.input`
  width: 90%;
  color: ${(props) => props.theme.colors.green};
  padding: 10px;
  position: relative;
  border: none;
  outline: none;
  border-bottom: 1px solid green;
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
export const LoginButtons = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
`;
export const Button = styled.button`
  padding: 10px;
  width: 9rem;
  font-size: 20px;
  border: none;
  border-radius: 20px;

  &:hover {
    background-color: ${(props) => props.theme.color};
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 425px) {
    width: 6rem;
    padding: 5px;
    font-size: 16x;
  }
  @media screen and (max-width: 320px) {
    width: 4rem;
    padding: 2px;
    font-size: 13px;
  }
`;
export const InputPassone = styled.p`
  position: absolute;
  right: 40px;
  top: 518px;
  &:hover {
    color: green;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    top: 419px;
    right: 18px;
  }
  @media screen and (max-width: 425px) {
    right: 150px;
    top: 410px;
  }
  @media screen and (max-width: 375px) {
    right: 100px;
    top: 410px;
  }
  @media screen and (max-width: 320px) {
    right: 100px;
    top: 400px;
    font-size: 13px;
  }
`;
export const InputPasstwo = styled.p`
  position: absolute;
  right: 40px;
  top: 619px;
  &:hover {
    color: green;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    top: 520px;
    right: 18px;
  }
  @media screen and (max-width: 425px) {
    right: 150px;
    top: 510px;
  }
  @media screen and (max-width: 375px) {
    right: 100px;
    top: 510px;
  }
  @media screen and (max-width: 320px) {
    right: 100px;
    top: 495px;
    font-size: 13px;
  }
`;
export const Img = styled.img`
width:100%;
height=100%;
@media screen and (max-width: 425px) {
  display:none;
}
`;

export const H1 = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.Arvoserif};
  color: ${(props) => props.theme.colors.Zambezi};
`;
