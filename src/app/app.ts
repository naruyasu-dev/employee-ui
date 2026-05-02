// Angularの基本機能（コンポーネント定義）を使うために必要
import { Component } from '@angular/core';

// 画面遷移（ルーティング）を使うために必要
import { RouterModule } from '@angular/router';

/**
 * ルートコンポーネント（アプリの一番親）
 *
 * ・このコンポーネントがアプリの土台になる
 * ・ヘッダーや共通レイアウトをここに書く
 * ・<router-outlet> を使って各画面を表示する
 */
@Component({
  // HTMLでこのコンポーネントを呼び出すタグ名
  selector: 'app-root',

  // standaloneコンポーネント（NgModule不要）
  standalone: true,

  // このコンポーネントで使う機能
  imports: [
    RouterModule // routerLink / router-outlet を使うため
  ],

  // HTMLファイル（画面レイアウト）
  templateUrl: './app.html',

  // CSSファイル（デザイン）
  styleUrls: ['./app.css']
})
export class App {
  // 今回は特に処理なし（共通レイアウトのみ）
}