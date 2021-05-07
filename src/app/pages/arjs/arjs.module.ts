// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArjsPageRoutingModule } from './arjs-routing.module';

import { ArjsPage } from './arjs.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArjsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ArjsPage],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ArjsPageModule {}
