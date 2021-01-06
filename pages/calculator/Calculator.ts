import Process from './Process';
import Converter from './Converter';
import Factroy from './Factory';

const MAX_DECIMAL_DIGITS: number = 9;

class Calculateor {

  private list: Process[] = [];

  private result: string = '0';

  private isInitialize: boolean = false;

  setResult(s: string) {
    if((this.result + s).length > MAX_DECIMAL_DIGITS) return;
    this.result = this.result !== '0' ? this.result.concat(s) : s;
  }

  getResult(): string {
    return Converter.convert(this.result);
  }

  getProcess(): string {
    return this.list.length > 0 ? this.list[0].toString() : '';
  }

  input(s: string) {
    if(this.isInitialize === true) this.clear();

    // 数字が入力された場合
    if(isNaN(Number(this.result + s)) === false) return this.setResult(s);

    // コマンドを生成
    const n: Process = Factroy.createCommand(this.result);
    const o: Process = Factroy.createCommand(s);

    // コマンドを保存
    this.push(n);
    this.push(o);

    // 演算子コマンドが入力されたら値をゼロにする
    this.result = '0';
  }

  push(p: Process): void {
    const i: number = this.list.length - 1;

    if(i >= 0) this.list[i].setNext2(p);
    
    this.list.push(p);
  }

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

    const i: number = this.list.length - 1;

    this.list[i].setNext2(null);

  }

  clear() {
    this.result = '0';

    this.list = [];

    this.isInitialize = false;
  }

  execute(): string {
    if(this.list.length === 0) return '0';

    const result: number = this.list[0].start();

    this.result = String(result)

    if(this.result.length > MAX_DECIMAL_DIGITS) this.result = result.toExponential();

    this.isInitialize = true;
  }

}

export default Calculateor;