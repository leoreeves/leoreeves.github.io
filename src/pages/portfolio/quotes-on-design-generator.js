import React from 'react';

import Layout from '../../components/layout/layout';

import Header from '../../components/header/header';
import PortfolioDetail from '../../components/portfolio-detail/portfolio-detail';

const QuotesOnDesignPage = (props) => (
  <Layout>
    <Header
      primaryHeading={'Quotes on Design Generator'}
      secondaryHeading={'Minimial quote generator powered by Quotes on Design API.'}
      imageFileName={'quotes-on-design-generator.jpg'}
    />
    <PortfolioDetail
      stack={'HTML, CSS, jQuery, AJAX'}
    />
  </Layout>
)

export default QuotesOnDesignPage;
