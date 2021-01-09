import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { DataService } from "src/app/core/services/data.service";
import { ILocation } from "src/app/shared/models/location.interface";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  public zipCodes$: Observable<string[]> = this._dataService.zipCodes$;
  public locations: ILocation[] = [{
    name: "Sacramento",
    conditions: "Sunny",
    temperature: "78",
    max: "82",
    min: "70"
  }];

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {

  }
}
