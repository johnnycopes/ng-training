import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from "rxjs";
import { LocationService } from "src/app/core/services/location.service";
import { ILocation } from "src/app/shared/models/location.interface";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationsComponent {
  public locations$: Observable<ILocation[]> = this._locationService.locations$;

  constructor(private _locationService: LocationService) { }

  public trackByFn(index: number, location: ILocation): number {
    return location.id;
  }

  public onDelete(id: number): void {
    this._locationService.deleteLocation(id);
  }
}
