import React from 'react';

import Header from '../components/header/header';
import Layout from '../components/layout/layout';

class PortfolioDetail extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = props.location.state;
  }

  componentDidMount() {
    if (this.state) {
      this.setStateStorage();
    } else {
      this.getStateStorage();
    }
  }

  setStateStorage = () => {
    window.localStorage.setItem('state', JSON.stringify(this.state));
  }

  getStateStorage = () => {
    this.setState(JSON.parse(window.localStorage.getItem('state')));
  }

  render() {
    return (
      this.state &&
      <Layout>
        {
          <Header
            primaryHeading={this.state.primaryHeading}
            secondaryHeading={this.state.secondaryHeading}
            imageFileName={this.state.imageFileName}
            buttonText={'Demo'}
            buttonRoute={this.state.buttonRoute}
            buttonTextSecondary={'Code'}
            buttonRouteSecondary={this.state.buttonRouteSecondary}
            buttonExternal={true}
            buttonExternalSecondary={true}
          />
        }
      </Layout>
    )
  }
}

export default PortfolioDetail;
