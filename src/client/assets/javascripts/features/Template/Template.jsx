import React,{Component, PropTypes} from 'react';
import 'styles/components/Template.scss';

import {
  MainContainer,
} from 'components/layout';

import Header from './Header';
import Footer from './Footer';

export default class Template extends Component {
    render() {
      const {children} = this.props;
        return (
          <div>
            <Header />
            <MainContainer>
              {children}
              <Footer />
            </MainContainer>
          </div>
        );
    }
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
};
