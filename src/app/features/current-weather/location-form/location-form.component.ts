import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { DataService } from "src/app/core/services/data.service";

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss']
})
export class LocationFormComponent {
  public model: string = "";

  constructor(private _dataService: DataService) { }

  public onSubmit(form: NgForm): void {
    const zipCode = form.value.zipCode;
    this._dataService.addZipCode(zipCode);
    form.resetForm();
  }
}
