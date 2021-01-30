export interface IBuilding {
  id: Building;
  category: BuildingCategory;
  power: number;
  max: number;
}

export enum BuildingCategory {
  CRAFTING,
  SMELTING,
  CHEMICAL,
  REFINING,
  SCIENCE,
  COLLIDER,
}

export enum Building {
  ASSEMBLER_1,
  ASSEMBLER_2,
  ASSEMBLER_3,
  SMELTER,
  CHEMICAL_PLANT,
  OIL_REFINERY,
  MATRIX_LAB,
  HADRON_COLLIDER,
}

const buildingsList: Array<IBuilding> = [
  {
    id: Building.ASSEMBLER_1,
    category: BuildingCategory.CRAFTING,
    power: 0.27,
    max: 0.75,
  },
  {
    id: Building.ASSEMBLER_2,
    category: BuildingCategory.CRAFTING,
    power: 0.48,
    max: 1,
  },
  {
    id: Building.ASSEMBLER_3,
    category: BuildingCategory.CRAFTING,
    power: 0.78,
    max: 1.5,
  },
  {
    id: Building.SMELTER,
    category: BuildingCategory.SMELTING,
    power: 0.36,
    max: 1,
  },
  {
    id: Building.CHEMICAL_PLANT,
    category: BuildingCategory.CHEMICAL,
    power: 0.78,
    max: 1,
  },
  {
    id: Building.OIL_REFINERY,
    category: BuildingCategory.REFINING,
    power: 0.96,
    max: 1,
  },
  {
    id: Building.MATRIX_LAB,
    category: BuildingCategory.SCIENCE,
    power: 0.48,
    max: 1,
  },
  {
    id: Building.HADRON_COLLIDER,
    category: BuildingCategory.COLLIDER,
    power: 12,
    max: 1,
  },
];

export const getBuildingsForCategory = (
  category: BuildingCategory
): Array<IBuilding> => buildingsList.filter(b => b.category === category);

// TODO: use user preferences

export const getPreferredBuilding = (category: BuildingCategory): Building =>
  getBuildingsForCategory(category)[0].id;

export const Buildings: {
  [key in Building]?: IBuilding;
} = buildingsList.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
