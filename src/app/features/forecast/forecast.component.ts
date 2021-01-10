import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { ForecastService } from "src/app/core/services/forecast.service";
import { IForecast } from "src/app/shared/models/forecast.interface";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  public zipCode$: Observable<string> = of("");
  public forecast$: Observable<IForecast> = of({
    name: "",
    date: 1568977200, // default to Jan 1, 1970
    days: []
  });

  constructor(
    private _route: ActivatedRoute,
    private _forecastService: ForecastService,
  ) { }

  ngOnInit(): void {
    this.zipCode$ = this._route.paramMap.pipe(
      map(paramMap => paramMap.get("zipCode") ?? "")
    );
    this.forecast$ = this.zipCode$.pipe(
      switchMap(zipCode => this._forecastService.fetchForecast(zipCode)),
    );
  }

}
