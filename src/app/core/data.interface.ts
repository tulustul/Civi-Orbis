import { UnitAction } from "./unit-actions";
import { Bonuses } from "./bonus";
import { Requirement } from "./requirements";
import { TileImprovement } from "./tile-improvements";
import { SeaLevel, Climate, LandForm } from "../shared";

export interface Entity {
  id: string;
  name: string;
}

export interface HaveRequirements {
  // entity will be hidden from player
  strongRequirements: Requirement[];

  // entity will be disabled for player
  weakRequirements: Requirement[];
}

export interface HaveBonuses {
  bonuses: Bonuses;
}

export interface ProductDefinition extends Entity, HaveRequirements {
  productionCost: number;
}

export enum UnitType {
  land,
  naval,
}

export enum UnitTrait {
  settler,
  explorer,
  worker,
  military,
}

export interface UnitDefinition extends ProductDefinition {
  actionPoints: number;
  strength: number;
  actions: UnitAction[];
  type: UnitType;
  trait: UnitTrait;
  capacity: number;
}

export type Building = ProductDefinition & HaveBonuses;
export type IdleProduct = ProductDefinition & HaveBonuses;

export enum GovernmentSection {
  organization,
  economics,
}

export type GovernmentOption = Entity &
  HaveRequirements &
  HaveBonuses & {
    section: GovernmentSection;
  };

export type Nation = Entity & {
  parentNation: string | null;
  bonuses: Bonuses;
  citiesNames: string[];
};

export interface ResourceDistribution {
  // tile requirements
  seaLevel?: SeaLevel;
  climates?: Climate[];
  forest?: boolean;

  // the higher the more close together the resource is placed.
  clasterize?: number;

  // quantity distribution
  quantityMedian: number;
  quantityStddev: number;

  landFormProbability: {
    [LandForm.plains]: number;
    [LandForm.hills]: number;
  };
}

export interface ResourceDefinition extends Entity {
  requiredImprovement: TileImprovement;
  bonuses: Bonuses;
  bonusesWhenWorked: Bonuses;
  distribution: ResourceDistribution;
}
