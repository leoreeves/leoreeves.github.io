import React from 'react';

import styles from './portfolio.module.scss'

const Portfolio = (props) => (
  <div className={styles.portfolioContainer}>
    <div className={styles.portfolioRow}>
      <div className={styles.portfolioItem}>
        <div style={{ height: 400, maxWidth: 550, background: 'lightgrey' }}></div>
        <h3>Elliott Smith</h3>
        <p>Tribute to the musician Elliott Smith, with a biography, discography and photographs of the artist.</p>
      </div>
      <div className={styles.portfolioItem}>
        <div style={{ height: 400, maxWidth: 550, background: 'lightgrey' }}></div>
        <h3>Elliott Smith</h3>
        <p>Tribute to the musician Elliott Smith, with a biography, discography and photographs of the artist.</p>
      </div>
    </div>
    <div className={styles.portfolioRow}>
      <div className={styles.portfolioItem}>
        <div style={{ height: 400, maxWidth: 550, background: 'lightgrey' }}></div>
        <h3>Elliott Smith</h3>
        <p>Tribute to the musician Elliott Smith, with a biography, discography and photographs of the artist.</p>
      </div>
      <div className={styles.portfolioItem}>
        <div style={{ height: 400, maxWidth: 550, background: 'lightgrey' }}></div>
        <h3>Elliott Smith</h3>
        <p>Tribute to the musician Elliott Smith, with a biography, discography and photographs of the artist.</p>
      </div>
      {/* <Img /> */}
    </div>
  </div>
)

export default Portfolio;
