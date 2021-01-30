export interface IBelt {
  id: Belt;
  rate: number;
}

export enum Belt {
  BELT_1,
  BELT_2,
  BELT_3,
}

const beltsList: Array<IBelt> = [
  {
    id: Belt.BELT_1,
    rate: 360,
  },
  {
    id: Belt.BELT_2,
    rate: 720,
  },
  {
    id: Belt.BELT_3,
    rate: 1800,
  },
];

export const Belts: { [key in Belt]?: IBelt } = beltsList.reduce(
  (acc, item) => ({ ...acc, [item.id]: item }),
  {}
);

// TODO: use user preferences
export const getPreferredBelt = () => Belt.BELT_1;
