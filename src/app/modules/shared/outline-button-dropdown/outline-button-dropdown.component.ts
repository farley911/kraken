import { Component, OnInit, ElementRef, Input } from '@angular/core';

import { ButtonDropdownComponent } from '../button-dropdown/button-dropdown.component';
import { FlyoutAnimations } from '../../../animations/flyout-button.animations';
import { Alignments } from '../../../enums/alignments.enum';

@Component({
  selector: 'kr-outline-button-dropdown',
  templateUrl: './outline-button-dropdown.component.html',
  styleUrls: ['./outline-button-dropdown.component.scss'],
  animations: FlyoutAnimations.toggleFlyout
})
export class OutlineButtonDropdownComponent extends ButtonDropdownComponent implements OnInit {
  @Input() align: string = Alignments.Left;

  constructor(
    public element: ElementRef
  ) {
    super(element);
  }

  ngOnInit() {
  }

}
