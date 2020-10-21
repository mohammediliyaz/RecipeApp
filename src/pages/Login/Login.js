import React, { useState } from "react";
import { Div, Section, Input, LoginButtons, Button } from "./Styles";
import { InputPass } from "./Styles";
import img from "../../Assets/images/loginimage.jpeg";
import history from "../../history/History";

export default function Login() {
  const [hidden, setHidden] = useState(true);
  const handleDisplay = () => {
    setHidden(!hidden);
  };

  return (
    <Div>
      <div>
        <img src={img} style={{ width: "100%" }} />
      </div>
      <Section>
        <h1>Login</h1>
        <form>
          <h1>Email</h1>
          <Input type="text" placeholder="Email" />

          <h1>Password</h1>
          <Input type={hidden ? "password" : "text"} placeholder="Password" />
          <InputPass onClick={handleDisplay}>Show/Hide</InputPass>
        </form>
        <LoginButtons>
          <Button
            type="button"
            style={{ backgroundColor: "rgb(141, 198, 63)" }}
            onClick={() => history.push("/home")}
          >
            Login
          </Button>
          <Button type="button" onClick={() => history.push("/")}>
            Sign Up
          </Button>
        </LoginButtons>
      </Section>
    </Div>
  );
}
