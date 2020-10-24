import styled from "styled-components";

export const Div = styled.div`
  height: 100%;
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
  margin: 15px;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 95%;
`;
