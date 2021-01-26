import {Items} from "./items";
import {$enum} from "ts-enum-util";

export interface IRecipe {
    id: Items;
    baseDuration: number;
    ingredients: Array<IIngredient>;
    resultAmount: number;
    factories: Array<Items>;
}

export interface IIngredient {
    item: Items;
    amount: number;
}

const array: Array<IRecipe> = [
    {
        id: Items.IRON_PLATE,
        baseDuration: 1,
        resultAmount: 1,
        factories: [Items.ASSEMBLER_1],
        ingredients: [
            {
                item: Items.IRON_ORE,
                amount: 1,
            },
        ],
    },
    {
        id: Items.MAGNET,
        baseDuration: 1.5,
        resultAmount: 1,
        factories: [Items.ASSEMBLER_1],
        ingredients: [
            {
                item: Items.IRON_ORE,
                amount: 1,
            },
        ]
    },
    {
        id: Items.GEAR_WHEEL,
        baseDuration: 1,
        resultAmount: 1,
        factories: [Items.ASSEMBLER_1],
        ingredients: [
            {
                item: Items.IRON_PLATE,
                amount: 1,
            },
        ]
    },
    {
        id: Items.BELT_1,
        baseDuration: 1,
        resultAmount: 3,
        factories: [Items.ASSEMBLER_1],
        ingredients: [
            {
                item: Items.IRON_PLATE,
                amount: 2,
            },
            {
                item: Items.GEAR_WHEEL,
                amount: 1,
            },
        ]
    }
];

export const RecipeIcons: { [key in Items]?: string } =
    $enum(Items).getEntries()
        .reduce((acc, [key, value]) => ({
            ...acc,
            [value]: require(`../icon/${key.replace(/_/g, '-').toLowerCase()}.png`).default,
        }), {});


export const Recipes: { [key in Items]?: IRecipe } =
    array.reduce((acc, recipe) =>
        ({...acc, [recipe.id]: recipe}), {});
