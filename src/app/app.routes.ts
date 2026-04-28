import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee-list.component';
import { AboutComponent } from './about.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'employees',
    component: EmployeeListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];