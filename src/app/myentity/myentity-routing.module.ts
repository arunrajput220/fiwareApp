import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyentityPage } from './myentity.page';

const routes: Routes = [
  {
    path: '',
    component: MyentityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyentityPageRoutingModule {}
