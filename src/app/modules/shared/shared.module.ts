import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialsModule } from '../../materials.module';
import { OutlineButtonDirective } from '../../directives/outline-button/outline-button.directive';
import { RouteModule } from '../../route.module';
import { RoundedButtonDirective } from '../../directives/rounded-button/rounded-button.directive';

@NgModule({
  exports: [
    MaterialsModule,
    OutlineButtonDirective,
    RoundedButtonDirective,
    RouteModule
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    RouteModule,
  ],
  declarations: [
    OutlineButtonDirective,
    RoundedButtonDirective
  ]
})
export class SharedModule { }
