// Angular のルーティング用の型 Routes を読み込む
// Routes は「URL と表示するコンポーネントの対応表」を定義するための型
import { Routes } from '@angular/router';

// アプリ全体のルート設定を定義する
// export を付けることで、他のファイルから import して使える
//
// 例：app.config.ts などで
// provideRouter(routes)
// のように使う
export const routes: Routes = [

  // 現在は空
  // つまり、URLごとの画面遷移ルールはまだ登録されていない
];