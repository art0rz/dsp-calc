import { Item } from './item';
import { BuildingCategory } from './buildings';

export interface IRecipe {
  id: Recipe;
  baseDuration: number;
  ingredients: Array<IIngredient>;
  category: BuildingCategory;
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

export enum Recipe {
  IRON_INGOT,
  COPPER_INGOT,
  STEEL_INGOT,
  GEAR_WHEEL,
  FUSION_CAPACITOR,
  ANTIMATTER_ENERGY_FUEL,
  ALT_NANOTUBE,
  NANOTUBE,
  CASIMIR_CRYSTAL,
  ALT_CASIMIR_CRYSTAL,
  CIRCUIT_BOARD,
  SILICIUM_HIGH_PURITY,
  ALT_SILICIUM_HIGH_PURITY,
  DEUTERIUM_ENERGY_FUEL,
  DIAMOND,
  ALT_DIAMOND,
  DYSON_SPHERE_COMPONENT,
  MAG_TURBINE,
  ELECTRIC_MOTOR,
  GRAPHITE,
  TERRAIN_TOOL,
  FRAME_MATERIAL,
  GLASS,
  GRAVITY_LENS,
  SILICIUM_SINGLE_CRYSTAL,
  HYDROGEN_ENERGY_FUEL,
  LOGISTIC_DRONE,
  LOGISTIC_VESSEL,
  MAGNET,
  MAGNETISM_WIRE,
  DEUTERIUM,
  MICRO_COMPONENT,
  CRYSTAL_RUBBER,
  ALT_CRYSTAL_RUBBER,
  PARTICLE_WIDE_BAND,
  PARTICAL_CAPACITOR,
  ALT_PARTICAL_CAPACITOR,
  PHOTO_SHIFTER,
  ALT_PHOTO_SHIFTER,
  PLANE_FILTER,
  PLASMA_GENERATOR,
  REFINED_OIL,
  HYDROGEN,
  PLASTIC,
  PRISM,
  PROCESSOR,
  QUANTUM_PROCESSOR,
  ION_THRUSTER,
  ALT_GRAPHENE,
  GRAPHENE,
  ROCKET,
  SOLAR_COLLECTOR,
  ALT_SPACE_WARPER,
  SPACE_WARPER,
  STONE_BRICK,
  STRANGE_MATTER_GENERATOR,
  SULPHURIC_ACID,
  HYPER_MAGNETISM_RING,
  FUEL_THRUSTER,
  TITANIUM_ALLOY,
  TITAN_CRYSTAL,
  TITAN_GLASS,
  TITANIUM_PLATE,
  T_MATRIX,
}
const recipeList: Array<IRecipe> = [
  {
    id: Recipe.IRON_INGOT,
    baseDuration: 1,
    category: BuildingCategory.SMELTING,
    ingredients: [{ item: Item.IRON_ORE, amount: 1 }],
    products: [{ item: Item.IRON_INGOT, amount: 1 }],
  },
  {
    id: Recipe.COPPER_INGOT,
    baseDuration: 1,
    category: BuildingCategory.SMELTING,
    ingredients: [{ item: Item.COPPER_ORE, amount: 1 }],
    products: [{ item: Item.COPPER_INGOT, amount: 1 }],
  },
  {
    id: Recipe.STEEL_INGOT,
    baseDuration: 3,
    category: BuildingCategory.SMELTING,
    ingredients: [{ item: Item.IRON_INGOT, amount: 1 }],
    products: [{ item: Item.STEEL_INGOT, amount: 1 }],
  },
  {
    id: Recipe.GEAR_WHEEL,
    baseDuration: 1,
    category: BuildingCategory.CRAFTING,
    ingredients: [{ item: Item.IRON_INGOT, amount: 1 }],
    products: [{ item: Item.GEAR_WHEEL, amount: 1 }],
  },
  {
    id: Recipe.FUSION_CAPACITOR,
    baseDuration: 20,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.PROCESSOR, amount: 1 },
      { item: Item.PARTICAL_CAPACITOR, amount: 1 },
    ],
    products: [{ item: Item.FUSION_CAPACITOR, amount: 1 }],
  },
  {
    id: Recipe.ANTIMATTER_ENERGY_FUEL,
    baseDuration: 12,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.ANTI_MATTER, amount: 10 },
      { item: Item.HYDROGEN, amount: 10 },
      { item: Item.FUSION_CAPACITOR, amount: 1 },
      { item: Item.TITANIUM_ALLOY, amount: 1 },
    ],
    products: [{ item: Item.ANTIMATTER_ENERGY_FUEL, amount: 1 }],
  },
  {
    id: Recipe.ALT_NANOTUBE,
    baseDuration: 4,
    category: BuildingCategory.CHEMICAL,
    ingredients: [{ item: Item.BAMBOO_CRYSTAL, amount: 1 }],
    products: [{ item: Item.NANOTUBE, amount: 2 }],
  },
  {
    id: Recipe.NANOTUBE,
    baseDuration: 4,
    category: BuildingCategory.CHEMICAL,
    ingredients: [
      { item: Item.GRAPHENE, amount: 3 },
      { item: Item.TITANIUM_PLATE, amount: 1 },
    ],
    products: [{ item: Item.NANOTUBE, amount: 2 }],
  },
  {
    id: Recipe.CASIMIR_CRYSTAL,
    baseDuration: 4,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.TITAN_CRYSTAL, amount: 1 },
      { item: Item.GRAPHENE, amount: 2 },
      { item: Item.HYDROGEN, amount: 12 },
    ],
    products: [{ item: Item.CASIMIR_CRYSTAL, amount: 1 }],
  },
  {
    id: Recipe.ALT_CASIMIR_CRYSTAL,
    baseDuration: 4,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.GRATING_ORE, amount: 1 },
      { item: Item.GRAPHENE, amount: 2 },
      { item: Item.HYDROGEN, amount: 12 },
    ],
    products: [{ item: Item.CASIMIR_CRYSTAL, amount: 1 }],
  },
  {
    id: Recipe.CIRCUIT_BOARD,
    baseDuration: 1,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.IRON_INGOT, amount: 2 },
      { item: Item.COPPER_INGOT, amount: 1 },
    ],
    products: [{ item: Item.CIRCUIT_BOARD, amount: 2 }],
  },
  {
    id: Recipe.SILICIUM_HIGH_PURITY,
    baseDuration: 2,
    category: BuildingCategory.SMELTING,
    ingredients: [{ item: Item.SILICIUM_SINGLE_CRYSTAL, amount: 1 }],
    products: [{ item: Item.SILICIUM_HIGH_PURITY, amount: 1 }],
  },
  {
    id: Recipe.ALT_SILICIUM_HIGH_PURITY,
    baseDuration: 4,
    category: BuildingCategory.CRAFTING,
    ingredients: [{ item: Item.FRACTAL_SILICA, amount: 1 }],
    products: [{ item: Item.SILICIUM_HIGH_PURITY, amount: 1 }],
  },
  {
    id: Recipe.DEUTERIUM,
    baseDuration: 5,
    category: BuildingCategory.COLLIDER,
    ingredients: [{ item: Item.HYDROGEN, amount: 10 }],
    products: [{ item: Item.DEUTERIUM, amount: 5 }],
  },
  {
    id: Recipe.DEUTERIUM_ENERGY_FUEL,
    baseDuration: 6,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.TITANIUM_ALLOY, amount: 1 },
      { item: Item.DEUTERIUM, amount: 10 },
      { item: Item.HYPER_MAGNETISM_RING, amount: 1 },
    ],
    products: [{ item: Item.DEUTERIUM_ENERGY_FUEL, amount: 1 }],
  },
  {
    id: Recipe.DIAMOND,
    baseDuration: 2,
    category: BuildingCategory.CRAFTING,
    ingredients: [{ item: Item.GRAPHITE, amount: 1 }],
    products: [{ item: Item.DIAMOND, amount: 1 }],
  },
  {
    id: Recipe.ALT_DIAMOND,
    baseDuration: 2,
    category: BuildingCategory.SMELTING,
    ingredients: [{ item: Item.DIAMOND_ORE, amount: 1 }],
    products: [{ item: Item.DIAMOND, amount: 1 }],
  },
  {
    id: Recipe.DYSON_SPHERE_COMPONENT,
    baseDuration: 8,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.FRAME_MATERIAL, amount: 3 },
      { item: Item.SOLAR_COLLECTOR, amount: 3 },
      { item: Item.PROCESSOR, amount: 3 },
    ],
    products: [{ item: Item.DYSON_SPHERE_COMPONENT, amount: 1 }],
  },
  {
    id: Recipe.MAG_TURBINE,
    baseDuration: 2,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.ELECTRIC_MOTOR, amount: 2 },
      { item: Item.MAGNETISM_WIRE, amount: 2 },
    ],
    products: [{ item: Item.MAG_TURBINE, amount: 1 }],
  },
  {
    id: Recipe.ELECTRIC_MOTOR,
    baseDuration: 2,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.IRON_INGOT, amount: 2 },
      { item: Item.GEAR_WHEEL, amount: 1 },
      { item: Item.MAGNETISM_WIRE, amount: 1 },
    ],
    products: [{ item: Item.ELECTRIC_MOTOR, amount: 1 }],
  },
  {
    id: Recipe.GRAPHITE,
    baseDuration: 2,
    category: BuildingCategory.SMELTING,
    ingredients: [{ item: Item.COAL_ORE, amount: 2 }],
    products: [{ item: Item.GRAPHITE, amount: 1 }],
  },
  {
    id: Recipe.TERRAIN_TOOL,
    baseDuration: 1,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.STONE_BRICK, amount: 3 },
      { item: Item.STEEL_INGOT, amount: 1 },
    ],
    products: [{ item: Item.TERRAIN_TOOL, amount: 1 }],
  },
  {
    id: Recipe.FRAME_MATERIAL,
    baseDuration: 6,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.NANOTUBE, amount: 4 },
      { item: Item.TITANIUM_ALLOY, amount: 1 },
      { item: Item.SILICIUM_SINGLE_CRYSTAL, amount: 1 },
    ],
    products: [{ item: Item.FRAME_MATERIAL, amount: 1 }],
  },
  {
    id: Recipe.GLASS,
    baseDuration: 2,
    category: BuildingCategory.SMELTING,
    ingredients: [{ item: Item.STONE_ORE, amount: 2 }],
    products: [{ item: Item.GLASS, amount: 1 }],
  },
  {
    id: Recipe.GRAVITY_LENS,
    baseDuration: 6,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.DIAMOND, amount: 4 },
      { item: Item.STRANGE_MATTER_GENERATOR, amount: 1 },
    ],
    products: [{ item: Item.GRAVITY_LENS, amount: 1 }],
  },
  {
    id: Recipe.SILICIUM_SINGLE_CRYSTAL,
    baseDuration: 2,
    category: BuildingCategory.SMELTING,
    ingredients: [{ item: Item.SILICIUM_ORE, amount: 2 }],
    products: [{ item: Item.SILICIUM_SINGLE_CRYSTAL, amount: 1 }],
  },
  {
    id: Recipe.HYDROGEN_ENERGY_FUEL,
    baseDuration: 3,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.TITANIUM_PLATE, amount: 1 },
      { item: Item.HYDROGEN, amount: 5 },
    ],
    products: [{ item: Item.HYDROGEN_ENERGY_FUEL, amount: 1 }],
  },
  {
    id: Recipe.LOGISTIC_DRONE,
    baseDuration: 4,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.IRON_INGOT, amount: 5 },
      { item: Item.PROCESSOR, amount: 2 },
      { item: Item.FUEL_THRUSTER, amount: 2 },
    ],
    products: [{ item: Item.LOGISTIC_DRONE, amount: 1 }],
  },
  {
    id: Recipe.LOGISTIC_VESSEL,
    baseDuration: 6,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.TITANIUM_ALLOY, amount: 10 },
      { item: Item.PROCESSOR, amount: 10 },
      { item: Item.ION_THRUSTER, amount: 2 },
    ],
    products: [{ item: Item.LOGISTIC_VESSEL, amount: 1 }],
  },
  {
    id: Recipe.MAGNET,
    baseDuration: 1.5,
    category: BuildingCategory.SMELTING,
    ingredients: [{ item: Item.IRON_ORE, amount: 1 }],
    products: [{ item: Item.MAGNET, amount: 1 }],
  },
  {
    id: Recipe.MAGNETISM_WIRE,
    baseDuration: 1,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.MAGNET, amount: 2 },
      { item: Item.COPPER_INGOT, amount: 1 },
    ],
    products: [{ item: Item.MAGNETISM_WIRE, amount: 2 }],
  },
  {
    id: Recipe.DEUTERIUM,
    baseDuration: 2,
    category: BuildingCategory.COLLIDER,
    ingredients: [{ item: Item.PHOTON, amount: 2 }],
    products: [
      { item: Item.HYDROGEN, amount: 2 },
      { item: Item.DEUTERIUM, amount: 2 },
    ],
  },
  {
    id: Recipe.MICRO_COMPONENT,
    baseDuration: 2,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.COPPER_INGOT, amount: 1 },
      { item: Item.SILICIUM_SINGLE_CRYSTAL, amount: 2 },
    ],
    products: [{ item: Item.MICRO_COMPONENT, amount: 1 }],
  },
  {
    id: Recipe.CRYSTAL_RUBBER,
    baseDuration: 6,
    category: BuildingCategory.CHEMICAL,
    ingredients: [
      { item: Item.PLASTIC, amount: 2 },
      { item: Item.REFINED_OIL, amount: 1 },
      { item: Item.WATER, amount: 1 },
    ],
    products: [{ item: Item.CRYSTAL_RUBBER, amount: 1 }],
  },
  {
    id: Recipe.ALT_CRYSTAL_RUBBER,
    baseDuration: 6,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.WOOD, amount: 20 },
      { item: Item.PLANT_FUEL, amount: 30 },
      { item: Item.WATER, amount: 10 },
    ],
    products: [{ item: Item.CRYSTAL_RUBBER, amount: 1 }],
  },
  {
    id: Recipe.PARTICLE_WIDE_BAND,
    baseDuration: 8,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.NANOTUBE, amount: 2 },
      { item: Item.SILICIUM_HIGH_PURITY, amount: 2 },
      { item: Item.PLASTIC, amount: 1 },
    ],
    products: [{ item: Item.PARTICLE_WIDE_BAND, amount: 1 }],
  },
  {
    id: Recipe.PARTICAL_CAPACITOR,
    baseDuration: 4,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.MAG_TURBINE, amount: 2 },
      { item: Item.COPPER_INGOT, amount: 2 },
      { item: Item.GRAPHENE, amount: 2 },
    ],
    products: [{ item: Item.PARTICAL_CAPACITOR, amount: 1 }],
  },
  {
    id: Recipe.ALT_PARTICAL_CAPACITOR,
    baseDuration: 4,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.MONO_MAG_ORE, amount: 10 },
      { item: Item.COPPER_INGOT, amount: 2 },
    ],
    products: [{ item: Item.PARTICAL_CAPACITOR, amount: 1 }],
  },
  {
    id: Recipe.PHOTO_SHIFTER,
    baseDuration: 3,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.CIRCUIT_BOARD, amount: 1 },
      { item: Item.PRISM, amount: 2 },
    ],
    products: [{ item: Item.PHOTO_SHIFTER, amount: 1 }],
  },
  {
    id: Recipe.ALT_PHOTO_SHIFTER,
    baseDuration: 3,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.CIRCUIT_BOARD, amount: 1 },
      { item: Item.GRATING_ORE, amount: 1 },
    ],
    products: [{ item: Item.PHOTO_SHIFTER, amount: 1 }],
  },
  {
    id: Recipe.PLANE_FILTER,
    baseDuration: 12,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.CASIMIR_CRYSTAL, amount: 1 },
      { item: Item.TITAN_GLASS, amount: 2 },
    ],
    products: [{ item: Item.PLANE_FILTER, amount: 1 }],
  },
  {
    id: Recipe.PLASMA_GENERATOR,
    baseDuration: 2,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.MAGNETISM_WIRE, amount: 4 },
      { item: Item.PRISM, amount: 2 },
    ],
    products: [{ item: Item.PLASMA_GENERATOR, amount: 1 }],
  },
  {
    id: Recipe.REFINED_OIL,
    baseDuration: 4,
    category: BuildingCategory.REFINING,
    ingredients: [{ item: Item.OIL, amount: 2 }],
    products: [
      { item: Item.HYDROGEN, amount: 1 },
      { item: Item.REFINED_OIL, amount: 1 },
    ],
  },
  {
    id: Recipe.HYDROGEN,
    baseDuration: 4,
    category: BuildingCategory.REFINING,
    ingredients: [
      { item: Item.REFINED_OIL, amount: 1 },
      { item: Item.HYDROGEN, amount: 2 },
    ],
    products: [
      { item: Item.HYDROGEN, amount: 3 },
      { item: Item.GRAPHITE, amount: 1 },
    ],
  },
  {
    id: Recipe.PLASTIC,
    baseDuration: 3,
    category: BuildingCategory.CHEMICAL,
    ingredients: [
      { item: Item.REFINED_OIL, amount: 2 },
      { item: Item.GRAPHITE, amount: 1 },
    ],
    products: [{ item: Item.PLASTIC, amount: 1 }],
  },
  {
    id: Recipe.PRISM,
    baseDuration: 2,
    category: BuildingCategory.CRAFTING,
    ingredients: [{ item: Item.GLASS, amount: 1 }],
    products: [{ item: Item.PRISM, amount: 2 }],
  },
  {
    id: Recipe.PROCESSOR,
    baseDuration: 3,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.CIRCUIT_BOARD, amount: 2 },
      { item: Item.MICRO_COMPONENT, amount: 2 },
    ],
    products: [{ item: Item.PROCESSOR, amount: 1 }],
  },
  {
    id: Recipe.QUANTUM_PROCESSOR,
    baseDuration: 6,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.PROCESSOR, amount: 2 },
      { item: Item.PLANE_FILTER, amount: 2 },
    ],
    products: [{ item: Item.QUANTUM_PROCESSOR, amount: 1 }],
  },
  {
    id: Recipe.ION_THRUSTER,
    baseDuration: 6,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.TITANIUM_ALLOY, amount: 5 },
      { item: Item.MAG_TURBINE, amount: 5 },
    ],
    products: [{ item: Item.ION_THRUSTER, amount: 1 }],
  },
  {
    id: Recipe.ALT_GRAPHENE,
    baseDuration: 2,
    category: BuildingCategory.CHEMICAL,
    ingredients: [{ item: Item.GAS_HYDRATE, amount: 2 }],
    products: [
      { item: Item.GRAPHENE, amount: 2 },
      { item: Item.HYDROGEN, amount: 1 },
    ],
  },
  {
    id: Recipe.GRAPHENE,
    baseDuration: 3,
    category: BuildingCategory.CHEMICAL,
    ingredients: [
      { item: Item.SULPHURIC_ACID, amount: 1 },
      { item: Item.GRAPHITE, amount: 3 },
    ],
    products: [{ item: Item.GRAPHENE, amount: 2 }],
  },
  {
    id: Recipe.ROCKET,
    baseDuration: 6,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.DYSON_SPHERE_COMPONENT, amount: 2 },
      { item: Item.DEUTERIUM_ENERGY_FUEL, amount: 2 },
      { item: Item.QUANTUM_PROCESSOR, amount: 2 },
    ],
    products: [{ item: Item.ROCKET, amount: 1 }],
  },
  {
    id: Recipe.SOLAR_COLLECTOR,
    baseDuration: 4,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.GRAPHENE, amount: 1 },
      { item: Item.PHOTO_SHIFTER, amount: 1 },
    ],
    products: [{ item: Item.SOLAR_COLLECTOR, amount: 2 }],
  },
  {
    id: Recipe.ALT_SPACE_WARPER,
    baseDuration: 10,
    category: BuildingCategory.CRAFTING,
    ingredients: [{ item: Item.G_MATRIX, amount: 1 }],
    products: [{ item: Item.SPACE_WARPER, amount: 10 }],
  },
  {
    id: Recipe.SPACE_WARPER,
    baseDuration: 10,
    category: BuildingCategory.CRAFTING,
    ingredients: [{ item: Item.GRAVITY_LENS, amount: 1 }],
    products: [{ item: Item.SPACE_WARPER, amount: 1 }],
  },
  {
    id: Recipe.STONE_BRICK,
    baseDuration: 1,
    category: BuildingCategory.SMELTING,
    ingredients: [{ item: Item.STONE_ORE, amount: 1 }],
    products: [{ item: Item.STONE_BRICK, amount: 1 }],
  },
  {
    id: Recipe.STRANGE_MATTER_GENERATOR,
    baseDuration: 8,
    category: BuildingCategory.COLLIDER,
    ingredients: [
      { item: Item.PARTICAL_CAPACITOR, amount: 1 },
      { item: Item.IRON_INGOT, amount: 2 },
      { item: Item.DEUTERIUM, amount: 10 },
    ],
    products: [{ item: Item.STRANGE_MATTER_GENERATOR, amount: 1 }],
  },
  {
    id: Recipe.SULPHURIC_ACID,
    baseDuration: 6,
    category: BuildingCategory.CHEMICAL,
    ingredients: [
      { item: Item.REFINED_OIL, amount: 6 },
      { item: Item.STONE_ORE, amount: 8 },
      { item: Item.WATER, amount: 4 },
    ],
    products: [{ item: Item.SULPHURIC_ACID, amount: 4 }],
  },
  {
    id: Recipe.HYPER_MAGNETISM_RING,
    baseDuration: 3,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.GRAPHITE, amount: 1 },
      { item: Item.MAG_TURBINE, amount: 2 },
      { item: Item.MAGNET, amount: 3 },
    ],
    products: [{ item: Item.HYPER_MAGNETISM_RING, amount: 1 }],
  },
  {
    id: Recipe.FUEL_THRUSTER,
    baseDuration: 4,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.STEEL_INGOT, amount: 2 },
      { item: Item.COPPER_INGOT, amount: 3 },
    ],
    products: [{ item: Item.FUEL_THRUSTER, amount: 1 }],
  },
  {
    id: Recipe.TITANIUM_ALLOY,
    baseDuration: 12,
    category: BuildingCategory.SMELTING,
    ingredients: [
      { item: Item.TITANIUM_PLATE, amount: 4 },
      { item: Item.STEEL_INGOT, amount: 4 },
      { item: Item.SULPHURIC_ACID, amount: 8 },
    ],
    products: [{ item: Item.TITANIUM_ALLOY, amount: 4 }],
  },
  {
    id: Recipe.TITAN_CRYSTAL,
    baseDuration: 4,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.TITANIUM_PLATE, amount: 3 },
      { item: Item.CRYSTAL_RUBBER, amount: 1 },
    ],
    products: [{ item: Item.TITAN_CRYSTAL, amount: 1 }],
  },
  {
    id: Recipe.TITAN_GLASS,
    baseDuration: 5,
    category: BuildingCategory.CRAFTING,
    ingredients: [
      { item: Item.TITANIUM_PLATE, amount: 2 },
      { item: Item.GLASS, amount: 2 },
      { item: Item.WATER, amount: 2 },
    ],
    products: [{ item: Item.TITAN_GLASS, amount: 1 }],
  },
  {
    id: Recipe.TITANIUM_PLATE,
    baseDuration: 4,
    category: BuildingCategory.SMELTING,
    ingredients: [{ item: Item.TITANIUM_ORE, amount: 2 }],
    products: [{ item: Item.TITANIUM_PLATE, amount: 1 }],
  },
  {
    id: Recipe.T_MATRIX,
    baseDuration: 3,
    category: BuildingCategory.SCIENCE,
    ingredients: [
      { item: Item.CIRCUIT_BOARD, amount: 1 },
      { item: Item.MAGNETISM_WIRE, amount: 1 },
    ],
    products: [{ item: Item.T_MATRIX, amount: 1 }],
  },
];

export const Recipes: { [key in Recipe]?: IRecipe } = recipeList.reduce(
  (acc, recipe) => ({ ...acc, [recipe.id]: recipe }),
  {}
);

export const getRecipesForItem = (item: Item): Array<IRecipe> => {
  return recipeList.filter(
    recipe => recipe.products.filter(product => product.item === item).length
  );
};

// TODO: use user preferences
export const getPreferredRecipe = (item: Item): IRecipe =>
  getRecipesForItem(item)[0];
