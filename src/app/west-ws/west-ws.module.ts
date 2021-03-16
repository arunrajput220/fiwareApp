import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WestWSPageRoutingModule } from './west-ws-routing.module';

import { WestWSPage } from './west-ws.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WestWSPageRoutingModule
  ],
  declarations: [WestWSPage]
})
export class WestWSPageModule {}
