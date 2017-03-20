import React from 'react';
import 'styles/components/Shield.scss';
import p from 'images/coins/BTC-alt.svg';

export default function Shield (props) {
  return (
    <span>
      <span className="shield-left">
        BTC
      </span>
      <span className="shield-right">$1.1K</span>
    </span>
  );
}
