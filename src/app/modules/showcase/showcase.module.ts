import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonsComponent } from './buttons/buttons.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ButtonsComponent]
})
export class ShowcaseModule { }
