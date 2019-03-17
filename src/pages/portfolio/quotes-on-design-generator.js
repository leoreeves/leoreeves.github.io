import React from 'react';

import Header from '../../components/header/header';
import Layout from '../../components/layout/layout';

const QuotesOnDesignPage = () => (
  <Layout>
    <Header
      primaryHeading={'Quotes on Design Generator'}
      secondaryHeading={'HTML, CSS, jQuery, AJAX'}
      imageFileName={'quotes-on-design-generator.jpg'}
      buttonText={'Demo'}
      buttonRoute={'/projects/quotes-on-design-generator/'}
      buttonTextSecondary={'Code'}
      buttonRouteSecondary={'https://github.com/LeoReeves/projects/tree/master/quotes-on-design-generator'}
      buttonExternalSecondary={true}
    />
  </Layout>
)

export default QuotesOnDesignPage;
