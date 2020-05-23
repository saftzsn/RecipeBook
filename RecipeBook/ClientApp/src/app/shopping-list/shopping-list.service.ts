import { Ingredient } from '../shared/ingredient';
import { Subject } from 'rxjs/Subject';


export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ];

  getIngredients() {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    //if we just push the item and write
    //this.ingredients = this.shoppingListService.getIngredients();
    //into shopping list component, it perfectly works.
    //but we need to user observables and subsribe then
    //and unsubscribe when finished. that will improve scalability.
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    for (let ingredient of ingredients) {
      this.ingredients.push(ingredient);
      //same thing goes for here. 
      this.ingredientsChanged.next(this.ingredients.slice());
    }


  }
}
