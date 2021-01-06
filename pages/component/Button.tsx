import React from 'react';
import styles from '../index.module.scss';

const Button = (props) => {
  return (
    <button className={`${styles.button} ${props.type}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;