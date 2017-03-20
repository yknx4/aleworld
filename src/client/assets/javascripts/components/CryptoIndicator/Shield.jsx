import React, {PropTypes} from 'react';
import 'styles/components/Shield.scss';

export default function Shield ({left, right}) {
  return (
    <div className="shield">
      <div className="shield-left">
        {left}
      </div>
      <div className="shield-right">{right}</div>
    </div>
  );
}

Shield.propTypes = {
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
};
