import React from 'react';
import styles from './index.module.scss';

// ラインのコンポーネント
const Line = (props) => <div className={styles.line}>{props.children}</div>

export default Line;