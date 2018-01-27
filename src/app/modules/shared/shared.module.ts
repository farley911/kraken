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
import { OutlineButtonDropdownComponent } from './outline-button-dropdown/outline-button-dropdown.component';
import { ButtonFlyupComponent } from './button-flyup/button-flyup.component';
import { OutlineButtonFlyupComponent } from './outline-button-flyup/outline-button-flyup.component';

@NgModule({
  exports: [
    ButtonDropdownComponent,
    ButtonFlyupComponent,
    ButtonGroupDirective,
    ButtonSizeDirective,
    DropdownItemDirective,
    MaterialsModule,
    OutlineButtonDirective,
    OutlineButtonDropdownComponent,
    OutlineButtonFlyupComponent,
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
    ButtonFlyupComponent,
    ButtonGroupDirective,
    ButtonSizeDirective,
    DropdownItemDirective,
    OutlineButtonDirective,
    OutlineButtonDropdownComponent,
    OutlineButtonFlyupComponent,
    OutlineFabButtonDirective,
    RoundedButtonDirective,
    RoundedOutlineButtonDirective
  ]
})
export class SharedModule { }
