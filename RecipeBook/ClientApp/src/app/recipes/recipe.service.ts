import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient";


export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('a test recipe',
      'this is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fires', 20)
      ]),
    new Recipe('another test recipe',
      'this is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('French Fires', 12)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
