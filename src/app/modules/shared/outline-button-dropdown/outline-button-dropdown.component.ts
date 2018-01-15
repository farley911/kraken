import { Component, OnInit, ElementRef } from '@angular/core';

import { ButtonDropdownComponent } from '../button-dropdown/button-dropdown.component';
import { DropdownAnimations } from '../../../animations/dropdown-button.animations';

@Component({
  selector: 'kr-outline-button-dropdown',
  templateUrl: './outline-button-dropdown.component.html',
  styleUrls: ['./outline-button-dropdown.component.scss'],
  animations: DropdownAnimations.toggleDropdown
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
