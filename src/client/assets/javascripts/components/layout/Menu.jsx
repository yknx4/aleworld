import React, {PropTypes} from 'react';
import LayoutElememt from './LayoutElement';

export default function Menu({className, children}) {
  return(
    <LayoutElememt baseClass='menu' tag='ul' className={className}>
      {children}
    </LayoutElememt>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
