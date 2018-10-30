import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { GraphPage } from '../graph/graph';
import { DetailPage } from '../detail/detail';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GraphPage;
  tab3Root = DetailPage;

  constructor() {

  }
}
