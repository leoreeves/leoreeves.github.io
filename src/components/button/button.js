import React from 'react';
import { navigate } from 'gatsby';

import styles from './button.module.css'

function handleClick(route) {
  navigate(route);
}

const Button = (props) => (
  <button
    className={styles.defaultButton}
    onClick={() => handleClick(props.buttonRoute)}
  >
    { props.buttonText }
  </button>
)

export default Button;
