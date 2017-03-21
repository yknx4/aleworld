import React, {PropTypes} from 'react';
import 'styles/components/Shield.scss';
import 'styles/vendor/cryptocoins.css';

export default function Shield ({left, right, iconClass}) {
  return (
    <div className="shield">
      <div className="shield-left">
        {iconClass && <i className={iconClass} />}
        <span>{left}</span>
      </div>
      <div className="shield-right">{right}</div>
    </div>
  );
}

Shield.propTypes = {
  iconClass: PropTypes.string,
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
};
