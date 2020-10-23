import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Shrimps and Salsa',
      'Put some shrimps with salsa',
      'https://www.lifesambrosia.com/wp-content/uploads/Spicy-Grilled-Shrimp-Recipe-Photo-2-795x1200.jpg',
      [
        new Ingredient('Shrimp', 5),
        new Ingredient('Salsa', 5),
      ]
    ),
    new Recipe(
      'Pudim',
      'Its a mother fucker pudim',
      'https://www.receitas-sem-fronteiras.com/uploads/media/pudim-30.jpg?1396917115',
      [
        new Ingredient('Milk', 1),
        new Ingredient('Sugar', 1),
      ]
    ),
  ];

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
}
