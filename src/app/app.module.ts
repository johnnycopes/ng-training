import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './features/current-weather/current-weather.component';
import { ForecastComponent } from './features/forecast/forecast.component';
import { LocationComponent } from './features/current-weather/location/location.component';
import { LocationFormComponent } from './features/current-weather/location-form/location-form.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    ForecastComponent,
    LocationComponent,
    LocationFormComponent,
    PageNotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
