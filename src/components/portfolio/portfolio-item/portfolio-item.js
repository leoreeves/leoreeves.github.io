import React from 'react';
import { navigate } from 'gatsby';

import styles from './portfolio-item.module.scss'
import Image from '../../image';

function openPortfolioItem(portfolioItem) {
  navigate(portfolioItem);
}

const PortfolioItem = (props) => (
  <div className={styles.portfolioItem}>
    <div
        className={styles.imageContainer}
        onClick={() => openPortfolioItem(props.route)}
      >
      <Image filename={props.imageFilename} />
      <div className={styles.imageOverlay}></div>
    </div>
    <h3>{props.heading}</h3>
    <p>{props.description}
      {
        props.link &&
        <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.linkText}
        </a>
      }
      .
    </p>
  </div>
)

export default PortfolioItem;
