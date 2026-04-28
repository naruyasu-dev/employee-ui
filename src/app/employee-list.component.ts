// Angular の Component 機能を使うために読み込む
// OnInit は、画面表示時に最初に処理を実行するためのライフサイクル
import { Component, OnInit } from '@angular/core';

// *ngFor など、Angular の基本的な機能を使うために必要
import { CommonModule } from '@angular/common';

// [(ngModel)] を使うために必要
// 入力フォームと TypeScript の変数を双方向バインディングできる
import { FormsModule } from '@angular/forms';

// 社員データを取得・追加・更新・削除するサービス
import { EmployeeService } from './services/employee.service';

// Employee 型を読み込む
// id / name / department を持つ社員データの型
import { Employee } from './employee';

@Component({
  // このコンポーネントを HTML で使うときのタグ名
  // 例：<app-employee-list></app-employee-list>
  selector: 'app-employee-list',

  // standalone: true にすると、NgModule に登録しなくても使える
  standalone: true,

  // このコンポーネント内で使う Angular 機能を指定する
  imports: [
    CommonModule, // *ngFor などを使うため
    FormsModule  // [(ngModel)] を使うため
  ],

  // このコンポーネントの画面部分
  template: `
    <h2>社員一覧</h2>

    <!-- 社員の追加・更新フォーム -->
    <div>
      <!--
        [(ngModel)] は双方向バインディング

        入力欄に入力した値が newEmployee.id に入る
        逆に newEmployee.id の値も入力欄に表示される
      -->
      ID: <input type="number" [(ngModel)]="newEmployee.id">

      <!-- 名前入力欄 -->
      名前: <input type="text" [(ngModel)]="newEmployee.name">

      <!-- 部署入力欄 -->
      部署: <input type="text" [(ngModel)]="newEmployee.department">

      <!--
        ボタンを押すと save() メソッドを実行する

        newEmployee.id に値があれば「更新」
        id が 0 など falsy なら「追加」と表示する
      -->
      <button (click)="save()">
        {{ newEmployee.id ? '更新' : '追加' }}
      </button>
    </div>

    <!-- 社員一覧表示 -->
    <ul>
      <!--
        *ngFor は配列を繰り返し表示する Angular の構文

        employees 配列の中身を 1件ずつ emp に入れて表示する
      -->
      <li *ngFor="let emp of employees">

        <!-- 社員情報を画面に表示 -->
        {{ emp.id }} / {{ emp.name }} / {{ emp.department }}

        <!--
          編集ボタン
          押すと edit(emp) が呼ばれる
          選択した社員データを入力フォームにコピーする
        -->
        <button (click)="edit(emp)">編集</button>

        <!--
          削除ボタン
          押すと delete(emp.id) が呼ばれる
          指定した id の社員を削除する
        -->
        <button (click)="delete(emp.id)">削除</button>
      </li>
    </ul>
  `
})
export class EmployeeListComponent implements OnInit {

  // 社員一覧を入れる配列
  // API から取得した社員データがここに入る
  employees: Employee[] = [];

  // 追加・更新フォームで使う社員データ
  // 初期状態では空の社員データを入れておく
  newEmployee: Employee = {
    id: 0,
    name: '',
    department: ''
  };

  // コンストラクタ
  // EmployeeService を Angular に注入してもらう
  // これで this.employeeService からサービスを使える
  constructor(private employeeService: EmployeeService) { }

  // コンポーネントが最初に表示されたときに自動で呼ばれる
  ngOnInit(): void {
    // 初期表示時に社員一覧を取得する
    this.loadEmployees();
  }

  // 社員一覧を取得するメソッド
  loadEmployees(): void {
    // employeeService の getEmployees() を呼び出す
    // HTTP 通信なので subscribe() の中で結果を受け取る
    this.employeeService.getEmployees().subscribe(data => {

      // 取得した社員一覧データを employees に入れる
      // これにより画面の一覧表示が更新される
      this.employees = data;
    });
  }

  // 追加または更新を行うメソッド
  save(): void {

    // newEmployee.id に値がある場合は更新処理
    // id が 0 の場合は追加処理
    if (this.newEmployee.id) {

      // 更新処理
      // 入力フォームの内容を API に送って更新する
      this.employeeService.updateEmployee(this.newEmployee).subscribe(() => {

        // 更新後、社員一覧を再取得する
        this.loadEmployees();

        // 入力フォームを空に戻す
        this.reset();
      });

    } else {

      // 追加処理
      // 入力フォームの内容を API に送って新規登録する
      this.employeeService.addEmployee(this.newEmployee).subscribe(() => {

        // 追加後、社員一覧を再取得する
        this.loadEmployees();

        // 入力フォームを空に戻す
        this.reset();
      });
    }
  }

  // 編集ボタンを押したときに呼ばれるメソッド
  edit(emp: Employee): void {

    // 選択した社員データを newEmployee にコピーする
    //
    // { ...emp } はスプレッド構文
    // emp をそのまま代入するのではなく、新しいオブジェクトとしてコピーする
    //
    // これにより、入力フォームに選択した社員情報が表示される
    this.newEmployee = { ...emp };
  }

  // 削除ボタンを押したときに呼ばれるメソッド
  delete(id: number): void {

    // 指定した id の社員を削除する
    this.employeeService.deleteEmployee(id).subscribe(() => {

      // 削除後、社員一覧を再取得する
      this.loadEmployees();
    });
  }

  // 入力フォームを初期状態に戻すメソッド
  reset(): void {
    this.newEmployee = {
      id: 0,
      name: '',
      department: ''
    };
  }
}