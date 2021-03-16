import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouthWSPageRoutingModule } from './south-ws-routing.module';

import { SouthWSPage } from './south-ws.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouthWSPageRoutingModule
  ],
  declarations: [SouthWSPage]
})
export class SouthWSPageModule {}
