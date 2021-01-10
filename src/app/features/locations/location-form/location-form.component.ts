import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { LocationService } from "src/app/core/services/location.service";

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationFormComponent {
  public model: string = "";

  constructor(private _dataService: LocationService) { }

  public onSubmit(form: NgForm): void {
    const zipCode = form.value.zipCode;
    this._dataService.addLocation(zipCode);
    form.resetForm();
  }
}
