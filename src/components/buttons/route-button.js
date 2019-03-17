import React from 'react';
import { navigate } from 'gatsby';

import styles from './button.module.scss';

function navigateToRoute(route, external) {
  if (route) {
    if (external) {
      window.open(route, '_blank');
    } else {
      navigate(route);
    }
  }
}

const RouteButton = (props) => (
  <button
    className={`${styles.routeButton} ${props.primary ? styles.primary : styles.secondary}`}
    onClick={() => navigateToRoute(props.buttonRoute, props.buttonExternal)}
  >
    { props.buttonText }
  </button>
)

export default RouteButton;
