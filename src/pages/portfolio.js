import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import Header from '../components/header/header';
import PortfolioContent from '../components/portfolio/portfolio-content/portfolio-content';

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={['Leo Reeves', 'portfolio', 'featured work']} />
    <Header
      primaryHeading={'Portfolio'}
      secondaryHeading={'Featured Work'}
    />
    <PortfolioContent />
  </Layout>
)

export default PortfolioPage;
