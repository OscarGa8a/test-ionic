import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AframePageRoutingModule } from './aframe-routing.module';

import { AframePage } from './aframe.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AframePageRoutingModule,
    ComponentsModule
  ],
  declarations: [AframePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AframePageModule {}
