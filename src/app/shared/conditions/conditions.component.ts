import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type WeatherVisual = "sun" | "snow" | "rain" | "clouds";

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConditionsComponent {
  @Input() size: "small" | "large" = "small";
  @Input()
  set conditions(value: string) {
    this.visualSrc = this._getVisualSrc(value);
  }
  public visualSrc: string = "";

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
