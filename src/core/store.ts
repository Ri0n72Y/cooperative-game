import { create } from "zustand";

export type AreaKey =
  | "farm"
  | "light-industry"
  | "heavy-industry"
  | "heavy-industry-tesla"
  | "service"
  | "service-plus"
  | "cbd";
interface IBoardData {
  area: Record<AreaKey, number[]>;
  cards: Record<string, ICaptial>;
}

interface ICaptial {
  area: AreaKey;
  id: string;
  owner: "player" | "market";
  name: string;
  level: number;
  house: number;
}
export const useBoardData = create<IBoardData>()(() => ({
  area: {
    farm: [2, 3, 8, 6, 5, 4],
    "light-industry": [5, 5, 5, 5, 5, 5],
    "heavy-industry": [10, 15, 8, 6, 11, 9],
    "heavy-industry-tesla": [15, 15, 15, 15, 15, 15],
    service: [18, 15, 12, 10, 7],
    "service-plus": [15, 15, 15, 15, 15, 15],
    cbd: [10, 12, 15, 18, 20, 25],
  },
  cards: {
    "farm-1": {
      owner: "player",
      area: "farm",
      id: "farm-1",
      name: "Farm",
      level: 0,
      house: 0,
    },
  },
}));

interface CapitalConfig {
  id: AreaKey;
  name: string;
  hasMarket: boolean;
  hasClub: boolean;
  hasClinic: boolean;
  basePrice: number;
  rent: number;
  t1: number;
  t2: number;
  t3: number;
  t4?: number;
  salary: number;
  cost: number;
  token: number;
}

export const useMetaConfig = create<Record<AreaKey, CapitalConfig>>()(() => ({
  farm: {
    id: "farm",
    name: "农场",
    hasMarket: false,
    hasClub: false,
    hasClinic: false,
    basePrice: 200,
    rent: 0.06,
    t1: 0.05,
    t2: 0.03,
    t3: 0.02,
    t4: 0.02,
    salary: 0.04,
    cost: 0.2,
    token: 0.05,
  },
  "light-industry": {
    id: "light-industry",
    name: "轻工业",
    hasMarket: false,
    hasClub: false,
    hasClinic: false,
    basePrice: 400,
    rent: 0.06,
    t1: 0.05,
    t2: 0.035,
    t3: 0.015,
    t4: 0.015,
    salary: 0.04,
    cost: 0.05,
    token: 0.1,
  },
  "heavy-industry": {
    id: "heavy-industry",
    name: "重工业",
    hasMarket: false,
    hasClub: false,
    hasClinic: false,
    basePrice: 400,
    rent: 0.025,
    t1: 0.025,
    t2: 0.015,
    t3: 0.01,
    t4: 0.01,
    salary: 0.02,
    cost: 0.05,
    token: 0.1,
  },
  "heavy-industry-tesla": {
    id: "heavy-industry-tesla",
    name: "奇观",
    hasMarket: false,
    hasClub: false,
    hasClinic: false,
    basePrice: 400,
    rent: 0.022,
    t1: 0.025,
    t2: 0.015,
    t3: 0.01,
    t4: 0.01,
    salary: 0.02,
    cost: 0.05,
    token: 0.1,
  },
  service: {
    id: "service",
    name: "服务业",
    hasMarket: false,
    hasClub: false,
    hasClinic: false,
    basePrice: 200,
    rent: 0.04,
    t1: 0.035,
    t2: 0.025,
    t3: 0.015,
    t4: 0.015,
    salary: 0.03,
    cost: 0,
    token: 0.04,
  },
  "service-plus": {
    id: "service-plus",
    name: "服务业+",
    hasMarket: false,
    hasClub: false,
    hasClinic: false,
    basePrice: 200,
    rent: 0.04,
    t1: 0.032,
    t2: 0.022,
    t3: 0.012,
    t4: 0.012,
    salary: 0.03,
    cost: 0,
    token: 0.033,
  },
  cbd: {
    id: "cbd",
    name: "CBD",
    hasMarket: false,
    hasClub: false,
    hasClinic: false,
    basePrice: 400,
    rent: 0.037,
    t1: 0.025,
    t2: 0.018,
    t3: 0.008,
    t4: 0.008,
    salary: 0.04,
    cost: 0.05,
    token: 0,
  },
}));
