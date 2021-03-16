import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouthWSPage } from './south-ws.page';

const routes: Routes = [
  {
    path: '',
    component: SouthWSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouthWSPageRoutingModule {}
