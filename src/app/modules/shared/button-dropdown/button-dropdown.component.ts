import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kr-button-dropdown',
  templateUrl: './button-dropdown.component.html',
  styleUrls: ['./button-dropdown.component.scss']
})
export class ButtonDropdownComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
