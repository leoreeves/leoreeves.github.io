import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Header from '../components/header/header';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['Leo Reeves', 'front-end', 'developer']} />
    <Header
      primaryHeading={'Leo Reeves'}
      secondaryHeading={'Front-end Developer'}
      buttonText={'Contact Me'}
      buttonRoute={'/contact'}
    />
  </Layout>
)

export default IndexPage;
