import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AframePage } from './aframe.page';

const routes: Routes = [
  {
    path: '',
    component: AframePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AframePageRoutingModule {}
