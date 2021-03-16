import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NorthWSPageRoutingModule } from './north-ws-routing.module';
import { NgxGaugeModule } from 'ngx-gauge';
import { NorthWSPage } from './north-ws.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NorthWSPageRoutingModule,
    NgxGaugeModule
  ],
  declarations: [NorthWSPage]
})
export class NorthWSPageModule {}
