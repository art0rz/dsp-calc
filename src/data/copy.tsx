import { Item } from './item';
import { Recipe } from './recipes';

export const RecipeNames = {
  [Recipe.IRON_ORE]: 'Iron ore',
  [Recipe.IRON_PLATE]: 'Iron ingot',
  [Recipe.IRON_PLATE_2]: 'Iron ingot LV2',
  [Recipe.MAGNET]: 'Magnet',
  [Recipe.GEAR_WHEEL]: 'Gear',
  [Recipe.BELT_1]: 'Conveyor Belt MK.1',
  [Recipe.ASSEMBLER_1]: 'Assembling Machine MK.1',
};

export const ItemNames = {
  [Item.IRON_ORE]: 'Iron ore',
  [Item.IRON_PLATE]: 'Iron ingot',
  [Item.MAGNET]: 'Magnet',
  [Item.GEAR_WHEEL]: 'Gear',
  [Item.BELT_1]: 'Conveyor Belt MK.1',
  [Item.ASSEMBLER_1]: 'Assembling Machine MK.1',
};

// until we implement translations, we'll use this shim to reduce refactoring at a later date.
export const getItemName = (item: Item) => ItemNames[item];
export const getRecipeName = (recipe: Recipe) => RecipeNames[recipe];
