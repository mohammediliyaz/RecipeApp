import styled from "styled-components";

export const Div = styled.div`
  height: 100%;
  box-sizing: border-box;
  background-color: lightgray;
  padding: 10px;
  padding-left: 10rem;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding-left: 8rem;
  }
  @media screen and (max-width: 425px) {
    padding-left: 4rem;
  }
  @media screen and (max-width: 320px) {
    padding-left: 1rem;
  }
`;
export const Form = styled.form`
  margin: 10px 10rem 0 10rem;

  font-family: ${(props) => props.theme.fontFamily.Opensans};

  @media screen and (max-width: 1024px) {
    margin: 8px 8rem 0 8rem;
  }
  @media screen and (max-width: 768px) {
    margin: 6px 4rem 0 4rem;
  }
  @media screen and (max-width: 425px) {
    margin: 6px 2rem 0 2rem;
  }
  @media screen and (max-width: 320px) {
    margin: 6px 0.5rem 0 0.5rem;
  }
`;
export const Input = styled.input`
  width: 95%;
  padding: 10px;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  width: 95%;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;
export const Span = styled.span`
  margin-left: 10px;
  color: red;
  font-size: 13px;
`;
export const H2 = styled.h2`
  font-size: 18px;
  color: ${(props) => props.theme.colors.Zambezi};
  font-family: ${(props) => props.theme.fontFamily.Opensans};
`;

export const Button = styled.button`
  padding: 10px;
  font-family: ${(props) => props.theme.fontFamily.Opensans};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.color};
  transition: all 0.2s ease-in-out;
  margin: 2rem 0 2rem 10.5rem;
  width: 7rem;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    margin: 2rem 0 2rem 3.8rem;
  }
  @media screen and (max-width: 768px) {
    margin: 2rem 0 2rem 2.2rem;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 768px) {
    margin: 2rem 0 2rem 1rem;
    padding: 5px;
    width: 5rem;
  }
`;
