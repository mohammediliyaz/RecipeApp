import React, { useState } from "react";
import { Button } from "../../Components/commonComponents/Button/Style";
import Footer from "../../Components/Footer/Footer";
import Navabar from "../../Components/Navbar/Navbar";
import { Div, Form, Input } from "./Styles";
import "../SubmitRecipe/styles.css";

function SubmitRecipe() {
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
    setdiscription(e.target.value);
  };
  const handlerating = (e) => {
    setrating(e.target.value);
  };
  const handlechef = (e) => {
    setchef(e.target.value);
  };
  const handlecalories = (e) => {
    setcalories(e.target.value);
  };
  const handleservings = (e) => {
    setservings(e.target.value);
  };
  const handlerecipeCategory = (e) => {
    setrecipeCategory(e.target.value);
  };
  const handlecookingTime = (e) => {
    setcookingTime(e.target.value);
  };
  const handlerecipeName = (e) => {
    setrecipeName(e.target.value);
  };
  const handleprepartionTime = (e) => {
    setpreparationTime(e.target.value);
  };
  const bordercolor = () => {};
  const handleButton = () => {
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

    info.every((e) => (e === "" ? alert(" field is empty") : true));
  };

  return (
    <div>
      <Navabar />
      <Div>
        <h1>Submit Recipe</h1>
      </Div>
      <Form>
        <label>
          Recipe Name <br></br>
          <Input
            id="recipeName"
            type="text"
            label="recipeName"
            value={recipeName}
            onChange={handlerecipeName}
          />
          <br></br>
        </label>
        <label>
          Preparation Time <br></br>
          <Input
            type="text"
            value={prepartionTime}
            onChange={handleprepartionTime}
          />
          <br></br>
        </label>
        <label>
          cooking Time <br></br>
          <Input type="text" value={cookingTime} onChange={handlecookingTime} />
          <br></br>
        </label>
        <label>
          Recipe Category <br></br>
          <Input
            type="text"
            value={recipeCategory}
            onChange={handlerecipeCategory}
          />
          <br></br>
        </label>
        <label>
          Servings <br></br>
          <Input type="text" value={servings} onChange={handleservings} />
          <br></br>
        </label>
        <label>
          Calories <br></br>
          <Input type="text" value={calories} onChange={handlecalories} />
          <br></br>
        </label>
        <label>
          Chef <br></br>
          <Input type="text" value={chef} onChange={handlechef} />
          <br></br>
        </label>
        <label>
          Ratings <br></br>
          <Input type="text" value={rating} onChange={handlerating} />
          <br></br>
        </label>
        <label>
          Discription <br></br>
          <textarea
            id="w3review"
            rows="10"
            cols="136"
            type="text-area"
            value={discription}
            onChange={handlediscription}
            style={{ padding: "10px", margin: "10px" }}
          />
          <br></br>
        </label>
      </Form>
      <Button
        style={{ margin: "2rem 0 2rem 10.5rem", width: "7rem" }}
        onClick={handleButton}
      >
        SUBMIT
      </Button>
      <Footer />
    </div>
  );
}

export default SubmitRecipe;
