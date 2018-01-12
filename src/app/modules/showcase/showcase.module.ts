import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonsComponent } from './buttons/buttons.component';
import { SharedModule } from '../shared/shared.module';
import { OutlineButtonDirective } from '../../directives/outline-button/outline-button.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ButtonsComponent]
})
export class ShowcaseModule { }
