import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HelloWorldComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
