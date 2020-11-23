import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Shrimps and Salsa',
  //     'Put some shrimps with salsa',
  //     'https://www.lifesambrosia.com/wp-content/uploads/Spicy-Grilled-Shrimp-Recipe-Photo-2-795x1200.jpg',
  //     [
  //       new Ingredient('Shrimp', 5),
  //       new Ingredient('Salsa', 5),
  //     ]
  //   ),
  //   new Recipe(
  //     'Pudim',
  //     'Its a mother fucker pudim',
  //     'https://www.receitas-sem-fronteiras.com/uploads/media/pudim-30.jpg?1396917115',
  //     [
  //       new Ingredient('Milk', 1),
  //       new Ingredient('Sugar', 1),
  //     ]
  //   ),
  // ];
  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
