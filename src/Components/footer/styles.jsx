import styled from "styled-components";

export const Div = styled.div`
font-family: "Open Sans";
height:100%;
font-size:14px;
background-color: #333333;
color: #b8b8b8;
width=100%;
padding:50px 0 50px 0;



`;
export const About = styled.div`
height: 100%;

}
`;


export const Li = styled.li`
  list-style-type:none;
  padding:2px;
  &:hover{
      color:white;
  `;

export const H3 = styled.h3`
  color:white;
  
`;

export const Wrapper = styled.div`
  
    margin: 0 150px 0 150px;
    display:grid;
    grid-template-columns: 23% 20% 20% 37%;
    grid-column-gap: 20px;
    
@media screen and (max-width: 960px) {
  grid-template-columns: auto;
  margin: 0 50px 0 50px;
}
    
`;
export const ListContainer = styled.div`
   
    &:first-child{
      margin-left:10px;
    }
    
`;
export const Input = styled.input`
    padding:10px;
    background-color:#3a3a3a;
    border:none;
    &:focus{
      outline:none;
    }
    

`;
export const FooterBottom=styled.div`
background-color: #2A2A2A;
display:flex;
height:80px;
padding-left:150px;
align-items:center;
color:#b8b8b8;

@media screen and (max-width: 960px) {
  
 padding-left:50px;
 font-size: 14px;
}

`;


