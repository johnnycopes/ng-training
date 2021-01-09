import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './features/current-weather/current-weather.component';
import { ForecastComponent } from './features/forecast/forecast.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { LocationFormComponent } from './features/current-weather/location-form/location-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    ForecastComponent,
    PageNotFoundComponent,
    LocationFormComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
