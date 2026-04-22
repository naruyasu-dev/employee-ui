import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Employee } from './employee';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  template: `<p>employee-list works!</p>`
})
export class EmployeeListComponent {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

}