import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IForecast } from "src/app/shared/models/forecast.interface";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private _apiService: ApiService) { }

  public fetchForecast(zipCode: string): Observable<IForecast> {
    return this._apiService.fetchForecast(zipCode);
  }

}
