import { Component, OnInit, ElementRef } from '@angular/core';

import { FlyoutAnimations } from '../../../animations/flyout-button.animations';
import { ButtonDropdownComponent } from '../button-dropdown/button-dropdown.component';

@Component({
  selector: 'kr-outline-button-flyup',
  templateUrl: './outline-button-flyup.component.html',
  styleUrls: ['./outline-button-flyup.component.scss'],
  animations: FlyoutAnimations.toggleFlyout
})
export class OutlineButtonFlyupComponent extends ButtonDropdownComponent implements OnInit {

  constructor(
    public element: ElementRef
  ) {
    super(element);
  }

  ngOnInit() {
  }

}
