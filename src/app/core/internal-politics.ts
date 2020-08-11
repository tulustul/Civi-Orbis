import { PolicyArea, PolicyOption, Law } from "./data.interface";

export interface Policy {
  option: PolicyOption;
  laws: Law[];
}

export class InternalPolitics {
  policyAreas = new Map<PolicyArea, Policy>();

  stateReligion: any | null; // TODO

  taxing: number; // [0-1]

  scienceSpending: number; // [0-1]
}
