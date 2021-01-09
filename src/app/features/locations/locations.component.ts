import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { DataService } from "src/app/core/services/data.service";
import { ILocation } from "src/app/shared/models/location.interface";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {
  public locations$: Observable<ILocation[]> = this._dataService.locations$;

  constructor(private _dataService: DataService) { }

  public trackByFn(index: number, location: ILocation): number {
    return location.id;
  }

  public onDelete(id: number): void {
    this._dataService.deleteLocation(id);
  }
}
