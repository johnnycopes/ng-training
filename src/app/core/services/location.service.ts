import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";
import { ILocation } from "src/app/shared/models/location.interface";
import { ApiService } from "./api.service";
import { StorageService } from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private _locationsSubject$: BehaviorSubject<ILocation[]> = new BehaviorSubject<ILocation[]>([]);

  public get locations$(): Observable<ILocation[]> {
    return this._locationsSubject$.pipe(
      shareReplay(1)
    );
  }

  constructor(
    private _apiService: ApiService,
    private _storageService: StorageService,
  ) {
    this._setLocationsFromStorage();
    this.locations$.subscribe({
      next: locations => {
        const zipCodes = locations.map(location => location.zip);
        this._storageService.storeZipCodes(zipCodes);
      }
    });
  }

  public addLocation(zipCode: string): void {
    this._apiService.fetchLocation(zipCode).subscribe({
      next: location => {
        const locations = [...this._locationsSubject$.value, location];
        this._locationsSubject$.next(locations);
      },
    });
  }

  public deleteLocation(id: number): void {
    const locations = this._locationsSubject$.value.slice();
    const indexToDelete = locations.findIndex(location => location.id === id);
    locations.splice(indexToDelete, 1);
    this._locationsSubject$.next(locations);
  }

  private _setLocationsFromStorage(): void {
    const zipCodes = this._storageService.fetchZipCodes();
    const locations$ = zipCodes.map(zipCode => this._apiService.fetchLocation(zipCode));
    forkJoin(locations$).subscribe({
      next: locations => this._locationsSubject$.next(locations)
    });
  }
}
