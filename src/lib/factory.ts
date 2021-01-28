import { ISelectedRecipe } from '../components/RecipePicker/RecipePicker';
import { getRecipesForItem, Recipe, Recipes } from '../data/recipes';

export type StringKeyOf<T> = Extract<keyof T, string>;

export type RecipeStringKeys = StringKeyOf<Recipe>;

// eslint-disable-next-line import/prefer-default-export
export const calculateFactoryResults = (
  selectedRecipes: Array<ISelectedRecipe>
) => {
  const results: {
    [E in keyof RecipeStringKeys]?: ISelectedRecipe;
  } = selectedRecipes.reduce(
    (acc, selectedRecipe) => ({
      ...acc,
      [selectedRecipe.recipe]: selectedRecipe,
    }),
    {}
  );
  for (let i = 0; i < selectedRecipes.length; i += 1) {
    const recipeSelection = selectedRecipes[i];

    if (recipeSelection.recipe !== undefined) {
      const recipe = Recipes[recipeSelection.recipe];
      if (recipe !== undefined) {
        const recipeResults = calculateFactoryResults(
          recipe.ingredients.map(ingredient => ({
            item: ingredient.item,
            recipe: getRecipesForItem(ingredient.item)[0].id,
            itemsPerSecond:
              (ingredient.amount * recipeSelection.itemsPerSecond) /
              recipe.baseDuration /
              recipe.resultAmount,
          }))
        );

        for (const key in recipeResults) {
          if (recipeResults[key] !== undefined) {
            if (results[key] === undefined) {
              results[key] = recipeResults[key];
            } else if (results[key] !== undefined) {
              // @ts-ignore
              results[key].itemsPerSecond += recipeResults[key].itemsPerSecond;
            }
          }
        }
      }
    }
  }

  return results;
};
