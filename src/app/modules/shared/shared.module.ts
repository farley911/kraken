import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialsModule } from '../../materials.module';
import { OutlineButtonDirective } from '../../directives/outline-button/outline-button.directive';
import { RouteModule } from '../../route.module';
import { RoundedButtonDirective } from '../../directives/rounded-button/rounded-button.directive';
import { RoundedOutlineButtonDirective } from '../../directives/rounded-outline-button/rounded-outline-button.directive';
import { ButtonSizeDirective } from '../../directives/button-size/button-size.directive';
import { OutlineIconButtonDirective } from '../../directives/outline-icon-button/outline-icon-button.directive';
import { IconButtonDirective } from '../../directives/icon-button/icon-button.directive';

@NgModule({
  exports: [
    ButtonSizeDirective,
    IconButtonDirective,
    MaterialsModule,
    OutlineButtonDirective,
    OutlineIconButtonDirective,
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
    ButtonSizeDirective,
    IconButtonDirective,
    OutlineButtonDirective,
    OutlineIconButtonDirective,
    RoundedButtonDirective,
    RoundedOutlineButtonDirective
  ]
})
export class SharedModule { }
