import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

/**
 * アプリケーションのルートコンポーネント
 *
 * ・Angularアプリの最上位コンポーネント
 * ・画面全体の外枠になる
 * ・URLに応じて表示する画面を切り替える
 */
@Component({
  /**
   * index.html の <app-root></app-root> と対応する
   */
  selector: 'app-root',

  /**
   * standalone コンポーネントとして使用する
   */
  standalone: true,

  /**
   * このコンポーネントのテンプレート内で使用する機能を登録する
   *
   * RouterOutlet:
   * ・URLに対応したコンポーネントを表示する場所
   *
   * RouterLink:
   * ・Angular の画面遷移リンクを使うための機能
   */
  imports: [RouterOutlet, RouterLink],

  /**
   * App コンポーネントの画面
   *
   * ここでは、社員一覧画面を直接表示しない
   * <router-outlet> の場所に、URLに応じた画面が表示される
   */
  template: `
    <h1>employee-ui</h1>

    <nav>
      <a routerLink="/">トップ</a>
      |
      <a routerLink="/employees">社員一覧</a>
      |
      <a routerLink="/about">このアプリについて</a>
    </nav>

    <hr>

    <!--
      ここに、URLに対応したコンポーネントの template が表示される

      例:
      /           → HomeComponent
      /employees  → EmployeeListComponent
      /about      → AboutComponent
    -->
    <router-outlet></router-outlet>
  `
})
export class App {
}