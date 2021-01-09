import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @HostBinding("class")
  public hostClass: string = "button";

  @Input()
  @HostBinding("class.button--disabled")
  public disabled: boolean = false;

  ngOnInit(): void {
  }

}
