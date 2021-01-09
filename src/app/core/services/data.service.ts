import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _zipCodesSubject$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  public get zipCodes$(): Observable<string[]> {
    return this._zipCodesSubject$.pipe(
      shareReplay(1)
    );
  }

  constructor() { }

  public addZipCode(zipCode: string): void {
    const zipCodes = this._zipCodesSubject$.value;
    this._zipCodesSubject$.next([...zipCodes, zipCode]);
  }
}
