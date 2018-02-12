import { Component, OnInit, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { AppColors } from '../../../enums/app-colors.enum';
import { FlyoutAnimations } from '../../../animations/flyout-button.animations';

@Component({
  selector: 'kr-button-dropdown',
  templateUrl: './button-dropdown.component.html',
  styleUrls: ['./button-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: FlyoutAnimations.toggleFlyout
})
export class ButtonDropdownComponent implements OnInit {
  @Input() color: AppColors;
  private isExpanded = false;
  @Input() label: string;

  constructor(
    public element: ElementRef
  ) { }

  ngOnInit() {
  }

  /**
   * Returns a boolean indicating if the caret attribute is present
   * @return {boolean}
   */
  private get hasCaret(): boolean {
    return this.element.nativeElement.hasAttribute('caret');
  }

  /**
   * Returns a boolean indicating if the split attribute is present
   * @return {boolean}
   */
  private get isSplit(): boolean {
   return this.element.nativeElement.hasAttribute('split');
  }

}
