import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  @Input() name: string = "";
  @Input() conditions: string = "";
  @Input() temperature: string = "";
  @Input() max: string = "";
  @Input() min: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
