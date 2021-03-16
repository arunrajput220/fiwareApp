import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EastWSPage } from './east-ws.page';

const routes: Routes = [
  {
    path: '',
    component: EastWSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EastWSPageRoutingModule {}
