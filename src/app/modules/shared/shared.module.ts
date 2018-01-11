import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

import { OutlineButtonDirective } from '../../directives/outline-button/outline-button.directive';

@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    OutlineButtonDirective
  ]
})
export class SharedModule { }
