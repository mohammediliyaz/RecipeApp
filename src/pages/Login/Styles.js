import styled from "styled-components";
export const Div = styled.div`
  display: grid;
  width: 100%;

  box-sizing: border-box;
  grid-template-columns: 59% 41%;
  grid-column-gap: 0px;
  @media screen and (max-width: 425px) {
    grid-template-columns: auto;
    grid-column-gap: 0px;
  }
`;

export const Section = styled.section`
  margin: 6rem 0 0 0;

  width: 100%;
  @media screen and (max-width: 768px) {
    margin: 0 0rem 0rem 0;
  }
  @media screen and (max-width: 425px) {
    margin: 3rem 0 0rem 0rem;
  }
  @media screen and (max-width: 320px) {
    margin: 3rem 0 0rem 0rem;
  }
`;

export const Input = styled.input`
  width: 98%;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.green};
  padding: 2px;
  position: relative;
  border: none;
  outline: none;
  border-bottom: 1px solid green;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: 90%;
    padding: 10px;
  }
  @media screen and (max-width: 425px) {
    padding: 7px;
    // width: 100%;
  }
  @media screen and (max-width: 375px) {
    padding: 7px;
    // width: 100%;
  }
  @media screen and (max-width: 320px) {
    padding: 5px;
    // width: 100%;
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
  font-size: 1.5vw;
  border: none;
  border-radius: 20px;

  &:hover {
    background-color: rgb(141, 198, 63);
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 425px) {
    width: 6rem;
    font-size: 4vw;
    padding: 5px;
    
  @media screen and (max-width: 320px) {
    width: 6rem;
    padding: 5px;
    font-size: 5vw;
    
`;
export const InputPassone = styled.p`
  position: absolute;
  right: 47px;
  top: 489px;
  &:hover {
    color: green;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    top: 430px;
    right: 18px;
  }
  @media screen and (max-width: 425px) {
    right: 10px;
    top: 450px;
  }
  @media screen and (max-width: 375px) {
    right: 30px;
    top: 460px;
  }
  @media screen and (max-width: 320px) {
    right: 20px;
    top: 445px;
    font-size: 15px;
  }
`;
export const InputPasstwo = styled.p`
  position: absolute;
  right: 47px;
  top: 589px;
  &:hover {
    color: green;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    right: 18px;
    top: 540px;
  }
  @media screen and (max-width: 425px) {
    right: 20px;
    top: 550px;
  }
  @media screen and (max-width: 375px) {
    right: 30px;
    top: 560px;
  }
  @media screen and (max-width: 320px) {
    right: 20px;
    top: 540px;
    font-size: 15px;
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

export const Span = styled.span`
  color: red;
  font-size: 16px;
  padding: 4px;
`;
