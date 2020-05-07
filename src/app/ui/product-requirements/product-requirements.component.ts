import {
  Component,
  Input,
  ViewChild,
  TemplateRef,
  AfterViewInit,
} from "@angular/core";

import { ProductDefinition, ProductRequirement } from "src/app/core/product";
import { City } from "src/app/core/city";
import { BUILDINGS_MAP } from "src/app/core/buildings";

@Component({
  selector: "app-product-requirements",
  templateUrl: "./product-requirements.component.html",
  styleUrls: ["./product-requirements.component.scss"],
})
export class ProductRequirementsComponent implements AfterViewInit {
  @Input() product: ProductDefinition;

  @Input() city: City;

  @ViewChild("buildingTmpl") buildingRef: TemplateRef<any>;

  @ViewChild("sizeTmpl") sizeRef: TemplateRef<any>;

  templates = new Map<string, TemplateRef<any>>();

  failedRequirements: ProductRequirement[] = [];

  constructor() {}

  ngAfterViewInit(): void {
    this.templates.set("building", this.buildingRef);
    this.templates.set("size", this.sizeRef);

    for (const r of this.product.weakRequirements) {
      if (!r.check(this.city)) {
        this.failedRequirements.push(r);
      }
    }
  }

  getBuildingName(id: string) {
    return BUILDINGS_MAP.get(id)!.name;
  }
}
