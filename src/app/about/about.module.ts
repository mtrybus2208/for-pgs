import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { AboutRoutingModule } from './about.routing.module';
import { SharedModule } from './../shared/shared.module';

import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatCardModule,
    SharedModule,
  ],
  providers: [],
  exports: [
  ]
})
export class AboutModule { }
