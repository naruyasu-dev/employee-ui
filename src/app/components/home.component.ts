import { Component } from '@angular/core';

/**
 * トップ画面コンポーネント
 *
 * ・http://localhost:4200/ で表示する画面
 * ・アプリを開いたときの最初の画面
 */
@Component({
  /**
   * このコンポーネントをHTMLで呼び出すための名前
   *
   * 今回は router で表示するので、
   * 直接 <app-home></app-home> と書かなくても使える
   */
  selector: 'app-home',

  /**
   * standalone コンポーネントとして使用する
   */
  standalone: true,

  /**
   * トップ画面のHTML
   */
  template: `
    <h2>トップ画面</h2>

    <p>社員管理アプリへようこそ。</p>

    <p>
      上のメニューから「社員一覧」を選ぶと、
      社員一覧・追加・更新・削除画面に移動します。
    </p>
  `
})
export class HomeComponent {
}