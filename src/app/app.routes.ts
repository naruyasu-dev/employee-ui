import { Routes } from '@angular/router';

// 👇 これ全部必要
import { HomeComponent } from './components/home.component';
import { EmployeeListComponent } from './components/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/edit/:id', component: EmployeeEditComponent },
  { path: '**', redirectTo: '' }
];