import React, { useState } from "react";
import { Div, Section, Input, LoginButtons, Button, InputPass } from "./Styles";
import history from "../../history/History";
import img from "../../Assets/images/loginimage.jpeg";

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
      index: password,
      name: name,
      userName: username,
    };
    console.log(postData);
  };
  // useEffect(() => {
  //   axios.post(`https://my-food-recipe.firebaseio.com/.json`,data).then((postData) => {
  //     console.log(postData)
  //   });
  // }, []);

  return (
    <Div>
      <div>
        <img src={img} style={{ width: "100%", height: "100%" }} />
      </div>
      <Section>
        <h1>Signup</h1>
        <form>
          <h1>Name</h1>
          <Input type="text" placeholder="Name" onChange={handleName} />
          <h1>Email</h1>
          <Input type="text" placeholder="Email" onChange={handleEmail} />
          <h1>UserName</h1>
          <Input type="text" placeholder="UserName" onChange={handleUsername} />
          <h1>Password</h1>
          <Input
            type={hidden ? "password" : "text"}
            placeholder="Password"
            onChange={handlePassword}
          />
          <h1>Repeat Password</h1>
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
          <Button type="button" onClick={() => history.push("/login")}>
            Sign In
          </Button>
        </LoginButtons>
      </Section>
    </Div>
  );
}
