import React, {PropTypes} from 'react';

export default function Nav({children}) {
  return (
    <div className="nav-container">
      <nav>
        <div className="nav-bar">
          {children}
        </div>
      </nav>
    </div>
  );
}

Nav.propTypes = {
  children: PropTypes.node.isRequired
};
