import { Component } from '@angular/core';

import { MessagePage } from '../message/message';
import { MinePage } from '../mine/mine';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabRoots: Object[];

  constructor() {
    this.tabRoots = [
      {
        root: HomePage,
        tabTitle: "主页",
        tabIcon: "home"
      },
      {
        root: MessagePage,
        tabTitle: "消息",
        tabIcon: "notifications"
      },
      {
        root: MinePage,
        tabTitle: "我的",
        tabIcon: "person"
      },
    ]
  }
}
