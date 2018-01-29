import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SkicamsComponent } from './containers/skicams/skicams.component';


const routes: Routes = [
  { path: '', component: SkicamsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SkicamsRoutingModule {}
