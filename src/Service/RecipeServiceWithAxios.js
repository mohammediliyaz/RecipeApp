
import axios from "axios";

class RecipeSercive {
  data = [];
  authorData = [];
  setData(recipeData) {
    this.data = recipeData;
  }
  getData() {
    if (this.data.length !== 0) {
      console.log("data already exists");
    } else {
      console.log("data is not there,geting data");
      this.getAPi().then((e) => {
        console.log(e);
        this.data = e;
      });
    }

    return this.data;
  }
  getAuthorData() {
    return this.authorData;
  }
  async getAPi() {
    const url = "https://my-food-recipe.firebaseio.com/.json";
    const response = await axios.get(url);

    const ret = Object.values(response.data.RecipeList);
    return ret;
  }
}
export default new RecipeSercive();
