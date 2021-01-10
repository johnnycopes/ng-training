import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WellComponent {
  @Input() canClose: boolean = true;
  @Output() closed: EventEmitter<void> = new EventEmitter();
}
