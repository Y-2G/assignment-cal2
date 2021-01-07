import React from 'react';
import Line from './Line';
import Button from './Button';
import styles from './index.module.scss';

// コントロールのコンポーネント
const Control = (props) => {
    // ボタンの行をレンダーする
  const renderControlLines = () => {
    const jsx = [];

    for(const i in props.data) {
      jsx.push(<Line className={styles.line} key={i}>{renderControlButtons(Number(i))}</Line>);
    }

    return jsx;
  }

  // ボタンをレンダーする
  const renderControlButtons = (i: number) => {
    const jsx = [];

    for(const j in props.data[i]) {
      jsx.push(
        <Button key={`${i}-${j}`} type={props.data[i][j].type} onClick={props.onClick}>
          {props.data[i][j].text}
        </Button>
      );
    }

    return jsx;
  }
  
  return(
    <div className={styles.control}>
      {renderControlLines()}
    </div>
  );
}

export default Control;