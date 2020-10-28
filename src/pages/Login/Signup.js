import React, { useState } from "react";
import {
  Div,
  Section,
  Input,
  LoginButtons,
  Button,
  InputPassone,
  InputPasstwo,
  Img,
  H1,
  Span,
} from "./Styles";
import history from "../../history/History";
import img from "../../Assets/images/loginimage.jpeg";
import axios from "axios";

export default function Signup() {
  const [emailval, setEmailVal] = useState(false);
  const [passval, setPassVal] = useState(false);
  const [repeatpassval, setRepeatPassVal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatPassword] = useState("");
  const [hiddenone, setHiddenone] = useState(true);
  const [hiddentwo, setHiddentwo] = useState(true);

  const handleDisplaypasswordone = () => {
    setHiddenone(!hiddenone);
  };
  const handleDisplaypasswordtwo = () => {
    setHiddentwo(!hiddentwo);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);

    setEmailVal(false);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPassVal(false);
  };
  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
    setRepeatPassVal(false);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const emailvalidate = () => {
    if (email !== "undefined") {
      if (!(email.includes("@") && email.includes("."))) {
        setEmailVal(true);
      }
    }
  };
  const passvalidate = () => {
    if (password !== "undefined") {
      let regularExpression = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/;
      if (!regularExpression.test(password)) {
        setPassVal(true);
      }
    }
  };
  const repeatpassvalidate = () => {
    if (password !== repeatpassword) {
      setRepeatPassVal(true);
    }
  };

  const submit = () => {
    // const info = [name, username, email, password];
    // info.every((e) => (e === "" ? alert(" field is empty") : true));

    //password validation

    const postData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    axios
      .post(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBBTcBYXnaAmM1YEg6QLpggdBscZJXVJfk",
        postData
      )
      .then((res) => {
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
          {emailval && <span>name required</span>}
          <H1>Email</H1>
          <Input
            type="text"
            placeholder="Email"
            onChange={handleEmail}
            onBlur={emailvalidate}
          />
          {emailval && <Span>badly formatted</Span>}
          <H1>UserName</H1>
          <Input type="text" placeholder="UserName" onChange={handleUsername} />
          <H1>Password</H1>
          <Input
            type={hiddenone ? "password" : "text"}
            placeholder="Password"
            onChange={handlePassword}
            onBlur={passvalidate}
          />
          {passval && (
            <Span>mininum 6 character with number and special character</Span>
          )}
          <H1>Repeat Password</H1>
          <Input
            type={hiddentwo ? "password" : "text"}
            onChange={handleRepeatPassword}
            onBlur={repeatpassvalidate}
          />

          <InputPassone onClick={handleDisplaypasswordone}>
            Show/Hide
          </InputPassone>
          <InputPasstwo onClick={handleDisplaypasswordtwo}>
            Show/Hide
          </InputPasstwo>
          {repeatpassval && <Span>password did not match</Span>}
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
