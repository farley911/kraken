import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialsModule } from '../../materials.module';
import { OutlineButtonDirective } from '../../directives/outline-button/outline-button.directive';
import { RouteModule } from '../../route.module';
import { RoundedButtonDirective } from '../../directives/rounded-button/rounded-button.directive';
import { RoundedOutlineButtonDirective } from '../../directives/rounded-outline-button/rounded-outline-button.directive';

@NgModule({
  exports: [
    MaterialsModule,
    OutlineButtonDirective,
    RoundedButtonDirective,
    RoundedOutlineButtonDirective,
    RouteModule
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    RouteModule,
  ],
  declarations: [
    OutlineButtonDirective,
    RoundedButtonDirective,
    RoundedOutlineButtonDirective
  ]
})
export class SharedModule { }
