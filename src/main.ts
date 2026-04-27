// zone.js を読み込む
// ・Angularの変更検知（画面更新の自動反映）に必要
import 'zone.js';

import { bootstrapApplication } from '@angular/platform-browser';
// ・Angularアプリを起動する関数

import { App } from './app/app';
// ・ルートコンポーネント（画面の入口）

import { appConfig } from './app/app.config';
// ・Angular全体の設定（ルーティング、HTTPなど）

/**
 * Angularアプリの起動処理
 *
 * ・Appコンポーネントを起動する
 * ・appConfigで設定を適用する
 */
bootstrapApplication(App, appConfig)

  // エラー発生時の処理
  .catch(err => console.error(err));