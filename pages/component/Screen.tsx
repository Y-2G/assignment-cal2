import React from 'react';
import styles from '../index.module.scss';

const Screen = (props) => {
  return(
    <div className={styles.screen}>{props.children}</div>
  );
}

export default Screen;