import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  public zipCode$: Observable<string> = of("");
  public name$: Observable<string> = of("");

  constructor(
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.zipCode$ = this._route.paramMap.pipe(
      map(paramMap => paramMap.get("zipCode") ?? "")
    );
  }

}
