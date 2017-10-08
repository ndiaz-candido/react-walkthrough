import React from 'react';
import styles from './BoilerVerdict.css';

export default function BoilerVerdict(props) {
  if (props.celsius >= 100) {
    return <p className={styles.boiling}>The water would boil</p>;
  }

  return <p>The water would not boil</p>;
}
