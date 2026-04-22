import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './services/employee.service';
import { Employee } from './employee';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>社員一覧</h2>

    <div>
      ID: <input type="number" [(ngModel)]="newEmployee.id">
      名前: <input type="text" [(ngModel)]="newEmployee.name">
      部署: <input type="text" [(ngModel)]="newEmployee.department">
      <button (click)="add()">追加</button>
    </div>

    <ul>
      <li *ngFor="let emp of employees">
        {{ emp.id }} / {{ emp.name }} / {{ emp.department }}
        <button (click)="delete(emp.id)">削除</button>
      </li>
    </ul>
  `
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  newEmployee: Employee = {
    id: 0,
    name: '',
    department: ''
  };

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  add(): void {
    this.employeeService.addEmployee(this.newEmployee).subscribe(() => {
      this.loadEmployees();
      this.newEmployee = { id: 0, name: '', department: '' };
    });
  }

  delete(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();
    });
  }
}