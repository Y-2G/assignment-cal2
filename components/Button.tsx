import React from 'react';
import styles from './index.module.scss';

// ボタンのコンポーネント
const Button = (props) => {
  return (
    <button className={`${styles.button} ${styles[props.type]}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;