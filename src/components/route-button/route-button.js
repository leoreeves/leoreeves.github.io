import React from 'react';
import { navigate } from 'gatsby';

import styles from './route-button.module.scss';

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
    className={`${styles.routeButton} ${ props.secondary ? styles.secondary : styles.primary}`}
    onClick={() => navigateToRoute(props.buttonRoute, props.buttonExternal)}
  >
    { props.buttonText }
  </button>
)

export default RouteButton;
