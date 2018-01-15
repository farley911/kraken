import { Component, OnInit, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { AppColors } from '../../../enums/app-colors.enum';
import { DropdownAnimations } from '../../../animations/dropdown-button.animations';

@Component({
  selector: 'kr-button-dropdown',
  templateUrl: './button-dropdown.component.html',
  styleUrls: ['./button-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: DropdownAnimations.toggleDropdown
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

  private get isSplit(): boolean {
   return this.element.nativeElement.hasAttribute('split');
  }

  private get isOutlined(): boolean {
    return this.element.nativeElement.hasAttribute('outline');
  }

}
