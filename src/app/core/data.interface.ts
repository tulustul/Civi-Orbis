import { UnitAction } from "./unit-actions";
import { Bonuses } from "./bonus";
import { Requirement } from "./requirements";

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

export type UnitType = "land" | "naval";

export interface UnitDefinition extends ProductDefinition {
  actionPoints: number;
  strength: number;
  actions: UnitAction[];
  type: UnitType;
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
