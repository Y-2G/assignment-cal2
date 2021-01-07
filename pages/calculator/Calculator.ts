import Command from './Command';
import Converter from './Converter';
import Factroy from './Factory';
import { MAX_DIGITS } from '../setting/data';

class Calculateor {

  private list: Command[] = [];

  private result: string = '0';

  // 配列を取得する
  getList(): Command[] {
    return this.list;
  }

  // 結果を取得する
  getResult(): string {
    return Converter.formatForDisplay(this.result);
  }

  // 配列末尾のインデックスを取得する
  getLastIndex(): number {
    return this.list.length > 0 ? this.list.length - 1 : 0;
  }

  // 結果を設定する
  setResult(s: string): void {
    // 結果を一時保存する
    const result = this.result.concat(s);

    // 設定した桁数を超えていたら何もしない
    if(result.length > MAX_DIGITS) return;
    
    // 文字列処理を行って結果を保存する
    this.result = Converter.zeroSuppress(result);
  }

  // 配列にコマンドを追加する
  push(c: Command): void {

    // 等価コマンドに続けて入力した際に配列を初期化する
    try {

      const i: number = this.getLastIndex();

      if(this.list[i]) this.list[i].setNext(c);
    
    } catch(e) {
    
      this.list = [];
    
    }
    this.list.push(c);
  }

  // リストからコマンドを削除する
  pop(): void {
    // TODO: UX的にどうか？ (直前の入力に続けられたほうが自然？)
    // 後方２つの要素を削除している
    // コマンドを順次実行する流れで数字と演算子をひと塊とした方が処理しやすいため
    this.result = '0';

    if(this.list.length === 0) return;

    this.list.pop();

    if(this.list.length === 0) return;

    this.list.pop();

    if(this.list.length === 0) return;

    const i: number = this.getLastIndex();

    this.list[i].setNext(null);
  }

  // コンポーネントからの入力を処理する
  input(s: string): void {
    // 数字が入力されたら結果に保存する
    if(isNaN(Number(this.result + s)) === false) return this.setResult(s);

    // 演算子が入力されたらコマンドを生成する
    const n: Command = Factroy.createCommand(this.result);

    const o: Command = Factroy.createCommand(s);

    this.push(n);

    this.push(o);

    this.result = '0';
  }

  // クラスを初期化する
  clear(): void {
    this.list = [];

    this.result = '0';
  }

  // コマンドを順次実行する
  execute(): string {
    if(this.list.length === 0) return '0';

    const result: number = this.list[0].start();

    this.result = String(result);
  }

}

export default Calculateor;