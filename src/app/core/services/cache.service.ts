import { Injectable } from "@angular/core";
import { ILocation } from "src/app/shared/models/location.interface";

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private _key: string = "WEATHER_APP_LOCATIONS";

  constructor() { }

  public setLocations(locations: ILocation[]): void {
    const locationZipCodes = locations
      .map(location => location.zip)
      .join(",");
    localStorage.setItem(this._key, locationZipCodes);
  }
}
