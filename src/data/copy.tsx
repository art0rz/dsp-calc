import { Items } from './items';

export const RecipeNames = {
  [Items.IRON_ORE]: 'Iron ore',
  [Items.IRON_PLATE]: 'Iron ingot',
  [Items.MAGNET]: 'Magnet',
  [Items.GEAR_WHEEL]: 'Gear',
  [Items.BELT_1]: 'Conveyor Belt MK.1',
  [Items.ASSEMBLER_1]: 'Assembling Machine MK.1',
};

// until we implement translations, we'll use this shim to reduce refactoring at a later date.
export const getRecipeName = (item: Items) => RecipeNames[item];
