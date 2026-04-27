import { Component } from '@angular/core';
import { EmployeeListComponent } from './employee-list';

/**
 * アプリケーションのルートコンポーネント
 *
 * ・Angularアプリの最上位
 * ・画面の入口になるコンポーネント
 * ・ここから各機能コンポーネントを読み込む
 */
@Component({
  /**
   * HTMLタグ名
   *
   * index.html で使用される
   * 例:
   * <app-root></app-root>
   */
  selector: 'app-root',

  /**
   * standaloneコンポーネント設定
   *
   * ・NgModule不要で動作する（Angularの新しい書き方）
   */
  standalone: true,

  /**
   * このコンポーネントで使用する子コンポーネント
   *
   * ・EmployeeListComponent を読み込む
   */
  imports: [EmployeeListComponent],

  /**
   * テンプレート（HTML）
   *
   * ・EmployeeListComponent を表示するだけのシンプル構成
   */
  template: `<app-employee-list></app-employee-list>`
})
export class App {
}