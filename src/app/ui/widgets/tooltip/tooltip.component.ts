import { Component, OnInit, TemplateRef } from "@angular/core";

@Component({
  selector: "app-tooltip",
  templateUrl: "./tooltip.component.html",
  styleUrls: ["./tooltip.component.scss"],
  standalone: false,
})
export class TooltipComponent implements OnInit {
  templateRef!: TemplateRef<any>;

  context: any;

  constructor() {}

  ngOnInit(): void {}
}
