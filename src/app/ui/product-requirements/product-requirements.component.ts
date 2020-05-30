import {
  Component,
  Input,
  ViewChild,
  TemplateRef,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
} from "@angular/core";

import { ProductDefinition } from "src/app/core/data.interface";
import { getBuildingById } from "src/app/core/data-manager";
import { CityDetails } from "src/app/api/city-details";

@Component({
  selector: "app-product-requirements",
  templateUrl: "./product-requirements.component.html",
  styleUrls: ["./product-requirements.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductRequirementsComponent implements OnInit, AfterViewInit {
  @Input() product: ProductDefinition;

  @Input() city: CityDetails;

  @ViewChild("buildingTmpl") buildingRef: TemplateRef<any>;

  @ViewChild("sizeTmpl") sizeRef: TemplateRef<any>;

  templates = new Map<string, TemplateRef<any>>();

  failedRequirements: [string, any][] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  async ngOnInit() {
    this.failedRequirements = await this.city.getFailedActionRequirements(
      this.product,
    );
    this.cdr.markForCheck();
  }

  ngAfterViewInit(): void {
    this.templates.set("building", this.buildingRef);
    this.templates.set("size", this.sizeRef);
  }

  getBuildingName(id: string) {
    return getBuildingById(id).name;
  }
}
