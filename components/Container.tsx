import React, { useState } from 'react';
import styles from './index.module.scss';

import Screen from './Screen';
import Control from './Control';
import Line from './Line';
import Button from './Button';

import Factory from '../calculator/Factory';
import { BTN_SETTINGS, TEXT_CLEAR, TEXT_EQUAL } from '../setting/data';

// コンテナのコンポーネント
const Container = () => {
  const [history, setHistory] = useState([Factory.createCalculator()]);

  const clear = () => {
    const calc = history.slice(-1)[0];

    calc.pop();

    setHistory([...history, calc]);
  }

  // ボタンクリック時に実行する
  const onClick = (e) => {
    const value: string = e.target.textContent;

    if(value === TEXT_CLEAR) return clear();

    const calc = history.slice(-1)[0];

    calc.input(value);

    if(value === TEXT_EQUAL) calc.execute();

    setHistory([...history, calc]);
  }

  // スクリーン上部の計算過程をレンダーする
  const renderProcess = () => {
    const calc = history.slice(-1)[0];
    
    const list = calc.getList();

    const jsx = [];

    for(let i = 0; i < list.length; i++) {
      // イコールはレンダーしないようにする
      if(list[i].getValue() === TEXT_EQUAL) continue;
      jsx.push(<span key={i}>{list[i].getValue()}</span>);
    }

    return jsx;
  }

  // ボタンの行をレンダーする
  const renderControlLines = () => {
    const jsx = [];

    for(const i in BTN_SETTINGS) {
      jsx.push(<Line className={styles.line} key={i}>{renderControlButtons(Number(i))}</Line>);
    }

    return jsx;
  }

  // ボタンをレンダーする
  const renderControlButtons = (i: number) => {
    const jsx = [];

    for(const j in BTN_SETTINGS[i]) {
      jsx.push(
        <Button key={`${i}-${j}`} type={BTN_SETTINGS[i][j].type} onClick={onClick}>
          {BTN_SETTINGS[i][j].text}
        </Button>
      );
    }

    return jsx;
  }

  // TODO: コンポーネントの設計をもっと工夫したい
  return (
    <div className={styles.container}>
      <Screen>
        <Line><div className={styles.fs32}>{renderProcess()}</div></Line>
        <Line><div className={styles.fs64}>{history.slice(-1)[0].getResult()}</div></Line>
      </Screen>
      <Control>
        {renderControlLines()}
      </Control>
    </div>
  );
}

export default Container;