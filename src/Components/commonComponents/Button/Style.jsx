import styled from "styled-components";


export const Button = styled.button`
padding:10px;
color:white;
background-color:#8dc63f;
transition: all 0.2s ease-in-out;
border:none;
&:focus{
    outline:none;
}
&:hover{
    cursor:pointer;
    background-color:lightgray;
}
`