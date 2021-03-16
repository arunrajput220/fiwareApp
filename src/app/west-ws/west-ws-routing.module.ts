import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WestWSPage } from './west-ws.page';

const routes: Routes = [
  {
    path: '',
    component: WestWSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WestWSPageRoutingModule {}
