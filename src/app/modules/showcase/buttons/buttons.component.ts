import { Component, OnInit } from '@angular/core';

import { Alignments } from '../../../enums/alignments.enum';

@Component({
  selector: 'kr-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  public align: any = Alignments;

  constructor() { }

  ngOnInit() {
  }

}
