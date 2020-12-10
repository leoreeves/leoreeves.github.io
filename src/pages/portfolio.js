import React from 'react';
import { Router } from '@reach/router';

import Header from '../components/header/header';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import PortfolioHeader from '../components/portfolio/portfolio-header/portfolio-header';
import PortfolioGallery from '../components/portfolio/portfolio-gallery/portfolio-gallery';

import portfolioData from '../data/portfolio';

const Default = () => (
  <div>
    <Header
      primaryHeading={'Portfolio'}
    />
    <PortfolioGallery />
  </div>
)

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={['Leo Reeves', 'portfolio']} />
    <Router>
      <Default path="portfolio"/>
      {
        portfolioData.map((item, i) => {
          return (
            <PortfolioHeader
              primaryHeading={item.primary_heading}
              secondaryHeading={item.secondary_heading}
              imageFileName={item.image}
              buttonRoute={item.button_route}
              buttonRouteSecondary={item.button_route_secondary}
              path={`portfolio/${item.name}`}
              key={i}
            />
          )
        })
      }
    </Router>
  </Layout>
)

export default PortfolioPage;
