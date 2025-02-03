import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  input,
} from "@angular/core";

import { CityDetails } from "src/app/api/city-details";
import { getBuildingById } from "src/app/core/data-manager";
import { ProductDefinition } from "src/app/core/data.interface";

@Component({
  selector: "app-product-requirements",
  templateUrl: "./product-requirements.component.html",
  styleUrls: ["./product-requirements.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ProductRequirementsComponent implements OnInit, AfterViewInit {
  product = input.required<ProductDefinition>();

  city = input.required<CityDetails>();

  @ViewChild("buildingTmpl") buildingRef!: TemplateRef<any>;

  @ViewChild("sizeTmpl") sizeRef!: TemplateRef<any>;

  templates = new Map<string, TemplateRef<any>>();

  failedRequirements: [string, any][] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  async ngOnInit() {
    this.failedRequirements = await this.city().getFailedActionRequirements(
      this.product(),
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
