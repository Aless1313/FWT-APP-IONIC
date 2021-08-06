import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaugetestPage } from './gaugetest.page';

const routes: Routes = [
  {
    path: '',
    component: GaugetestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaugetestPageRoutingModule {}
