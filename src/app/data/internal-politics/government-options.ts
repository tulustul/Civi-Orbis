import {
  GovernmentOption,
  GovernmentSection,
} from "src/app/core/data.interface";

export const GOVERNMENT_OPTIONS: GovernmentOption[] = [
  {
    section: GovernmentSection.organization,
    id: "government_organization_tribalism",
    name: "tribalism",
    bonuses: { culturePerKilledEnemy: 0.5 },
    strongRequirements: [],
    weakRequirements: [],
  },
  {
    section: GovernmentSection.economics,
    id: "government_economics_barter",
    name: "barter",
    bonuses: {},
    strongRequirements: [],
    weakRequirements: [],
  },
];
