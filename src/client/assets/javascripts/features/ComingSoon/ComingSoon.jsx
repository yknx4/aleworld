import React from 'react';
import 'styles/components/ComingSoon.scss';
import AwesomeLink from 'components/AwesomeLink';

export default class ComingSoon extends React.Component {
  render() {
    return (
      <section className="comingsoon">
        <section className="header">
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
        </section>
      </section>
    );
  }
}
