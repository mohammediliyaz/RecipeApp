import React, { useState, useEffect } from "react";
import { Button } from "../../Components/commonComponents/Button/Style";
import Footer from "../../Components/Footer/Footer";
import Navabar from "../../Components/Navbar/Navbar";
import { Div, Form, Input, TextArea, Span, H2 } from "./Styles";
import axios from "axios";

function SubmitRecipe() {
  // let recipeLength;
  const [showMsg, setShowMsg] = useState(1);

  const [recipeName, setrecipeName] = useState("");
  const [prepartionTime, setpreparationTime] = useState("");
  const [cookingTime, setcookingTime] = useState("");
  const [recipeCategory, setrecipeCategory] = useState("");
  const [servings, setservings] = useState("");
  const [calories, setcalories] = useState("");
  const [chef, setchef] = useState("");
  const [rating, setrating] = useState("");
  const [discription, setdiscription] = useState("");

  const handlediscription = (e) => {
    setShowMsg(1);
    setdiscription(e.target.value);
  };
  const handlerating = (e) => {
    setShowMsg(1);
    setrating(e.target.value);
  };
  const handlechef = (e) => {
    setShowMsg(1);
    setchef(e.target.value);
  };
  const handlecalories = (e) => {
    setShowMsg(1);
    setcalories(e.target.value);
  };
  const handleservings = (e) => {
    setShowMsg(1);
    setservings(e.target.value);
  };
  const handlerecipeCategory = (e) => {
    setShowMsg(1);
    setrecipeCategory(e.target.value);
  };
  const handlecookingTime = (e) => {
    setShowMsg(1);
    setcookingTime(e.target.value);
  };
  const handlerecipeName = (e) => {
    setShowMsg(1);
    setrecipeName(e.target.value);
  };
  const handleprepartionTime = (e) => {
    setpreparationTime(e.target.value);
  };

  const validation = () => {
    const info = [
      recipeName,
      prepartionTime,
      cookingTime,
      recipeCategory,
      servings,
      calories,
      chef,
      rating,
      discription,
    ];
    let validate = false;
    info.every((e) => (e === "" ? setShowMsg(3) : (validate = true)));
    return validate;
  };

  const handleButton = () => {
    if (validation()) {
      const postData = {
        bannerimage: "sliderA_02",
        calories: calories,
        chef: chef,
        cooking: cookingTime,
        discription: discription,
        image: "recipeThumb-01",
        min: prepartionTime,
        name: recipeName,
        rating: rating,
        servings: servings,
        tag: recipeCategory,
      };
      return axios
        .post(
          "https://foodrecipejson.firebaseio.com/RecipeList/.json",
          postData
        )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setShowMsg(2);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <Navabar />
      <Div>
        <h1 style={{ color: "#606060", fontFamily: "Arvo" }}>Submit Recipe</h1>
      </Div>
      <Form>
        <H2>Recipe Name </H2>

        <Input
          id="recipeName"
          type="text"
          label="recipeName"
          value={recipeName}
          onChange={handlerecipeName}
        />
        <br></br>

        <H2>Preparation Time </H2>
        <Input
          type="text"
          value={prepartionTime}
          onChange={handleprepartionTime}
        />
        <br></br>

        <H2>cooking Time</H2>
        <Input type="text" value={cookingTime} onChange={handlecookingTime} />
        <br></br>

        <H2>Recipe Category</H2>
        <Input
          type="text"
          value={recipeCategory}
          onChange={handlerecipeCategory}
        />
        <br></br>

        <H2>Servings</H2>
        <Input type="text" value={servings} onChange={handleservings} />
        <br></br>

        <H2>Calories</H2>
        <Input type="text" value={calories} onChange={handlecalories} />
        <br></br>

        <H2>Chef </H2>
        <Input type="text" value={chef} onChange={handlechef} />
        <br></br>

        <H2>Ratings</H2>
        <Input type="text" value={rating} onChange={handlerating} />
        <br></br>

        <H2>Discription</H2>
        <TextArea
          rows="10"
          cols="136"
          type="text-area"
          value={discription}
          onChange={handlediscription}
        />
        <br></br>
      </Form>
      <div style={{ display: "inline" }}>
        <Button
          style={{ margin: "2rem 0 2rem 10.5rem", width: "7rem" }}
          onClick={handleButton}
        >
          SUBMIT
        </Button>
        {showMsg === 3 && <Span>feild is empty</Span>}
        {showMsg === 2 && (
          <Span style={{ color: "green" }}>Submitted successfully!!!</Span>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SubmitRecipe;
