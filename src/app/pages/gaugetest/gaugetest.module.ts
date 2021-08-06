import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GaugetestPageRoutingModule } from './gaugetest-routing.module';
import { GaugetestPage } from './gaugetest.page';
import { NgxGaugeModule } from 'ngx-gauge';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaugetestPageRoutingModule,
    NgxGaugeModule
  ],
  declarations: [GaugetestPage]
})
export class GaugetestPageModule {}
