import React from 'react';
import styles from './index.module.scss';

// スクリーンのコンポーエント
const Screen = (props) => {
  return(
    <div className={styles.screen}>{props.children}</div>
  );
}

export default Screen;