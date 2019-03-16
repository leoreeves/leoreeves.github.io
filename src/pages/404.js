import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import Header from '../components/header/header';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header
      primaryHeading={'404'}
      secondaryHeading={'Page Not Found'}
      buttonText={'Return Home'}
      buttonRoute={'/'}
    />
  </Layout>
)

export default NotFoundPage;
