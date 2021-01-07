import React from 'react';
import Line from './Line';
import styles from './index.module.scss';

import { TEXT_EQUAL } from '../constants/data';

// スクリーンのコンポーエント
const Screen = (props) => {
  // スクリーン上部の計算過程をレンダーする
  const renderProcess = () => {
    const list = props.data.getList();

    const jsx = [];

    for(let i = 0; i < list.length; i++) {
      // イコールはレンダーしないようにする
      if(list[i].getValue() === TEXT_EQUAL) continue;
      jsx.push(<span key={i}>{list[i].getValue()}</span>);
    }

    return jsx;
  }
  
  return(
    <div className={styles.screen}>
        <Line><div className={styles.fs32}>{renderProcess()}</div></Line>
        <Line><div className={styles.fs64}>{props.data.getResult()}</div></Line>
    </div>
  );
}

export default Screen;