import { Item } from './item';
import { MiningCategory } from './miners';

export interface IResource {
  id: Item;
  category: MiningCategory;
}

export enum Resource {
  IRON_ORE,
  COPPER_ORE,
  COAL_ORE,
  STONE_ORE,
  SILICIUM_ORE,
  TITANIUM_ORE,
  DIAMOND_ORE,
  OIL,
  FRACTAL_SILICA,
  GRATING_ORE,
  BAMBOO_CRYSTAL,
  MONO_MAG_ORE,
  GAS_HYDRATE,
  WATER,
  PHOTON,
}

const resourcesList: Array<IResource> = [
  {
    id: Item.IRON_ORE,
    category: MiningCategory.MINERAL,
  },
  {
    id: Item.COPPER_ORE,
    category: MiningCategory.MINERAL,
  },
  {
    id: Item.COAL_ORE,
    category: MiningCategory.MINERAL,
  },
  {
    id: Item.STONE_ORE,
    category: MiningCategory.MINERAL,
  },
  {
    id: Item.SILICIUM_ORE,
    category: MiningCategory.MINERAL,
  },
  {
    id: Item.TITANIUM_ORE,
    category: MiningCategory.MINERAL,
  },
  {
    id: Item.DIAMOND_ORE,
    category: MiningCategory.MINERAL,
  },
  {
    id: Item.OIL,
    category: MiningCategory.OIL,
  },
  {
    id: Item.FRACTAL_SILICA,
    category: MiningCategory.MINERAL,
  },
  {
    id: Item.GRATING_ORE,
    category: MiningCategory.MINERAL,
  },
  {
    id: Item.BAMBOO_CRYSTAL,
    category: MiningCategory.MINERAL,
  },
  {
    id: Item.MONO_MAG_ORE,
    category: MiningCategory.MINERAL,
  },
  {
    id: Item.GAS_HYDRATE,
    category: MiningCategory.MINERAL,
  },
  {
    id: Item.WATER,
    category: MiningCategory.WATER,
  },
  {
    id: Item.PHOTON,
    category: MiningCategory.DYSON,
  },
];

export const Resources: {
  [key in Resource]?: IResource;
} = resourcesList.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

export const isResource = (item: Item) =>
  resourcesList.find(r => r.id === item) !== undefined;
