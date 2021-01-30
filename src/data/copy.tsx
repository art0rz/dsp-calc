import { Item } from './item';
import { Recipe } from './recipes';
import { Belt } from './belts';
import { Building, BuildingCategory } from './buildings';
import { Miner, MiningCategory } from './miners';

export const ItemNames: { [key in Item]?: string } = {
  [Item.IRON_ORE]: 'Iron Ore',
  [Item.COPPER_ORE]: 'Copper Ore',
  [Item.COAL_ORE]: 'Coal ore',
  [Item.IRON_INGOT]: 'Iron Ingot',
  [Item.COPPER_INGOT]: 'Copper Ingot',
  [Item.STEEL_INGOT]: 'Steel',
  [Item.GEAR_WHEEL]: 'Gear Wheel',
  [Item.TERRAIN_TOOL]: 'Foundation',
  [Item.WOOD]: 'Wood',
  [Item.SULPHURIC_ACID]: 'Sulfuric Acid',
  [Item.ACCUMULATOR]: 'Accumulator',
  [Item.ANTI_MATTER]: 'Anti-matter',
  [Item.ANTIMATTER_ENERGY_FUEL]: 'Antimatter Fuel Rod',
  [Item.CASIMIR_CRYSTAL]: 'Casimir Crystal',
  [Item.CIRCUIT_BOARD]: 'Circuit board',
  [Item.C_MATRIX]: 'Structure matrix',
  [Item.CRYSTAL_RUBBER]: 'Organic Crystal',
  [Item.DEUTERIUM]: 'Deuterium',
  [Item.DEUTERIUM_ENERGY_FUEL]: 'Deuterom Fuel Rod',
  [Item.DIAMOND]: 'Diamond',
  [Item.DIAMOND_ORE]: 'Diamond Ore',
  [Item.DYSON_SPHERE_COMPONENT]: 'Dyson Sphere Component',
  [Item.ELECTRIC_MOTOR]: 'Electric Motor',
  [Item.E_MATRIX]: 'Energy Matrix',
  [Item.EM_RAIL_EJECTOR]: 'EM-Rail Ejector',
  [Item.ENERGY_EXCHANGER]: 'Energy Exchanger',
  [Item.FRACTAL_SILICA]: 'Fractal Silicon',
  [Item.FRAME_MATERIAL]: 'Frame Material',
  [Item.FUEL_PLANT]: 'Thermal Power Station',
  [Item.FUEL_THRUSTER]: 'Thruster',
  [Item.FUSION_CAPACITOR]: 'Annihilation constrant sphere',
  [Item.FUSION_POWER_STATION]: 'Mini Fusion Power Station',
  [Item.FUSION_REACTOR]: 'Artifical Star',
  [Item.GAS_HYDRATE]: 'Fire Ice',
  [Item.GLASS]: 'Glass',
  [Item.G_MATRIX]: 'Gravity Matrix',
  [Item.GRAPHENE]: 'Graphene',
  [Item.GRAPHITE]: 'Energetic Graphite',
  [Item.GRAVITY_LENS]: 'Graviton Lense',
  [Item.HYDROGEN]: 'Hydrogen',
  [Item.HYPER_MAGNETISM_RING]: 'Super-Magnetic Ring',
  [Item.HYDROGEN_ENERGY_FUEL]: 'Hydrogen Fuel Rod',
  [Item.I_MATRIX]: 'Information Matrix',
  [Item.INSERTER_1]: 'Inserter Mk.1',
  [Item.INSERTER_2]: 'Inserter Mk.2',
  [Item.INSERTER_3]: 'Inserter Mk.3',
  [Item.INSERTER_3]: 'Inserter Mk.3',
  [Item.INTERSTELLAR_LOGISTIC_STATION]: 'Interstellar Logistic Station',
  [Item.ION_THRUSTER]: 'Reinforced Thruster',
  [Item.LOGISTIC_DRONE]: 'Logistic Drone',
  [Item.LOGISTIC_STATION]: 'Logistic Station',
  [Item.LOGISTIC_VESSEL]: 'Logistic Vessel',
  [Item.MAGNET]: 'Magnet',
  [Item.MAGNETISM_WIRE]: 'Magnetic Coil',
  [Item.MAG_TURBINE]: 'Electromagnetic Turbine',
  [Item.MICRO_COMPONENT]: 'Microcrystalline Component',
  [Item.NANOTUBE]: 'Nanotube',
  [Item.ORBITAL_COLLECTOR]: 'Orbital Collector',
  [Item.ORBITAL_SUBSTATION]: 'Orbital Substation',
  [Item.PARTICAL_CAPACITOR]: 'Partical Container',
  [Item.PARTICLE_WIDE_BAND]: 'Partical broadband',
  [Item.PHOTON]: 'Photon',
  [Item.PHOTO_SHIFTER]: 'Photon Combiner',
  [Item.PLANE_FILTER]: 'Plane Filter',
  [Item.PLANT_FUEL]: 'Plant Fuel',
  [Item.PLASMA_GENERATOR]: 'Plasma exciter',
  [Item.PLASTIC]: 'Plastic',
  [Item.PRISM]: 'Prism',
  [Item.PROCESSOR]: 'Processor',
  [Item.QUANTUM_PROCESSOR]: 'Quantum Chip',
  [Item.REFINED_OIL]: 'Refined Oil',
  [Item.ROCKET]: 'Small Carrier Rocket',
  [Item.SILICIUM_HIGH_PURITY]: 'Crystal silicon',
  [Item.SILICIUM_ORE]: 'Silicon Ore',
  [Item.SILICIUM_SINGLE_CRYSTAL]: 'High-purity Silicon',
  [Item.SOLAR_COLLECTOR]: 'Solar Sail',
  [Item.SOLAR_PANEL]: 'Solar Panel',
  [Item.SPACE_WARPER]: 'Space Warper',
  [Item.SPLITTER_4DIR]: 'Splitter',
  [Item.STONE_BRICK]: 'Stone',
  [Item.STONE_ORE]: 'Stone Ore',
  [Item.STORAGE_1]: 'Storage Mk.1',
  [Item.STORAGE_2]: 'Storage Mk.2',
  [Item.STORAGE_TANK]: 'Storage Tank',
  [Item.STRANGE_MATTER_GENERATOR]: 'Strange Matter',
  [Item.TESLA_COIL]: 'Tesla Tower',
  [Item.TITAN_CRYSTAL]: 'Titanium crystal',
  [Item.TITAN_GLASS]: 'Titanium Glass',
  [Item.TITANIUM_ALLOY]: 'Titanium Alloy',
  [Item.TITANIUM_ORE]: 'Titanium Ore',
  [Item.TITANIUM_PLATE]: 'Titanium Ingot',
  [Item.T_MATRIX]: 'Electromagnetic Matrix',
  [Item.U_MATRIX]: 'Universe Matrix',
  [Item.VERTICAL_LAUNCHING_SILO]: 'Vertical Launching Silo',
  [Item.WATER]: 'Water',
  [Item.WIND_TURBINE]: 'Wind Turbine',
  [Item.OIL]: 'Crude Oil',
  [Item.GRATING_ORE]: 'Optical Grating Ore',
  [Item.BAMBOO_CRYSTAL]: 'Spiniform Stlagmite Crystal',
  [Item.MONO_MAG_ORE]: 'Unipolar Magnet',
};

export const MinerNames: { [key in Miner]?: string } = {
  [Miner.MINING_DRILL]: 'Miner',
  [Miner.OIL_EXTRACTOR]: 'Oil extractor',
  [Miner.WATER_PUMP]: 'Water pump',
  [Miner.RAY_RECEIVER]: 'Ray Receiver',
};

export const BuildingNames: { [key in Building]?: string } = {
  [Building.ASSEMBLER_1]: 'Assembler Mk.1',
  [Building.ASSEMBLER_2]: 'Assembler Mk.2',
  [Building.ASSEMBLER_3]: 'Assembler Mk.3',
  [Building.SMELTER]: 'Smelter',
  [Building.CHEMICAL_PLANT]: 'Chemical Plant',
  [Building.OIL_REFINERY]: 'Oil Refinery',
  [Building.MATRIX_LAB]: 'Matrix Lab',
  [Building.HADRON_COLLIDER]: 'Miniature Particle Collider',
};

export const BeltNames: { [key in Belt]?: string } = {
  [Belt.BELT_1]: 'Conveyor Belt Mk.1',
  [Belt.BELT_2]: 'Conveyor Belt Mk.2',
  [Belt.BELT_3]: 'Conveyor Belt Mk.3',
};

export const RecipeNames: { [key in Recipe]?: string } = {
  [Recipe.IRON_INGOT]: 'Iron Ingot',
  [Recipe.COPPER_INGOT]: 'Copper Ingot',
  [Recipe.STEEL_INGOT]: 'Steel',
  [Recipe.GEAR_WHEEL]: 'Gear Wheel',
  [Recipe.FUSION_CAPACITOR]: 'Annihilation Constraint Sphere',
  [Recipe.ANTIMATTER_ENERGY_FUEL]: 'Antimatter Fuel Rod',
  [Recipe.ALT_NANOTUBE]: 'Carbon Nanotube (Advanced)',
  [Recipe.NANOTUBE]: 'Carbon Nanotube',
  [Recipe.CASIMIR_CRYSTAL]: 'Casimir Crystal',
  [Recipe.ALT_CASIMIR_CRYSTAL]: 'Casimir Crystal (Advanced)',
  [Recipe.CIRCUIT_BOARD]: 'Circuit Board',
  [Recipe.SILICIUM_HIGH_PURITY]: 'Crystal Silicon',
  [Recipe.ALT_SILICIUM_HIGH_PURITY]: 'Crystal Silicon (Advanced)',
  [Recipe.DEUTERIUM]: 'Deuterium',
  [Recipe.DEUTERIUM_ENERGY_FUEL]: 'Deuterom Fuel Rod',
  [Recipe.DIAMOND]: 'Diamond',
  [Recipe.ALT_DIAMOND]: 'Diamond (Advanced)',
  [Recipe.DYSON_SPHERE_COMPONENT]: 'Dyson Sphere Component',
  [Recipe.MAG_TURBINE]: 'Electromagnetic Turbine',
  [Recipe.ELECTRIC_MOTOR]: 'Electric Motor',
  [Recipe.GRAPHITE]: 'Energetic Graphite',
  [Recipe.TERRAIN_TOOL]: 'Foundation',
  [Recipe.FRAME_MATERIAL]: 'Frame Material',
  [Recipe.GLASS]: 'Glass',
  [Recipe.GRAVITY_LENS]: 'Graviton Lense',
  [Recipe.SILICIUM_SINGLE_CRYSTAL]: 'High-purity Silicon',
  [Recipe.HYDROGEN_ENERGY_FUEL]: 'Hydrogen Fuel Rod',
  [Recipe.LOGISTIC_DRONE]: 'Logistic Drone',
  [Recipe.LOGISTIC_VESSEL]: 'Logistic Vessel',
  [Recipe.MAGNET]: 'Magnet',
  [Recipe.MAGNETISM_WIRE]: 'Magnetic Coil',
  [Recipe.DEUTERIUM]: 'Mass-energy Storage',
  [Recipe.MICRO_COMPONENT]: 'Microcrystalline Component',
  [Recipe.CRYSTAL_RUBBER]: 'Organic Crystal',
  [Recipe.ALT_CRYSTAL_RUBBER]: 'Organic Crystal Alt',
  [Recipe.PARTICLE_WIDE_BAND]: 'Partical broadband',
  [Recipe.PARTICAL_CAPACITOR]: 'Partical Container',
  [Recipe.ALT_PARTICAL_CAPACITOR]: 'Partical Container (Advanced)',
  [Recipe.PHOTO_SHIFTER]: 'Photon Combiner',
  [Recipe.ALT_PHOTO_SHIFTER]: 'Photon Combiner (Advanced)',
  [Recipe.PLANE_FILTER]: 'Plane Filter',
  [Recipe.PLASMA_GENERATOR]: 'Plasma exciter',
  [Recipe.REFINED_OIL]: 'Plasma Refining',
  [Recipe.HYDROGEN]: 'X-ray Cracking',
  [Recipe.PLASTIC]: 'Plastic',
  [Recipe.PRISM]: 'Prism',
  [Recipe.PROCESSOR]: 'Processor',
  [Recipe.QUANTUM_PROCESSOR]: 'Quantum Chip',
  [Recipe.ION_THRUSTER]: 'Reinforced Thruster',
  [Recipe.ALT_GRAPHENE]: 'Graphene (Advanced)',
  [Recipe.GRAPHENE]: 'Graphene',
  [Recipe.ROCKET]: 'Small Carrier Rocket',
  [Recipe.SOLAR_COLLECTOR]: 'Solar Sail',
  [Recipe.ALT_SPACE_WARPER]: 'Space Warper',
  [Recipe.SPACE_WARPER]: 'Space Warper',
  [Recipe.STONE_BRICK]: 'Stone',
  [Recipe.STRANGE_MATTER_GENERATOR]: 'Strange Matter',
  [Recipe.SULPHURIC_ACID]: 'Sulfuric acid',
  [Recipe.HYPER_MAGNETISM_RING]: 'Super-Magnetic Ring',
  [Recipe.FUEL_THRUSTER]: 'Thruster',
  [Recipe.TITANIUM_ALLOY]: 'Titanium Alloy',
  [Recipe.TITAN_CRYSTAL]: 'Titanium Crystal',
  [Recipe.TITAN_GLASS]: 'Titanium Glass',
  [Recipe.TITANIUM_PLATE]: 'Titanium Ingot',
  [Recipe.T_MATRIX]: 'Electromagnetic Matrix',
};

export const BuildingCategoryNames: { [key in BuildingCategory]?: string } = {
  [BuildingCategory.SMELTING]: 'Smelting',
  [BuildingCategory.SCIENCE]: 'Science',
  [BuildingCategory.REFINING]: 'Refining',
  [BuildingCategory.CRAFTING]: 'Crafting',
  [BuildingCategory.COLLIDER]: 'Collider',
  [BuildingCategory.CHEMICAL]: 'Chemical',
};

export const MinerCategoryNames = {
  [MiningCategory.DYSON]: 'Dyson',
  [MiningCategory.MINERAL]: 'Mineral',
  [MiningCategory.OIL]: 'Oil',
  [MiningCategory.WATER]: 'Water',
};

// until we implement translations, we'll use this shim to reduce refactoring at a later date.
export const getItemName = (item: Item): string =>
  ItemNames[item] || Item[item];

export const getRecipeName = (recipe: Recipe): string =>
  RecipeNames[recipe] || Recipe[recipe];

export const getBeltName = (belt: Belt): string =>
  BeltNames[belt] || Belt[belt];

export const getBuildingName = (building: Building): string =>
  BuildingNames[building] || Building[building];

export const getMinerNames = (miner: Miner): string =>
  MinerNames[miner] || Miner[miner];

export const getBuildingCategoryName = (category: BuildingCategory): string =>
  BuildingCategoryNames[category] || BuildingCategory[category];

export const getMiningCategoryName = (category: MiningCategory): string =>
  MinerCategoryNames[category] || MiningCategory[category];
