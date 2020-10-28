import React, { useState } from "react";
import { Div, Section, Input, LoginButtons, Button, Img, H1 } from "./Styles";
import { InputPassLogin } from "./LoginStyles";
import img from "../../Assets/images/loginimage.jpeg";
import history from "../../history/History";
import axios from "axios";
export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [hidden, setHidden] = useState(true);
  const handleDisplay = () => {
    setHidden(!hidden);
  };

  const handleLogin = () => {
    const postData = {
      email: email,
      password: pass,
      returnSecureToken: true,
    };
    console.log("called");
    return axios
      .post(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBBTcBYXnaAmM1YEg6QLpggdBscZJXVJfk",
        postData
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          sessionStorage.setItem("key", res.data.localId);
          history.push("/home");
        }
      })
      .catch(() => alert("Not found"));
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };

  return (
    <Div>
      <Img src={img} />

      <Section>
        <H1>Login</H1>
        <form>
          <H1>Email</H1>
          <Input type="text" placeholder="Email" onChange={handleEmail} />

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
