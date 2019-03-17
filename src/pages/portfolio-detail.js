import React from 'react';

import Layout from '../components/layout/layout';
import Header from '../components/header/header';

const PortfolioDetail = ({location}) => (
  <Layout>
    {
      location.state &&
      <Header
        primaryHeading={location.state.primaryHeading}
        secondaryHeading={location.state.secondaryHeading}
        imageFileName={location.state.imageFileName}
        buttonText={'Demo'}
        buttonRoute={location.state.buttonRoute}
        buttonTextSecondary={'Code'}
        buttonRouteSecondary={location.state.buttonRouteSecondary}
        buttonExternalSecondary={true}
      />
    }
    </Layout>
)

export default PortfolioDetail;
