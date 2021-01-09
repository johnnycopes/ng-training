import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent implements OnInit {
  @Input() name: string = "";
  @Input() temperature: string = "";
  @Input() max: string = "";
  @Input() min: string = "";
  @Input()
  set conditions(value: string) {
    this._conditions = value;
    this.visualSrc = this._getVisualSrc(value);
  }
  get conditions(): string {
    return this._conditions;
  }
  public visualSrc: string = "";
  private _conditions: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  private _getVisualSrc(conditions: string): string {
    let visual: string = "";
    switch (conditions.toLowerCase()) {
      case "clouds":
        visual = "clouds";
        break;
      case "rain": case "thunderstorm": case "drizzle":
        visual = "rain";
        break;
      case "snow":
        visual = "snow";
        break;
      default:
        visual = "sun";
    }
    return `https://www.angulartraining.com/images/weather/${visual}.png`;
  }

}
