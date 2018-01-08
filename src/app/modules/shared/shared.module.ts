import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: []
})
export class SharedModule { }
