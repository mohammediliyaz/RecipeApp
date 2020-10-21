import img1 from "../Assets/images/sliderA_01.jpg";
import img2 from "../Assets/images/sliderA_02.jpg";
import img3 from "../Assets/images/sliderA_03.jpg";
import img4 from "../Assets/images/sliderA_04.jpg";
import authorImage from "../Assets/images/author-photo.png";

export default class RecipeSercive {
  static data = [
    {
      image: img1,
      recipeName: "Mexican Grilled Corn Recipe",
      prepatrionTime: "60",
      cookingTime: "30",
      recipeCategory: "Baking",
      servings: 5,
      calories: 100,
      chef: "SANDRA FORTIN",
      ratings: "5star",
      discription: " wait for a while..",
    },
    {
      image: img2,
      recipeName: "Farmhouse Vegetable And Barley Soup",
      prepatrionTime: "60",
      cookingTime: "30",
      recipeCategory: "Soup",
      servings: 5,
      calories: 100,
      chef: "SANDRA FORTIN",
      ratings: "5star",
      discription: " wait for a while..",
    },
    {
      image: img3,
      recipeName: "Roast Chicken With Lemon Gravy",
      prepatrionTime: "60",
      cookingTime: "30",
      recipeCategory: "curry",
      servings: 5,
      calories: 100,
      chef: "SANDRA FORTIN",
      ratings: "5star",
      discription: " wait for a while..",
    },
    {
      image: img4,
      recipeName: "Avocado Melon Salad With Lime Vinaigrette",
      prepatrionTime: "60",
      cookingTime: "30",
      recipeCategory: "Salad",
      servings: 5,
      calories: 100,
      chef: "SANDRA FORTIN",
      ratings: "5star",
      discription: " wait for a while..",
    },
    {
      recipeName: "Chunky Beef Stew",
      prepatrionTime: "80",
      cookingTime: "30",
      recipeCategory: "beef",
      servings: 5,
      calories: 100,
      chef: "SANDRA FORTIN",
      ratings: "5star",
      discription: " wait for a while..",
    },
  ];
  static authorData = [
    {
      image: authorImage,
      authorName: "Sandra Fortin",
      mail: "Sandra@chow.com",
      authorDescription:
        "I'm Sandra and this is where I share my stuff. I am madly in love with food. You will find a balance of healthy recipes, comfort food and indulgent desserts.",
    },
  ];

  static setData(recipeData) {
    this.data = recipeData;
  }
  static getData() {
    return this.data;
  }
  static getAuthorData() {
    return this.authorData;
  }
}
