import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArjsPage } from './arjs.page';

const routes: Routes = [
  {
    path: '',
    component: ArjsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArjsPageRoutingModule {}
