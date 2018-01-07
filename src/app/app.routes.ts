import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './modules/core/hello-world/hello-world.component';
import { PageNotFoundComponent } from './modules/core/page-not-found/page-not-found.component';
import { RoutePaths } from './enums/route-paths.enum';

export const AppRoutes: Routes = [{
  path: '',
  component: HelloWorldComponent,
  data: {
    title: 'Hello World'
  }
}, {
  path: '**',
  component: PageNotFoundComponent
}];
