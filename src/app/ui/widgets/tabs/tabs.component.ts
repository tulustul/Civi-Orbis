import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';

import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  activeTab: TabComponent;

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
