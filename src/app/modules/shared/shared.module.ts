import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialsModule } from '../../materials.module';
import { OutlineButtonDirective } from '../../directives/outline-button/outline-button.directive';
import { RouteModule } from '../../route.module';

@NgModule({
  exports: [
    MaterialsModule,
    OutlineButtonDirective,
    RouteModule
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    RouteModule,
  ],
  declarations: [
    OutlineButtonDirective
  ]
})
export class SharedModule { }
