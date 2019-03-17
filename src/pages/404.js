import React from 'react';

import Header from '../components/header/header';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

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
