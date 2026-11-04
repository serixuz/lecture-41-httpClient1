import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Library } from './pages/library/library';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'library',
    component: Library,
  },
];
