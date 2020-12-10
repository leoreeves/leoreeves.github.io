import React from 'react';
import Header from '../../header/header';

const PortfolioHeader = (props) => (
  <Header 
    primaryHeading={props.primaryHeading}
    secondaryHeading={props.secondaryHeading}
    imageFileName={props.imageFileName}
    buttonRoute={props.buttonRoute}
    buttonRouteSecondary={props.buttonRouteSecondary}
    buttonText={'Demo'}
    buttonTextSecondary={'Code'}
    buttonExternal={true}
    buttonExternalSecondary={true}
  />
)

export default PortfolioHeader;