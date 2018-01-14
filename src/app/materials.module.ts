import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule
  ]
})
export class MaterialsModule { }
