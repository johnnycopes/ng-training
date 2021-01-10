import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() zipCode: string = "";
  @Input() conditions: string = "";
  @Output() deleted: EventEmitter<void> = new EventEmitter();
}
