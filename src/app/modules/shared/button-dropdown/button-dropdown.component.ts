import { Component, OnInit, Input, ViewEncapsulation, transition, style, state, trigger, animate, ElementRef } from '@angular/core';
import { AppColors } from '../../../enums/app-colors.enum';

@Component({
  selector: 'kr-button-dropdown',
  templateUrl: './button-dropdown.component.html',
  styleUrls: ['./button-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('expand', [
      state('0', style({
        display: 'none',
        height: '0px'
      })),
      state('1', style({
        display: 'inline-flex',
        height: '*'
      })),
      transition('void => *', animate(0)),
      transition('* => *', animate('300ms ease-in-out'))
    ])
  ]
})
export class ButtonDropdownComponent implements OnInit {
  @Input() color: AppColors;
  private isExpanded = false;
  @Input() label: string;

  constructor(
    private element: ElementRef
  ) { }

  ngOnInit() {
  }

  private get isSplit(): boolean {
   return this.element.nativeElement.hasAttribute('split');
  }

}
