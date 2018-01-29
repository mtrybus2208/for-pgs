import { RouterModule, Routes, PreloadAllModules, PreloadingStrategy, } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '',  loadChildren: './about/about.module#AboutModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'skicams', loadChildren: './skicams/skicams.module#SkicamsModule' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
