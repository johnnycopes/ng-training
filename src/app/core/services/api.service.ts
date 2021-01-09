import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ILocation } from "src/app/shared/models/location.interface";
import { ICurrentWeather } from "src/app/shared/models/open-weather-api/current-weather.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _baseUrl: string = "http://api.openweathermap.org/data/2.5/weather";
  private _apiKey: string = "5a4b2d457ecbef9eb2a71e480b947604";

  constructor(private _httpService: HttpClient) { }

  public fetchLocation(zipCode: string): Observable<ILocation> {
    const params = {
      zip: zipCode,
      appid: this._apiKey,
      units: "imperial"
    };
    return this._httpService
      .get<ICurrentWeather>(this._baseUrl, { params })
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
      )
    ;
  }
}
