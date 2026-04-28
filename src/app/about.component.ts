import { Component } from '@angular/core';

/**
 * このアプリについて画面コンポーネント
 *
 * ・http://localhost:4200/about で表示する予定の画面
 * ・アプリの説明や学習目的などを表示する
 */
@Component({
  /**
   * このコンポーネントをHTMLで呼び出すための名前
   *
   * 今回は router で表示するので、
   * 直接 <app-about></app-about> と書かなくても使える
   */
  selector: 'app-about',

  /**
   * standalone コンポーネントとして使用する
   */
  standalone: true,

  /**
   * このアプリについて画面のHTML
   */
  template: `
    <h2>このアプリについて</h2>

    <p>
      このアプリは、Angular と Spring Boot REST API を連携させる練習用アプリです。
    </p>

    <p>
      社員一覧画面では、社員データの一覧表示・追加・更新・削除を行います。
    </p>
  `
})
export class AboutComponent {
}