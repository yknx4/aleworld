import React, { Component, PropTypes } from 'react';
import CoinCap from 'services/CoinCap';

const {log} = console;

export default class CryptoIndicator extends Component {
  render() {
    return (
      <div />
    );
  }
}

CryptoIndicator.propTypes = {
  coin: PropTypes.string
};

CryptoIndicator.defaultProps = {
  coin: 'BTC'
};
