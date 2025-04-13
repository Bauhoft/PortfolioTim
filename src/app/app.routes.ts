import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
  {
    component: HomepageComponent,
    path: 'home',
    title: 'Portfolio Page - Home',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
