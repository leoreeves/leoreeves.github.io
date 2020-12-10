import React from 'react';

import styles from './portfolio-gallery.module.scss'
import PortfolioItem from '../portfolio-item/portfolio-item';

import portfolioData from '../../../data/portfolio';

const PortfolioGallery = () => (
  <section className={styles.portfolioContainer}>
    <div className={styles.portfolioRow}>
      { 
        portfolioData.map((item, i) => {
          return (
            <PortfolioItem
              imageFileName={item.image}
              primaryHeading={item.primary_heading}
              description={item.description}
              link={item.link}
              linkText={item.link_text}
              id={item.name}
              key={i}
            />
          )
        })
      }
    </div>
  </section>
)

export default PortfolioGallery;
