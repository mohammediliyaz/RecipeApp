import React, { useState, useEffect } from "react";
import { Div, Section, Input, LoginButtons, Button, Img } from "./Styles";
import { InputPass } from "./Styles";
import img from "../../Assets/images/loginimage.jpeg";
import history from "../../history/History";
import axios from "axios";
export default function Login() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [hidden, setHidden] = useState(true);
  const handleDisplay = () => {
    setHidden(!hidden);
  };

  useEffect(() => {
    axios.get(`https://my-food-recipe.firebaseio.com/.json`).then((res) => {
      const v = Object.values(res.data.Users);
      setData(v);
    });
  }, []);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  const z = data.map(() => {
    const v = Object.entries(data);
    console.log(v);
  });
  const handleLogin = () => {
    const found = data.find((element) => element.email === email);
    found ? gotoHOme() : alert("email not found");
  };
  const gotoHOme = () => history.push("/home");
  return (
    <Div>
      <Img src={img} />

      <Section>
        <h1>Login</h1>
        <form>
          <h1>Email</h1>
          <Input type="text" placeholder="Email" onChange={handleEmail} />

          <h1>Password</h1>
          <Input
            type={hidden ? "password" : "text"}
            placeholder="Password"
            onChange={handlePass}
          />
          <InputPass onClick={handleDisplay}>Show/Hide</InputPass>
        </form>
        <LoginButtons>
          <Button
            type="button"
            style={{ backgroundColor: "rgb(141, 198, 63)" }}
            onClick={handleLogin}
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
