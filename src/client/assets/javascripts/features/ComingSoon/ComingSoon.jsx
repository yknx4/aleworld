import React from 'react';
import a from 'styles/components/ComingSoon.scss';
import AwesomeLink from 'components/AwesomeLink';
import { Row, Col } from 'react-bootstrap';
import CryptoIndicator from 'components/CryptoIndicator';

export default class ComingSoon extends React.Component {
  render() {
    return (
      <Row componentClass="section" className="comingsoon vertical-center">
          <Col xs={12} componentClass="section" className="header">
            <Row componentClass="section">
              <h1>Ale.World❤︎</h1>
              <hr />
              <p>
                Coming Soon. Visit <a href="https://yknx4.github.io/blog">my blog</a>.
              </p>
              <span>
                <AwesomeLink name="facebook" href="//www.facebook.com/yknx4" />
                <AwesomeLink name="github-alt" href="//www.github.com/yknx4" />
                <AwesomeLink name="linkedin" href="//www.linkedin.com/in/yknx4/" />
                <AwesomeLink name="google" href="mailto:yknx.4.b@gmail.com" />
                <AwesomeLink name="envelope" href="mailto:me@ale.world" />
              </span>
              <small>Ale Figueroa ❤︎</small>
            </Row>
            <Row componentClass="section">
              <CryptoIndicator />
            </Row>
          </Col>
      </Row>
    );
  }
}
