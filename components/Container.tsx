import React, { useState } from 'react';
import styles from './index.module.scss';

import Screen from './Screen';
import Control from './Control';

import Factory from '../calculators/Factory';
import { BTN_SETTINGS, TEXT_CLEAR, TEXT_EQUAL } from '../constants/data';

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

  // TODO: コンポーネントの設計をもっと工夫したい
  return (
    <div className={styles.container}>
      <Screen data={history.slice(-1)[0]} />
      <Control data={BTN_SETTINGS} onClick={onClick} />
    </div>
  );
}

export default Container;