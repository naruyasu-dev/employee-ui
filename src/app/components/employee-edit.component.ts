import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding:40px">
      <h2>編集画面</h2>
      <p>ここに編集フォームを作る</p>
    </div>
  `
})
export class EmployeeEditComponent {}
