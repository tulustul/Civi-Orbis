import { ResourceDefinition } from "../core/data.interface";
import { TileImprovement } from "../core/tile-improvements";

export const RESOURCES_DEFINITIONS: ResourceDefinition[] = [
  {
    id: "stone",
    name: "Stone",
    requiredImprovement: TileImprovement.mine,
    bonuses: {
      yieldValue: { production: 1 },
    },
    bonusesWhenWorked: {
      yieldValue: { production: 2 },
    },
  },
  {
    id: "copper",
    name: "Copper",
    requiredImprovement: TileImprovement.mine,
    bonuses: {
      yieldValue: { production: 1 },
    },
    bonusesWhenWorked: {
      yieldValue: { production: 3 },
    },
  },
  {
    id: "iron",
    name: "Iron",
    requiredImprovement: TileImprovement.mine,
    bonuses: {
      yieldValue: { production: 1 },
    },
    bonusesWhenWorked: {
      yieldValue: { production: 3 },
    },
  },
  {
    id: "wheat",
    name: "Wheat",
    requiredImprovement: TileImprovement.farm,
    bonuses: {
      yieldValue: { food: 1 },
    },
    bonusesWhenWorked: {
      yieldValue: { food: 3 },
    },
  },
  {
    id: "corn",
    name: "Corn",
    requiredImprovement: TileImprovement.farm,
    bonuses: {
      yieldValue: { food: 1 },
    },
    bonusesWhenWorked: {
      yieldValue: { food: 3 },
    },
  },
  {
    id: "rice",
    name: "Rice",
    requiredImprovement: TileImprovement.farm,
    bonuses: {
      yieldValue: { food: 1 },
    },
    bonusesWhenWorked: {
      yieldValue: { food: 3 },
    },
  },
  {
    id: "gold",
    name: "Gold",
    requiredImprovement: TileImprovement.mine,
    bonuses: {
      yieldValue: { gold: 2 },
    },
    bonusesWhenWorked: {
      yieldValue: { gold: 5 },
    },
  },
  {
    id: "silver",
    name: "Silver",
    requiredImprovement: TileImprovement.mine,
    bonuses: {
      yieldValue: { gold: 1 },
    },
    bonusesWhenWorked: {
      yieldValue: { gold: 3 },
    },
  },
];
