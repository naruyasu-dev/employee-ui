// Angular アプリ全体の設定型 ApplicationConfig を読み込む
// provideBrowserGlobalErrorListeners は、ブラウザ上のグローバルエラーを Angular が扱えるようにする設定
// provideZoneChangeDetection は、画面更新の検知方法を設定するための機能
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';

// Angular のルーティング機能を有効にするための設定
// URL に応じて表示するコンポーネントを切り替えるために使う
import { provideRouter } from '@angular/router';

// HTTP通信を使えるようにするための設定
// Spring Boot の REST API を呼び出す EmployeeService で必要
import { provideHttpClient } from '@angular/common/http';

// ルート定義を読み込む
// app.routes.ts に書かれている routes を使う
import { routes } from './app.routes';

// Angular アプリ全体の設定を定義する
// main.ts の bootstrapApplication(App, appConfig) で使用される
export const appConfig: ApplicationConfig = {

  // providers は、Angular アプリ全体で使う機能を登録する場所
  providers: [

    // ブラウザ全体で発生したエラーを Angular 側で扱えるようにする
    // 例：未処理エラー、Promise のエラーなど
    provideBrowserGlobalErrorListeners(),

    // Angular の変更検知設定
    //
    // eventCoalescing: true は、
    // 複数のイベントによる画面更新をまとめて効率よく処理する設定
    provideZoneChangeDetection({
      eventCoalescing: true
    }),

    // ルーティング機能を有効にする
    // routes の内容に従って画面遷移できるようにする
    provideRouter(routes),

    // HTTP通信機能を有効にする
    //
    // これがないと EmployeeService などで HttpClient を使うときに
    // エラーになる
    provideHttpClient()
  ]
};