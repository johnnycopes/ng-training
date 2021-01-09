import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

type WeatherVisual = "sun" | "snow" | "rain" | "clouds";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {
  @Input() id: number = -1;
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
  @Output() deleted: EventEmitter<void> = new EventEmitter();

  private _getVisualSrc(conditions: string): string {
    let visual: WeatherVisual = "sun";
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
    }
    return `https://www.angulartraining.com/images/weather/${visual}.png`;
  }
}
