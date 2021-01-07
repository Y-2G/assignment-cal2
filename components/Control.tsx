import React from 'react';
import styles from './index.module.scss';

// コントロールのコンポーネント
const Control = (props) => {
  return(
    <div className={styles.control}>{props.children}</div>
  );
}

export default Control;