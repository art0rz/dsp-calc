import { ISelectedRecipe } from '../components/RecipePicker/RecipePicker';
import { getPreferredRecipe, IRecipe, Recipe, Recipes } from '../data/recipes';
import { Item } from '../data/item';
import {
  BuildingCategory,
  Buildings,
  getPreferredBuilding,
} from '../data/buildings';
import { isResource } from '../data/resources';

export type StringKeyOf<T> = Extract<keyof T, string>;

export type RecipeStringKeys = StringKeyOf<Recipe>;

export interface IFactoryResultIngredient {
  item: Item;
  itemsPerMinute: number;
  category: BuildingCategory;
}

export interface IFactoryResultUsedIn {
  recipe: IRecipe;
  itemsPerMinute: number;
}

export interface IFactoryResult {
  outputItem: Item;
  recipe: Recipe;
  category: BuildingCategory;
  itemsPerMinute: number;
  ingredients: Array<IFactoryResultIngredient>;
}

export interface IFactoryResultGraph {
  outputItem: Item;
  recipe: Recipe;
  category?: BuildingCategory;
  itemsPerMinute: number;
  ingredients: Array<IFactoryResultGraph>;
  usedFor?: IFactoryResultGraph;
}

export interface IFactoryResultFlatGraph
  extends Omit<IFactoryResultGraph, 'usedFor'> {
  usedFor: Array<IFactoryResultGraph>;
}

// const getExistingResult = (needle: Item, haystack: Array<IFactoryResult>) => {
//   return haystack.find(h => h.outputItem === needle);
// };

export const factorySolver = (
  selectedRecipes: Array<ISelectedRecipe>,
  results: Array<IFactoryResultGraph> = []
): Array<IFactoryResultGraph> => {
  // solve ingredients in every selected recipe

  return [
    ...results,
    ...(selectedRecipes
      .filter(selection => Recipes[selection.recipe] !== undefined)
      .map<IFactoryResultGraph>(selection => {
        const recipe = Recipes[selection.recipe] as IRecipe;

        const res = {
          outputItem: selection.item,
          recipe: selection.recipe,
          category: Buildings[getPreferredBuilding(recipe.category)]?.category,
          itemsPerMinute: selection.itemsPerMinute,
          ingredients: factorySolver(
            recipe.ingredients
              .map<ISelectedRecipe | null>(ingredient => {
                if (isResource(ingredient.item) === false) {
                  return {
                    item: ingredient.item,
                    recipe: getPreferredRecipe(ingredient.item).id,
                    itemsPerMinute:
                      (ingredient.amount * selection.itemsPerMinute) /
                      recipe.baseDuration,
                  };
                }
                return null;
              })
              .filter(u => u !== null) as Array<ISelectedRecipe>
          ),
        };

        res.ingredients.map(ingredient => ({ ...ingredient, usedFor: res }));

        return res;
      }, results)
      .filter(u => u !== undefined) as Array<IFactoryResultGraph>),
  ];
};

export const flattenGraph = (
  graph: Array<IFactoryResultGraph>
): Array<IFactoryResultFlatGraph> => {
  // first generate a complete list of ingredients
  const ingredients = graph.reduce<Array<IFactoryResultFlatGraph>>(
    (acc, g) => [
      ...acc,
      ...flattenGraph(g.ingredients).map(i => ({ ...i, usedFor: [g] })),
    ],
    graph.map(g => ({ ...g, usedFor: [] }))
  );

  // then add up all the totals
  return ingredients.reduce<Array<IFactoryResultFlatGraph>>(
    (acc, ingredient) => {
      const existing = acc.find(l => l.outputItem === ingredient.outputItem);

      if (existing) {
        existing.itemsPerMinute += ingredient.itemsPerMinute;
        existing.usedFor.push(...ingredient.usedFor);
      } else {
        return [...acc, { ...ingredient }];
      }

      return [...acc];
    },
    []
  );
};
