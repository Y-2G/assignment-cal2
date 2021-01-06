import React from 'react';
import styles from '../index.module.scss';

const Line = (props) => {
  return(
    <div className={`${styles.line} ${props.fontsize}`}>{props.children}</div>
  );
}

export default Line;