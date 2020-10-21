import styled from "styled-components";
export const Div = styled.div`
  display: grid;

  grid-template-columns: 59% 40%;
  justify-content: space-between;
`;

export const Section = styled.section`
margin:6rem 0 22rem 0;
border: 1px solid black:

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
  justify-content: space-between;
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
