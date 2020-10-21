class Recipe {
  constructor(data) {
    this.recipeName = data.recipeName;
    this.preparationTime = data.preparationTime;
    this.cookingTime = data.cookingTime;
    this.recipeCategory = data.recipeCategory;
    this.servings = data.servings;
    this.calories = data.calories;
    this.chef = data.chef;
    this.rating = data.rating;
    this.description = data.description;
  }
}
// export default class RecipeSercive {
//   static data = [];
//   static setData(recipeData) {
//     this.data = recipeData;
//   }
//   static getData() {
//     const url = "https://my-food-recipe.firebaseio.com/.json";
//     const data = fetch(url)
//       .then((response) => {
//         console.log(response.json().bod);

//         return response.json();
//       })
//       .then((res) => console.log(res));
//     return [];
//   }
//   static getAuthorData() {
//     return this.authorData;
//   }
// }
