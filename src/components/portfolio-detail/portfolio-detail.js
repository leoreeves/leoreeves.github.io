import React from 'react';

import styles from './portfolio-detail.module.scss';

const PortfolioDetail = (props) => (
  <div className={styles.portfolioDetailContainer}>
    <div className={styles.portfolioDetailRow}>
      <h3>Stack</h3>
      <p>{props.stack}</p>
    </div>
    <div className={styles.portfolioDetailRow}>
      <h3>Website</h3>
      <p>{props.stack}</p>
    </div>
  </div>
)

export default PortfolioDetail;
