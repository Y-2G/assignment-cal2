import React from 'react';
import styles from '../index.module.scss';

function Screen(props) {
  return (
    <div className={styles.screen}>
      <div className={styles.process}>{props.process}</div>
      <div className={styles.result}>{props.result}</div>
    </div>
  );
}

export default Screen;