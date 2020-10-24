import React, { useState } from "react";
import {
  Div,
  Section,
  Input,
  LoginButtons,
  Button,
  InputPass,
  Img,
  H1,
} from "./Styles";
import history from "../../history/History";
import img from "../../Assets/images/loginimage.jpeg";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatPassword] = useState("");
  const [hidden, setHidden] = useState(true);

  const handleDisplay = () => {
    setHidden(!hidden);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const submit = () => {
    const info = [name, username, email, password];
    info.every((e) => (e === "" ? alert(" field is empty") : true));

    //Email validation
    if (email !== "undefined") {
      if (email.includes("@") && email.includes(".")) {
        console.log("email is correct");
      } else {
        alert("email is not correct");
      }
    }

    //password validation
    if (password !== "undefined") {
      let regularExpression = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/;
      if (!regularExpression.test(password)) {
        alert(
          "password should contain min 6 characters atleast one number and one special character "
        );
      }
    }
    if (password !== repeatpassword) {
      alert("passwords does not match");
    }

    const postData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    console.log(postData);

    axios
      .post(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBBTcBYXnaAmM1YEg6QLpggdBscZJXVJfk",
        postData
      )
      .then((res) => {
        console.log("signup ", res);
        if (res.status === 200) {
          history.push("/");
        } else {
          alert("Not success");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Div>
      <Img src={img} />
      <Section>
        <H1>Signup</H1>
        <form>
          <H1>Name</H1>
          <Input type="text" placeholder="Name" onChange={handleName} />
          <H1>Email</H1>
          <Input type="text" placeholder="Email" onChange={handleEmail} />
          <H1>UserName</H1>
          <Input type="text" placeholder="UserName" onChange={handleUsername} />
          <H1>Password</H1>
          <Input
            type={hidden ? "password" : "text"}
            placeholder="Password"
            onChange={handlePassword}
          />
          <H1>Repeat Password</H1>
          <Input
            type={hidden ? "password" : "text"}
            onChange={handleRepeatPassword}
          />
          <InputPass onClick={handleDisplay}>Show/Hide</InputPass>
        </form>
        <LoginButtons>
          <Button
            type="button"
            style={{ backgroundColor: "rgb(141, 198, 63)" }}
            onClick={submit}
          >
            Sign Up
          </Button>
          <Button type="button" onClick={() => history.push("/")}>
            Sign In
          </Button>
        </LoginButtons>
      </Section>
    </Div>
  );
}
