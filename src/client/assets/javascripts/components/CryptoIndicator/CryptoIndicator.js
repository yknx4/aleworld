import React, { Component, PropTypes } from 'react';
import CoinCap from 'services/CoinCap';
import Shield from './Shield';

const {log} = console;

CoinCap.addCoinListener((a, b) => log('BTC', a, b));

export default class CryptoIndicator extends Component {
  render() {
    return (
      <Shield />
    );
  }
}

CryptoIndicator.propTypes = {
  coin: PropTypes.string
};

CryptoIndicator.defaultProps = {
  coin: 'BTC'
};
