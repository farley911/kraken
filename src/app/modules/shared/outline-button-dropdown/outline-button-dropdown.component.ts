import { Component, OnInit, ElementRef } from '@angular/core';

import { ButtonDropdownComponent } from '../button-dropdown/button-dropdown.component';
import { FlyoutAnimations } from '../../../animations/flyout-button.animations';

@Component({
  selector: 'kr-outline-button-dropdown',
  templateUrl: './outline-button-dropdown.component.html',
  styleUrls: ['./outline-button-dropdown.component.scss'],
  animations: FlyoutAnimations.toggleFlyout
})
export class OutlineButtonDropdownComponent extends ButtonDropdownComponent implements OnInit {

  constructor(
    public element: ElementRef
  ) {
    super(element);
  }

  ngOnInit() {
  }

}