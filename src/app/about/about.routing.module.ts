import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  { path: '', component: AboutComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
