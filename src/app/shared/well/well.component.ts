import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WellComponent implements OnInit {
  @Input() title: string = '';
  @Input() canClose: boolean = true;
  @Output() closed: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
