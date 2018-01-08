import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { CoreModule } from './modules/core/core.module';
import { MaterialsModule } from './materials.module';
import { RouteModule } from './route.module';
import { ShowcaseModule } from './modules/showcase/showcase.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    MaterialsModule,
    ReactiveFormsModule,
    RouteModule,
    ShowcaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
