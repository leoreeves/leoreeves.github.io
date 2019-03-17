import React from 'react';
import { navigate } from 'gatsby';

import styles from './button.module.scss';

function navigateToRoute(route, external) {
  console.log('External ', external);
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
    className={styles.defaultButton}
    onClick={() => navigateToRoute(props.buttonRoute, props.buttonExternal)}
  >
    { props.buttonText }
  </button>
)

export default RouteButton;
