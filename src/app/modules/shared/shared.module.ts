import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialsModule } from '../../materials.module';
import { OutlineButtonDirective } from '../../directives/outline-button/outline-button.directive';
import { RouteModule } from '../../route.module';
import { RoundedButtonDirective } from '../../directives/rounded-button/rounded-button.directive';
import { RoundedOutlineButtonDirective } from '../../directives/rounded-outline-button/rounded-outline-button.directive';
import { ButtonSizeDirective } from '../../directives/button-size/button-size.directive';
import { OutlineFabButtonDirective } from '../../directives/outline-fab-button/outline-fab-button.directive';
import { ButtonGroupDirective } from '../../directives/button-group/button-group.directive';

@NgModule({
  exports: [
    ButtonGroupDirective,
    ButtonSizeDirective,
    MaterialsModule,
    OutlineButtonDirective,
    OutlineFabButtonDirective,
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
    ButtonGroupDirective,
    ButtonSizeDirective,
    OutlineButtonDirective,
    OutlineFabButtonDirective,
    RoundedButtonDirective,
    RoundedOutlineButtonDirective,
  ]
})
export class SharedModule { }
