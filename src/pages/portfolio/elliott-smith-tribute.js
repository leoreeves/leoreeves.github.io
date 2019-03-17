import React from 'react';

import Layout from '../../components/layout/layout';

import Header from '../../components/header/header';

const ElliottSmithTributePage = () => (
  <Layout>
    <Header
      primaryHeading={'Elliott Smith Tribute'}
      secondaryHeading={'HTML, CSS, Bootstrap'}
      imageFileName={'elliott-smith-tribute.jpg'}
      buttonText={'Demo'}
      buttonRoute={'/projects/elliott-smith-tribute-page/'}
      buttonTextSecondary={'Code'}
      buttonRouteSecondary={'https://github.com/LeoReeves/projects/tree/master/elliott-smith-tribute-page'}
      buttonExternalSecondary={true}
    />
  </Layout>
)

export default ElliottSmithTributePage;
