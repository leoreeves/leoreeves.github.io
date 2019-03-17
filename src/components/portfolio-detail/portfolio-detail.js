import React from 'react';

import styles from './portfolio-detail.module.scss';

const PortfolioDetail = (props) => (
  <div className={styles.portfolioDetailContainer}>
    <div className={styles.portfolioDetailRow}>
      <div className={styles.portfolioDetailCol}>
        <h3>Stack</h3>
      </div>
      <div className={styles.portfolioDetailCol}>
        <p>{props.stack}</p>
      </div>
    </div>
    <div className={styles.portfolioDetailRow}>
      <div className={styles.portfolioDetailCol}>
        <h3>Website</h3>
      </div>
      <div className={styles.portfolioDetailCol}>
        <a
          href={props.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.websiteName}
        </a>
      </div>
    </div>
    <div className={styles.portfolioDetailRow}>
      <div className={styles.portfolioDetailCol}>
        <h3>Code</h3>
      </div>
      <div className={styles.portfolioDetailCol}>
        <a
          href={props.code}
          target="_blank"
          rel="noopener noreferrer"
        >Github</a>
      </div>
    </div>
  </div>
)

export default PortfolioDetail;
