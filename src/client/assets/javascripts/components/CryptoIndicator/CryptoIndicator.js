import React, { Component, PropTypes } from 'react';
import CoinCap from 'services/CoinCap';
import Shield from './Shield';
import numeral from 'numeral';

const {info} = console;

export default class CryptoIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.updateValue = this.updateValue.bind(this);
  }
  componentDidMount () {
    CoinCap.addCoinListener(this.updateValue, this.props.coin);
    $.get(`https://www.coincap.io/page/${this.props.coin}`).then((r) => {
      if(r && r.usdPrice) {
        this.updateValue({price: r.usdPrice});
      }
    });
  }

  componentWillUnmount () {
    CoinCap.removeCoinListener(this.updateValue, this.props.coin);
  }

  updateValue ({price}) {
    info(`Updating ${this.props.coin} price: ${price}`);
    this.setState({
      value: price
    });
  }

  render() {
    const {coin} = this.props;
    const {value} = this.state;
    const formatedValue = value == null ? '$' : numeral(value).format('($0.00a)');
    return (
      <Shield left={coin} right={formatedValue} iconClass={`cc ${coin}-alt`} />
    );
  }
}

CryptoIndicator.propTypes = {
  coin: PropTypes.string
};

CryptoIndicator.defaultProps = {
  coin: 'BTC'
};
