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
import { ButtonDropdownComponent } from './button-dropdown/button-dropdown.component';
import { DropdownItemDirective } from '../../directives/dropdown-item/dropdown-item.directive';

@NgModule({
  exports: [
    ButtonDropdownComponent,
    ButtonGroupDirective,
    ButtonSizeDirective,
    DropdownItemDirective,
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
    ButtonDropdownComponent,
    ButtonGroupDirective,
    ButtonSizeDirective,
    DropdownItemDirective,
    OutlineButtonDirective,
    OutlineFabButtonDirective,
    RoundedButtonDirective,
    RoundedOutlineButtonDirective,
  ]
})
export class SharedModule { }
