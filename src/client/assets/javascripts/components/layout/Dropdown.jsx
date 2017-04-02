import React, {PropTypes} from 'react';
import LayoutElememt from './LayoutElement';

export default function Dropdown({className, children}) {
  return(
    <LayoutElememt baseClass='has-dropdown' tag='li' className={className}>
      {children}
    </LayoutElememt>
  );
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
