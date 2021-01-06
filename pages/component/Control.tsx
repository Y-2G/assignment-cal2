import React from 'react';
import styles from '../index.module.scss';

const Control = (props) => {
  return(
    <div className={styles.control}>{props.children}</div>
  );
}

export default Control;