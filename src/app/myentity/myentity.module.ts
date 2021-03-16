import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyentityPageRoutingModule } from './myentity-routing.module';

import { MyentityPage } from './myentity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyentityPageRoutingModule
  ],
  declarations: [MyentityPage]
})
export class MyentityPageModule {}
