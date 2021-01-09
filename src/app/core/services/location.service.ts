import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";
import { ILocation } from "src/app/shared/models/location.interface";
import { ApiService } from "./api.service";

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

  constructor(private _dataService: ApiService) {
    // const locations = localStorage.getItem(localStorageKey);\
    // this._locationsSubject$.next(locations);
  }

  public addLocation(zipCode: string): void {
    this._dataService.fetchLocation(zipCode).subscribe(
      location => {
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
