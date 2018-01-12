import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialsModule } from '../../materials.module';
import { OutlineButtonDirective } from '../../directives/outline-button/outline-button.directive';

@NgModule({
  exports: [
    MaterialsModule,
    OutlineButtonDirective
  ],
  imports: [
    CommonModule,
    MaterialsModule
  ],
  declarations: [
    OutlineButtonDirective
  ]
})
export class SharedModule { }
