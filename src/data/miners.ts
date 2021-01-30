export interface IMiner {
  id: Miner;
  category: MiningCategory;
  baseRate: number;
  power: number;
}

export enum MiningCategory {
  MINERAL,
  OIL,
  WATER,
  DYSON,
}

export enum Miner {
  MINING_DRILL,
  OIL_EXTRACTOR,
  WATER_PUMP,
  RAY_RECEIVER,
}

const minersList: Array<IMiner> = [
  {
    id: Miner.MINING_DRILL,
    category: MiningCategory.MINERAL,
    baseRate: 39,
    power: 0.42,
  },
  {
    id: Miner.OIL_EXTRACTOR,
    category: MiningCategory.OIL,
    baseRate: 60,
    power: 0.84,
  },
  {
    id: Miner.WATER_PUMP,
    category: MiningCategory.WATER,
    baseRate: 65,
    power: 0.3,
  },
  {
    id: Miner.RAY_RECEIVER,
    category: MiningCategory.DYSON,
    baseRate: 5,
    power: 1,
  },
];

export const Miners: { [key in Miner]?: IMiner } = minersList.reduce(
  (acc, item) => ({ ...acc, [item.id]: item }),
  {}
);
