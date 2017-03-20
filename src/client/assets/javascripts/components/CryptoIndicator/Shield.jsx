import React, {PropTypes} from 'react';
import 'styles/components/Shield.scss';

export default function Shield ({left, right}) {
  return (
    <span>
      <span className="shield-left">
        {left}
      </span>
      <span className="shield-right">{right}</span>
    </span>
  );
}

Shield.propTypes = {
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
};
