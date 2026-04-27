// Employee という型を外部ファイルから使えるように公開する
// export を付けることで、他の TypeScript ファイルから import できる
export interface Employee {

  // 社員ID
  // number は数値型
  // 例: 1, 2, 100
  id: number;

  // 社員名
  // string は文字列型
  // 例: "山田太郎", "田中花子"
  name: string;

  // 部署名
  // string は文字列型
  // 例: "営業部", "開発部", "人事部"
  department: string;
}