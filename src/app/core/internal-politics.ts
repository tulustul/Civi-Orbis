import { GovernmentSection, GovernmentOption } from "./data.interface";
import { getGovernmentOptionById } from "./data-manager";

export class InternalPolitics {
  governmentSections: Record<GovernmentSection, GovernmentOption> = {
    [GovernmentSection.organization]: getGovernmentOptionById(
      "government_organization_tribalism",
    ),
    [GovernmentSection.economics]: getGovernmentOptionById(
      "government_economics_barter",
    ),
  };
}
