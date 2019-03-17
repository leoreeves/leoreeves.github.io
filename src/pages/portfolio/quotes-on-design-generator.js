import React from 'react';

import Layout from '../../components/layout/layout';

import Header from '../../components/header/header';

const QuotesOnDesignPage = () => (
  <Layout>
    <Header
      primaryHeading={'Quotes on Design Generator'}
      secondaryHeading={'HTML, CSS, jQuery, AJAX'}
      imageFileName={'quotes-on-design-generator.jpg'}
      buttonText={'Demo'}
      buttonRoute={'/projects/quotes-on-design-generator/'}
      buttonTextSecondary={'Code'}
      buttonExternalSecondary={'https://github.com/LeoReeves/projects/tree/master/quotes-on-design-generator'}
    />
  </Layout>
)

export default QuotesOnDesignPage;
