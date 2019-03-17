import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import Header from '../components/header/header';
import Portfolio from '../components/portfolio/portfolio';

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={['Leo Reeves', 'portfolio', 'featured work']} />
    <Header
      primaryHeading={'Portfolio'}
      secondaryHeading={'Featured Work'}
    />
    <Portfolio />
  </Layout>
)

export default PortfolioPage;
