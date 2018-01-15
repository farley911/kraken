import { Component, OnInit, ElementRef } from '@angular/core';

import { ButtonDropdownComponent } from '../button-dropdown/button-dropdown.component';
import { FlyoutAnimations } from '../../../animations/flyout-button.animations';

@Component({
  selector: 'kr-button-flyup',
  templateUrl: './button-flyup.component.html',
  styleUrls: ['./button-flyup.component.scss'],
  animations: FlyoutAnimations.toggleFlyout
})
export class ButtonFlyupComponent extends ButtonDropdownComponent implements OnInit {

  constructor(
    public element: ElementRef
  ) {
    super(element);
  }

  ngOnInit() {
  }

}
