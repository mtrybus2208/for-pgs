import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SkicamsRoutingModule } from './skicams.routing.module';
import { SharedModule } from './../shared/shared.module';

import { reducer, effects } from './store';
import { SkicamsComponent } from './containers/skicams/skicams.component';
import { SkicamItemComponent } from './components/skicam-item/skicam-item.component';
import { ItemImgComponent } from './components/item-img/item-img.component';
import { SkicamsService } from './services/skicams.service';

@NgModule({
  declarations: [
    SkicamsComponent,
    SkicamItemComponent,
    ItemImgComponent,
  ],
  imports: [
    CommonModule,
    SkicamsRoutingModule,
    StoreModule.forFeature('skiCams', reducer),
    EffectsModule.forFeature(effects),
    SharedModule,
  ],
  providers: [ SkicamsService ],
  exports: [
  ]
})
export class SkicamsModule { }
