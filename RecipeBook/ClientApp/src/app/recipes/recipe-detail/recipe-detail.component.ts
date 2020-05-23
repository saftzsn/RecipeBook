import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
/** recipe-detail component*/
export class RecipeDetailComponent implements OnInit {
  /** recipe-detail ctor */
  recipe: Recipe;
  id: number;
  constructor(private slService: ShoppingListService,
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']; //+ is for casting string to number
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  addToShoppingList() {
    this.slService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    //the commented line works fine
    //this.router.navigate(['../', this.id,'edit'], { relativeTo: this.route });
  }
}
