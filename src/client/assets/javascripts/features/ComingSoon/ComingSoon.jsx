import React from 'react';
import 'styles/components/ComingSoon.scss';
import AwesomeLink from 'components/AwesomeLink';
import { Row, Col } from 'react-bootstrap';
import CryptoIndicator from 'components/CryptoIndicator';
import logo from 'images/aleworld-logo.png';

export default class ComingSoon extends React.Component {
  render() {
    return (
      <Row className="comingsoon vertical-center text-center">
        <Col xs={12} className="header">
          <Row>
            <div className="logo" />
            <h1>ale<span className="right">world</span></h1>
              <hr />
              <p>
                Coming Soon. Visit <a href="https://yknx4.github.io/blog">my blog</a>.
              </p>
              <span >
                <AwesomeLink name="facebook" href="//www.facebook.com/yknx4" />
                <AwesomeLink name="github-alt" href="//www.github.com/yknx4" />
                <AwesomeLink name="linkedin" href="//www.linkedin.com/in/yknx4/" />
                <AwesomeLink name="google" href="mailto:yknx.4.b@gmail.com" />
                <AwesomeLink name="envelope" href="mailto:me@ale.world" />
              </span>
              <small>Ale Figueroa ❤︎</small>
            </Row>
            <Row className="crypto">
              <Col xs={12}>
                <CryptoIndicator coin="BTC" />
                <CryptoIndicator coin="DASH" />
                <CryptoIndicator coin="ETH" />
              </Col>
            </Row>
          </Col>
      </Row>
    );
  }
}
