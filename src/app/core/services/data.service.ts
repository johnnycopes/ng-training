import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";
import { ILocation } from "src/app/shared/models/location.interface";
import { ICurrentWeather } from "src/app/shared/models/open-weather-api/current-weather.interface";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _baseUrl: string = "http://api.openweathermap.org/data/2.5/weather";
  private _apiKey: string = "5a4b2d457ecbef9eb2a71e480b947604";
  private _locationsSubject$: BehaviorSubject<ILocation[]> = new BehaviorSubject<ILocation[]>([]);

  public get locations$(): Observable<ILocation[]> {
    return this._locationsSubject$.pipe(
      shareReplay(1)
    );
  }

  constructor(private _httpService: HttpClient) { }

  public addLocation(zipCode: string): void {
    const params = {
      zip: zipCode,
      appid: this._apiKey,
      units: "imperial"
    };
    this._httpService.get<ICurrentWeather>(this._baseUrl, { params }).subscribe(
      data => {
        console.log(data);
        const location: ILocation = {
          id: data?.sys?.id ?? -1,
          name: data?.name ?? "",
          conditions: data?.weather?.[0].main ?? "",
          temperature: data?.main?.temp ?? "",
          max: data?.main?.temp_max ?? "",
          min: data?.main?.temp_min ?? ""
        };
        const locations = this._locationsSubject$.value;
        this._locationsSubject$.next([...locations, location]);
      }
    );
  }

  public deleteLocation(id: number): void {
    const locations = this._locationsSubject$.value.slice();
    const indexToDelete = locations.findIndex(location => location.id === id);
    locations.splice(indexToDelete, 1);
    this._locationsSubject$.next(locations);
  }
}
