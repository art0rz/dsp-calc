import { $enum } from 'ts-enum-util';
import { Item } from './item';
import { Recipe } from './recipes';
import { Building } from './buildings';
import { Belt } from './belts';

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

export const BuildingIcons: { [key in Building]?: string } = $enum(Building)
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

export const BeltIcon: { [key in Belt]?: string } = $enum(Belt)
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
