import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NorthWSPage } from './north-ws.page';

const routes: Routes = [
  {
    path: '',
    component: NorthWSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NorthWSPageRoutingModule {}
