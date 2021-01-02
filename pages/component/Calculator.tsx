import React from 'react';
import Button from './Button';
import Screen from './Screen';

import Factory from '../util/Factory';
import Queue from '../data/Queue';
import Process from '../process/Process';

import styles from '../index.module.scss';

// 10進数として扱う最大桁数
const MAX_DECIMAL_DIGITS: number = 9;

type CalcState = {
  result: string,
  queue: Queue,
  history: Queue[],
}

class Calculator extends React.Component<{}, CalcState> {
  constructor(props) {
    super(props);

    const r: string = '0';
    
    const q: Queue = Factory.createQueue();
    
    const h: Queue[] = [];

    this.state = { result: r, queue: q, history: h };
  }

  async calc() {
    // 計算結果を取得する
    const number: number = this.state.queue.execute();
    
    // 計算結果を文字列に変換する
    const numstr: string = String(number);

    // 計算結果の桁数を取得する
    const digit: number = numstr.length;

    // 計算結果にカンマをつける
    let nr: string = numstr.replace(/(\d)(?=(\d\d\d)+$)/g, '$1,');

    // 計算結果が9桁以上の場合は指数表記に変換する
    if(digit > MAX_DECIMAL_DIGITS) nr = String(number.toExponential());

    const nq = Factory.createQueue();

    const nh = this.state.history.concat(nq);
    
    this.setState({ result: nr, queue: nq, history: nh });
  }

  async clickOperatorButton(o: Process) {
    // 数値に変換するためカンマを削除する
    const s: string = this.state.result.replace(/,/g, '');

    // 小数点を考慮するため parseFloat を使用する
    const n: number = parseFloat(s);

    // 数字用の処理を生成する
    const p: Process = Factory.createNumber(n);

    // 数値用の処理を保存する
    this.state.queue.append(p);

    // 演算子用の処理を保存する
    this.state.queue.append(o);

    // イコールが押された場合は計算を実行する
    if(o.getValue() === '=') return await this.calc();

    this.setState({ result: '0' });
  }

  clickClearButton(): void {
    const q = Factory.createQueue();

    const h = this.state.history.concat(q)
    
    this.setState({ result: '0', queue: q, history: h });
  }

  clickDotButton(): void {
    if(this.state.result.indexOf('.') > 0) return;

    const r: string = this.state.result.concat('.');

    this.setState({ result: r });
  }

  // 小数点を考慮するため数値ではなく文字列で管理する
  clickNumberButton(s: string): void {
    // 先頭のゼロおよびカンマを削除する
    const now: string = this.state.result.replace(/^0$|,/g, '');

    // 入力された数値文字を追加する
    const tmp: string = now.concat(s);

    // 9桁以上の場合はスルー
    if(tmp.length > MAX_DECIMAL_DIGITS) return;
    
    // カンマをつける
    const r: string = tmp.replace(/(\d)(?=(\d\d\d)+$)/g, '$1,');
    
    this.setState({ result: r });
  }

  render() {
    // TODO: ハードコーディングやめる
    // TODO: ループ等で生成できるようにする
    return (
      <div className={styles.container}>
        <Screen process={this.state.queue.toString()} result={this.state.result} />
        <div className={styles.controller}>
          <div className={styles.row}>
            <div className={styles.cell25}>
              <Button text="C" type={styles.normal} color={styles.gray} handleClick={() => this.clickClearButton()} />
            </div>
            <div className={styles.cell25} />
            <div className={styles.cell25} />
            <div className={styles.cell25}>
              <Button text="÷" type={styles.operator} color={styles.orange} handleClick={() => this.clickOperatorButton(Factory.createDivide())}/>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.cell25}>
              <Button text="7" type={styles.normal} color={styles.darkgray} handleClick={() => this.clickNumberButton('7')} />
            </div>
            <div className={styles.cell25}>
              <Button text="8" type={styles.normal} color={styles.darkgray} handleClick={() => this.clickNumberButton('8')} />
            </div>
            <div className={styles.cell25}>
              <Button text="9" type={styles.normal} color={styles.darkgray} handleClick={() => this.clickNumberButton('9')} />
            </div>
            <div className={styles.cell25}>
              <Button text="×" type={styles.operator} color={styles.orange} handleClick={() => this.clickOperatorButton(Factory.createMultiply())}/>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.cell25}>
              <Button text="4" type={styles.normal} color={styles.darkgray} handleClick={() => this.clickNumberButton('4')} />
            </div>
            <div className={styles.cell25}>
              <Button text="5" type={styles.normal} color={styles.darkgray} handleClick={() => this.clickNumberButton('5')} />
            </div>
            <div className={styles.cell25}>
              <Button text="6" type={styles.normal} color={styles.darkgray} handleClick={() => this.clickNumberButton('6')} />
            </div>
            <div className={styles.cell25}>
              <Button text="-" type={styles.operator} color={styles.orange} handleClick={() => this.clickOperatorButton(Factory.createMinus())}/>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.cell25}>
              <Button text="1" type={styles.normal} color={styles.darkgray} handleClick={() => this.clickNumberButton('1')} />
            </div>
            <div className={styles.cell25}>
              <Button text="2" type={styles.normal} color={styles.darkgray} handleClick={() => this.clickNumberButton('2')} />
            </div>
            <div className={styles.cell25}>
              <Button text="3" type={styles.normal} color={styles.darkgray} handleClick={() => this.clickNumberButton('3')} />
            </div>
            <div className={styles.cell25}>
              <Button text="+" type={styles.operator} color={styles.orange} handleClick={() => this.clickOperatorButton(Factory.createPlus())} />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.cell50}>
              <Button text="0" type={styles.wide} color={styles.darkgray} handleClick={() => this.clickNumberButton('0')} />
            </div>
            <div className={styles.cell25}>
              <Button text="." type={styles.normal} color={styles.darkgray} handleClick={() => this.clickDotButton()} />
            </div>
            <div className={styles.cell25}>
              <Button text="=" type={styles.operator} color={styles.orange} handleClick={() => this.clickOperatorButton(Factory.createEqual())} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;