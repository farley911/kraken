import { Component, OnInit, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { AppColors } from '../../../enums/app-colors.enum';
import { FlyoutAnimations } from '../../../animations/flyout-button.animations';
import { Alignments } from '../../../enums/alignments.enum';

@Component({
  selector: 'kr-button-dropdown',
  templateUrl: './button-dropdown.component.html',
  styleUrls: ['./button-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: FlyoutAnimations.toggleFlyout
})
export class ButtonDropdownComponent implements OnInit {
  @Input() align: string = Alignments.Left;
  @Input() color: AppColors;
  private isExpanded = false;
  @Input() label: string;

  constructor(
    public element: ElementRef
  ) { }

  /**
   * Returns a boolean indicating if the caret is aligned center
   * @return {boolean}
   */
  public get alignedCenter(): boolean {
    return this.align === Alignments.Center;
  }

  /**
   * Returns a boolean indicating if the caret is aligned right
   * @return {boolean}
   */
  public get alignedRight(): boolean {
    return this.align === Alignments.Right;
  }

  /**
   * Returns a boolean indicating if the caret attribute is present
   * @return {boolean}
   */
  public get hasCaret(): boolean {
    return this.element.nativeElement.hasAttribute('caret');
  }

  /**
   * Returns a boolean indicating if the split attribute is present
   * @return {boolean}
   */
  public get isSplit(): boolean {
   return this.element.nativeElement.hasAttribute('split');
  }

  ngOnInit() {
  }

}
