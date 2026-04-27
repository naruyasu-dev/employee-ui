// Angular のテスト用機能 TestBed を読み込む
// TestBed は、Angular コンポーネントをテスト環境で動かすための道具
import { TestBed } from '@angular/core/testing';

// テスト対象の App コンポーネントを読み込む
// ./app は app.ts を意味する
import { App } from './app';

// describe はテストのグループを作る
// ここでは App コンポーネントに関するテストをまとめている
describe('App', () => {

  // beforeEach は、各テストの前に毎回実行される処理
  // async を付けているのは、Angular のコンパイル処理が非同期だから
  beforeEach(async () => {

    // Angular のテスト用モジュールを設定する
    await TestBed.configureTestingModule({

      // standalone コンポーネントの場合、declarations ではなく imports に書く
      // App コンポーネントをテスト環境で使えるようにしている
      imports: [App],

    // コンポーネントのテンプレートや依存関係をコンパイルする
    }).compileComponents();
  });

  // 1つ目のテスト
  // App コンポーネントが作成できるかを確認する
  it('should create the app', () => {

    // App コンポーネントのテスト用インスタンスを作成する
    // fixture は、コンポーネント本体と画面DOMをまとめて扱う入れ物
    const fixture = TestBed.createComponent(App);

    // 作成された App コンポーネントの TypeScript クラス本体を取り出す
    const app = fixture.componentInstance;

    // app が存在していることを確認する
    // toBeTruthy() は null / undefined / false ではないことを確認する
    expect(app).toBeTruthy();
  });

  // 2つ目のテスト
  // App の画面にタイトルが表示されるかを確認する
  it('should render title', async () => {

    // App コンポーネントのテスト用インスタンスを作成する
    const fixture = TestBed.createComponent(App);

    // Angular の非同期処理が落ち着くまで待つ
    // 画面描画やバインディング処理が終わるのを待つため
    await fixture.whenStable();

    // 実際に描画された HTML 要素を取り出す
    // nativeElement はブラウザ上の DOM に近いもの
    const compiled = fixture.nativeElement as HTMLElement;

    // h1 要素の文字列に 'Hello, employee-ui' が含まれているか確認する
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, employee-ui');
  });
});