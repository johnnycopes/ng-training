
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { CurrentWeatherComponent } from './features/current-weather/current-weather.component';
import { PageNotFoundComponent } from "./core/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', component: CurrentWeatherComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
