import React, { useContext } from "react";
import {
  Div,
  About,
  Li,
  H3,
  Wrapper,
  ListContainer,
  Input,
  FooterBottom,
} from "../Footer/styles";
import { ThemechangeContext } from "../../App";
import { Button } from "../commonComponents/Button/Style";

export default function Footer() {
  const color = useContext(ThemechangeContext);

  return (
    <>
      <Div>
        <Wrapper>
          <About>
            <H3>About</H3>
            <p>
              Cras at ultrices erat, sed vulputate eros. Nunc at augue gravida
              est fermentum vulputate. Pellentesque et ipsum in dui malesuada
              tempus.
            </p>
          </About>
          <ListContainer>
            <H3>Archives</H3>

            <Li>
              <i className="fa fa-caret-right" /> June 2014
            </Li>
            <Li>
              <i className="fa fa-caret-right" /> July 2014
            </Li>
            <Li>
              <i className="fa fa-caret-right" /> August 2014
            </Li>
            <Li>
              <i className="fa fa-caret-right" /> September 2014
            </Li>
            <Li>
              <i className="fa fa-caret-right" /> November 2014
            </Li>
          </ListContainer>
          <ListContainer>
            <H3>Recipies</H3>

            <Li>
              <i className="fa fa-caret-right" /> Browse Recipes
            </Li>
            <Li>
              <i className="fa fa-caret-right" /> Recipe Page
            </Li>
            <Li>
              <i className="fa fa-caret-right" /> Submit Recipe
            </Li>
          </ListContainer>
          <About>
            <H3>Newsletter</H3>
            <p>
              Sign up to receive email updates on new product announcements,
              gift ideas, sales and more.
            </p>
            <div>
              <Input type="text" placeholder="mail@example.com"></Input>
              <Button type="button" style={{ backgroundColor: color }}>
                SUBSCRIBE
              </Button>
            </div>
          </About>
        </Wrapper>
      </Div>
      <FooterBottom>
        &copy; Copyright 2014 by Chow. All Rights Reserved.
      </FooterBottom>
    </>
  );
}
