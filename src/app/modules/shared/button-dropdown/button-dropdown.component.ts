import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'kr-button-dropdown',
  templateUrl: './button-dropdown.component.html',
  styleUrls: ['./button-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonDropdownComponent implements OnInit {
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
