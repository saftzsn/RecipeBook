import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
/** recipes component*/
export class RecipesComponent implements OnInit {
  /** recipes ctor */

  constructor() {

  }

  ngOnInit() {
  }
}
