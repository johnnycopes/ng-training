import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IForecast } from "src/app/shared/models/forecast.interface";
import { ILocation } from "src/app/shared/models/location.interface";
import { ICurrentWeatherData } from "src/app/shared/models/open-weather-api/current-weather-data.interface";
import { IForecastData } from "src/app/shared/models/open-weather-api/forecast-data.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _locationUrl: string = "http://api.openweathermap.org/data/2.5/weather";
  private _forecastUrl: string = "http://api.openweathermap.org/data/2.5/forecast/daily";
  private _apiKey: string = "5a4b2d457ecbef9eb2a71e480b947604";

  constructor(private _httpService: HttpClient) { }

  public fetchLocation(zipCode: string): Observable<ILocation> {
    const params = {
      zip: zipCode,
      appid: this._apiKey,
      units: "imperial"
    };
    return this._httpService
      .get<ICurrentWeatherData>(this._locationUrl, { params })
      .pipe(
        map(data => {
          return {
            id: data?.sys?.id ?? -1,
            name: data?.name ?? "",
            conditions: data?.weather?.[0].main ?? "",
            temperature: data?.main?.temp ?? "",
            max: data?.main?.temp_max ?? "",
            min: data?.main?.temp_min ?? "",
            zip: zipCode,
          };
        })
      );
  }

  public fetchForecast(zipCode: string): Observable<IForecast> {
    const params = {
      zip: zipCode,
      appid: this._apiKey,
      units: "imperial",
      cnt: "5", // number of days
    };
    return this._httpService
      .get<IForecastData>(this._forecastUrl, { params })
      .pipe(
        map(data => {
          const days = data?.list?.map(day => ({
            date: day?.dt * 1000 ?? 0,
            max: day?.temp?.max ?? "",
            min: day?.temp?.min ?? "",
            conditions: day?.weather?.[0]?.main ?? ""
          })) ?? [];
          return {
            name: data?.city?.name ?? "",
            days
          };
        })
      );
  }
}
