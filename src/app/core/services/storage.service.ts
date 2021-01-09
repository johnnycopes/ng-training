import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _key: string = "WEATHER_APP_LOCATIONS";

  constructor() { }

  public fetchZipCodes(): string[] {
    const zipCodes = localStorage.getItem(this._key)?.split(",") ?? [];
    return zipCodes;
  }

  public storeZipCodes(zipCodes: string[]): void {
    localStorage.setItem(this._key, zipCodes.join(","));
  }
}
