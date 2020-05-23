import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
/** shopping-list component*/
export class ShoppingListComponent implements OnInit, OnDestroy {
  /** shopping-list ctor */
  ingredients: Ingredient[];
  private ingredientChangedSubscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientChangedSubscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy() {
    this.ingredientChangedSubscription.unsubscribe();
  }
}
