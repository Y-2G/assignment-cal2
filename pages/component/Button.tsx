import React from 'react';
import styles from '../index.module.scss';

function Button(props) {
  return (
    <button
      className={`${styles.button} ${props.type} ${props.color}`}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
}

export default Button;