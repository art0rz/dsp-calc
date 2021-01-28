import { ISelectedRecipe } from '../components/RecipePicker/RecipePicker';
import { getRecipesForItem, IRecipe, Recipe, Recipes } from '../data/recipes';
import { Item } from '../data/item';

export type StringKeyOf<T> = Extract<keyof T, string>;

export type RecipeStringKeys = StringKeyOf<Recipe>;

interface IFactoryResultIngredient {
  item: Item;
  itemsPerSecond: number;
  factory: Item;
}

interface IFactoryResultUsedIn {
  recipe: IRecipe;
  itemsPerSecond: number;
}

interface IFactoryResult {
  outputItem: Item;
  recipe: Recipe;
  factory: Item;
  itemsPerSecond: number;
  ingredients: Array<IFactoryResultIngredient>;
  usedIn: Array<IFactoryResultUsedIn>;
}

const getExistingResult = (needle: Item, haystack: Array<IFactoryResult>) => {
  return haystack.find(h => h.outputItem === needle);
};

export const calculateFactoryResults2 = (
  selectedRecipes: Array<ISelectedRecipe>,
  results: Array<IFactoryResult> = []
): Array<IFactoryResult> => {
  for (const selection of selectedRecipes) {
    const existing = getExistingResult(selection.item, results);
    const recipe = Recipes[selection.recipe] as IRecipe;

    calculateFactoryResults2(
      recipe.ingredients.map(ingredient => ({
        item: ingredient.item,
        recipe: getRecipesForItem(ingredient.item)[0].id,
        itemsPerSecond: ingredient.amount * selection.itemsPerSecond,
      })),
      results
    );

    if (existing === undefined) {
      results.push({
        outputItem: selection.item,
        recipe: selection.recipe,
        factory: recipe.factory,
        itemsPerSecond: selection.itemsPerSecond,
        ingredients: recipe.ingredients.map(i => ({
          item: i.item,
          factory: getRecipesForItem(i.item)[0].factory,
          itemsPerSecond: i.amount * selection.itemsPerSecond,
        })),
        usedIn: [
          {
            recipe: Recipes[selection.recipe] as IRecipe,
            itemsPerSecond: selection.itemsPerSecond,
          },
        ],
      });
    } else {
      existing.itemsPerSecond += selection.itemsPerSecond;

      for (const ingredient of recipe.ingredients) {
        const existingIngredient = existing.ingredients.find(
          i => i.item === ingredient.item
        ) as IFactoryResultIngredient;

        existingIngredient.itemsPerSecond +=
          ingredient.amount * selection.itemsPerSecond;
      }
    }
  }

  return results;
};

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

/*
  {
 */
