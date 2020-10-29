import styled from "styled-components";

export const Img = styled.img`
  height: 25rem;
  object-fit: cover;
  width: 100%;
  background-color: #333;
  position: relative;
  opacity: 0.5;
  z-index: 1;
  @media screen and (max-width: 970px) {
    background-size: cover;
    background-position: center;
  }
`;

export const DivBar = styled.div`
  display: flex;
  font-family: ${(props) => props.theme.fontFamily.Opensans};

  border-size: border-box;
  padding: 20px;
  flex-grow: 1;
  margin: -21px 8rem 0 7.8rem;
  @media screen and (max-width: 970px) {
    display: grid;
    margin: 0;
    padding: 5px;
  }
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

export const DivDiscrption = styled.div`
  width: 350px;
  font-family: ${(props) => props.theme.fontFamily.Arvoserif};
  position: absolute;
  top: 120px;
  left: 200px;
  height: 350px;
  z-index: 2;
  @media screen and (max-width: 970px) {
    top: 120px;
    left: 10px;
    width: 300px;
  }
`;

export const RecipeName = styled.h1`
  font-size: 48px;
  line-height: 50px;
  color: white;
  margin-top: 10px;
`;

export const List = styled.ul`
  display: grid;
  color: white;
  margin-left: -30px;
  grid-template-columns: repeat(3, auto);
`;

export const ViewRecipeButton = styled.button`
  border: 3px solid #fff;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 0;
  width: 130px;
  text-align: center;
  transition: all 0.2s ease-in-out !important;
`;
export const Li = styled.li`
  list-style-type: none;
  font-size: 12px;
`;
export const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  font-family: ${(props) => props.theme.fontFamily.Opensans};
  color: ${(props) => props.theme.colors.black};
  background-color: #f2f2f2;
  transition: all 0.2s ease-in-out;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonSelected = styled.button`
  padding: 10px;
  font-size: 18px;
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
