import React, { useState } from 'react';
import styles from '../index.module.scss';

import Calculator from '../calculator/Calculator';
import Screen from './Screen';
import Control from './Control';
import Line from './Line';
import Button from './Button';

import { BTN_SETTINGS, CREAR_BTN_TEXT, EQUAL_BTN_TEXT } from '../setting/data';

const Container = () => {
  const [history, setHistory] = useState([new Calculator()]);

  const clear = () => {
    const calc = history.slice(-1)[0];

    calc.pop();

    setHistory([...history, calc]);
  }

  const onClick = (e) => {
    const value: string = e.target.textContent;

    if(value === CREAR_BTN_TEXT) return clear();

    const calc = history.slice(-1)[0];

    calc.input(value);

    if(value === EQUAL_BTN_TEXT) calc.execute();

    setHistory([...history, calc]);
  }

  const renderControlLines = () => {
    const rows = [];

    for(const i in BTN_SETTINGS) {
      rows.push(<Line className={styles.line} key={i}>{renderControlButtons(Number(i))}</Line>);
    }

    return rows;
  }

  const renderControlButtons = (i: number) => {
    const cells = [];

    for(const j in BTN_SETTINGS[i]) {
      cells.push(
        <Button key={`${i}-${j}`} type={BTN_SETTINGS[i][j].type} onClick={onClick}>
          {BTN_SETTINGS[i][j].text}
        </Button>
      );
    }

    return cells;
  }

  return(
    <div className={styles.container}>
      <Screen>
        <Line fontsize={styles.fs32}>{history.slice(-1)[0].getProcess()}</Line>
        <Line fontsize={styles.fs64}>{history.slice(-1)[0].getResult()}</Line>
      </Screen>
      <Control>
        {renderControlLines()}
      </Control>
    </div>
  );
}

export default Container;