import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from "@angular/core";

import { TabComponent } from "./tab/tab.component";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"],
  standalone: false,
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  activeTab: TabComponent | undefined;

  ngAfterContentInit() {
    this.activateTab(this.tabs.first);
  }

  activateTab(tab: TabComponent) {
    if (this.activeTab) {
      this.activeTab.hide();
    }
    this.activeTab = tab;
    this.activeTab.show();
  }
}
