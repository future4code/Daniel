import { Recipe } from '../entities/Recipe';

export interface RecipeGateway{
    insertRecipe(recipe: Recipe): Promise<void>;
}
