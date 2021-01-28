import { $enum } from 'ts-enum-util';
import { Item } from './item';

// eslint-disable-next-line no-shadow
export enum Recipe {
  IRON_ORE,
  IRON_PLATE,
  IRON_PLATE_2,
  MAGNET,
  GEAR_WHEEL,
  BELT_1,
  ASSEMBLER_1,
}

export interface IRecipe {
  id: Recipe;
  baseDuration: number;
  ingredients: Array<IIngredient>;
  resultAmount: number;
  factory: Item;
  products: Array<IRecipeProduct>;
}

export interface IRecipeProduct {
  item: Item;
  amount: number;
}

export interface IIngredient {
  item: Item;
  amount: number;
}

const recipeList: Array<IRecipe> = [
  {
    id: Recipe.IRON_ORE,
    baseDuration: 1,
    resultAmount: 1,
    factory: Item.MINING_DRILL,
    ingredients: [],
    products: [{ item: Item.IRON_ORE, amount: 1 }],
  },
  {
    id: Recipe.IRON_PLATE,
    baseDuration: 1,
    resultAmount: 1,
    factory: Item.SMELTER,
    ingredients: [
      {
        item: Item.IRON_ORE,
        amount: 1,
      },
    ],
    products: [{ item: Item.IRON_PLATE, amount: 1 }],
  },
  {
    id: Recipe.IRON_PLATE_2,
    baseDuration: 1,
    resultAmount: 1,
    factory: Item.SMELTER,
    ingredients: [
      {
        item: Item.IRON_ORE,
        amount: 1,
      },
    ],
    products: [{ item: Item.IRON_PLATE, amount: 1 }],
  },
  {
    id: Recipe.MAGNET,
    baseDuration: 1.5,
    resultAmount: 1,
    factory: Item.SMELTER,
    ingredients: [
      {
        item: Item.IRON_ORE,
        amount: 1,
      },
    ],
    products: [{ item: Item.MAGNET, amount: 1 }],
  },
  {
    id: Recipe.GEAR_WHEEL,
    baseDuration: 1,
    resultAmount: 1,
    factory: Item.ASSEMBLER_1,
    ingredients: [
      {
        item: Item.IRON_PLATE,
        amount: 1,
      },
    ],
    products: [{ item: Item.GEAR_WHEEL, amount: 1 }],
  },
  {
    id: Recipe.BELT_1,
    baseDuration: 1,
    resultAmount: 3,
    factory: Item.ASSEMBLER_1,
    ingredients: [
      {
        item: Item.IRON_PLATE,
        amount: 2,
      },
      {
        item: Item.GEAR_WHEEL,
        amount: 1,
      },
    ],
    products: [{ item: Item.BELT_1, amount: 1 }],
  },
];

export const RecipeIcons: { [key in Recipe]?: string } = $enum(Recipe)
  .getEntries()
  .reduce(
    (acc, [key, value]) => ({
      ...acc,
      // eslint-disable-next-line import/no-dynamic-require,global-require
      [value]: require(`../icon/${key.replace(/_/g, '-').toLowerCase()}.png`)
        .default,
    }),
    {}
  );

export const ItemIcons: { [key in Item]?: string } = $enum(Item)
  .getEntries()
  .reduce(
    (acc, [key, value]) => ({
      ...acc,
      // eslint-disable-next-line import/no-dynamic-require,global-require
      [value]: require(`../icon/${key.replace(/_/g, '-').toLowerCase()}.png`)
        .default,
    }),
    {}
  );

export const Recipes: { [key in Recipe]?: IRecipe } = recipeList.reduce(
  (acc, recipe) => ({ ...acc, [recipe.id]: recipe }),
  {}
);

export const getRecipesForItem = (item: Item): Array<IRecipe> => {
  return recipeList.filter(
    recipe => recipe.products.filter(product => product.item === item).length
  );
};
