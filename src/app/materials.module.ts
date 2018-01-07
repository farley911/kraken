import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule
  ]
})
export class MaterialsModule { }
