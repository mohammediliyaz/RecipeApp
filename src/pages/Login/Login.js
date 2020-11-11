import React, { useState } from "react";
import { Div, Section, Input, LoginButtons, Button, Img, H1 } from "./Styles";
import { InputPassLogin } from "./LoginStyles";
import img from "../../Assets/images/loginimage.jpeg";
import history from "../../history/History";
// import axios from "axios";
import { useDispatch } from "react-redux";

export default function Login() {
  // let uniqueid;
  const [email, setEmail] = useState("");
  // const [error, setError] = useState(false);
  const [pass, setPass] = useState("");
  const [hidden, setHidden] = useState(true);

  // const tokenid = useSelector((state) => state.tokenid);
  const dispatch = useDispatch();

  const handleDisplay = () => {
    setHidden(!hidden);
  };

  const handleLogin = () => {
    const postData = {
      email: email,
      password: pass,
      returnSecureToken: true,
    };
    const url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBBTcBYXnaAmM1YEg6QLpggdBscZJXVJfk";

    dispatch({ type: "login", payload: postData, url: url });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    // setError(false);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
    // setError(false);
  };

  return (
    <Div>
      <Img src={img} />

      <Section>
        <H1>Login</H1>
        <form>
          {/* {error && <Span>Email or passoword not valid</Span>} */}

          <H1>Email</H1>
          <Input
            type="email"
            placeholder="Email"
            id="email"
            autoComplete="on"
            onChange={handleEmail}
          />

          <H1>Password</H1>
          <Input
            type={hidden ? "password" : "text"}
            placeholder="Password"
            onChange={handlePass}
          />
          <InputPassLogin onClick={handleDisplay}>Show/Hide</InputPassLogin>
        </form>
        <LoginButtons>
          <Button
            type="button"
            style={{ backgroundColor: "rgb(141, 198, 63)" }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button type="button" onClick={() => history.push("/Signup")}>
            Sign Up
          </Button>
        </LoginButtons>
      </Section>
    </Div>
  );
}
