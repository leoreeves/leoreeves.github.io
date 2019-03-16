import React from 'react';
import { navigate } from 'gatsby';

import styles from './button.module.scss';

function handleClick(route) {
  if (route && route.match(/\/[a-z]+/gm)) {
    navigate(route);
  }
}

const RouteButton = (props) => (
  <button
    className={styles.defaultButton}
    onClick={() => handleClick(props.buttonRoute)}
  >
    { props.buttonText }
  </button>
)

export default RouteButton;
