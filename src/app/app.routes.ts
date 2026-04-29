// Angular Router の Routes 型を読み込む
// Routes は「URL と Component の対応表」を作るための型
import { Routes } from '@angular/router';

// トップ画面用の Component を読み込む
// path: '' のときに表示する
import { HomeComponent } from './components/home.component';

// 社員一覧画面用の Component を読み込む
// path: 'employees' のときに表示する
import { EmployeeListComponent } from './components/employee-list.component';

// このアプリについて画面用の Component を読み込む
// path: 'about' のときに表示する
import { AboutComponent } from './components/about.component';

// ルーティング設定
//
// URL が来たときに、どの Component を表示するかを決める対応表
//
// この routes は app.config.ts の
// provideRouter(routes)
// で Angular に登録される
export const routes: Routes = [

  {
    // path: '' はトップページを意味する
    //
    // URL:
    // http://localhost:4200/
    //
    // Tomcat配置時:
    // http://localhost:8080/employee-ui/
    path: '',

    // path: '' に一致したら HomeComponent を表示する
    //
    // 表示される場所は app.ts の
    // <router-outlet></router-outlet>
    component: HomeComponent
  },

  {
    // path: 'employees' は社員一覧画面を意味する
    //
    // URL:
    // http://localhost:4200/employees
    //
    // Tomcat配置時:
    // http://localhost:8080/employee-ui/employees
    path: 'employees',

    // path: 'employees' に一致したら EmployeeListComponent を表示する
    //
    // EmployeeListComponent の template が
    // <router-outlet> の場所に表示される
    component: EmployeeListComponent
  },

  {
    // path: 'about' は「このアプリについて」画面を意味する
    //
    // URL:
    // http://localhost:4200/about
    //
    // Tomcat配置時:
    // http://localhost:8080/employee-ui/about
    path: 'about',

    // path: 'about' に一致したら AboutComponent を表示する
    //
    // AboutComponent の template が
    // <router-outlet> の場所に表示される
    component: AboutComponent
  }
];