import React, {PropTypes} from 'react';

export default function Nav({children, className}) {
  return (
    <div className="nav-container">
      <nav>
        <div className={`nav-bar ${className}`}>
          {children}
        </div>
      </nav>
    </div>
  );
}

Nav.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
