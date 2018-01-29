import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoaderComponent } from './components/loader/loader.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    LoaderComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  exports: [
    LoaderComponent,
    AlertComponent,
  ]
})
export class SharedModule { }
