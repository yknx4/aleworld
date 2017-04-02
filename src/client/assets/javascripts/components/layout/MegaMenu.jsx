import React, {PropTypes} from 'react';
import LayoutElememt from './LayoutElement';

export default function MegaMenu({className, children}) {
  return(
    <LayoutElememt baseClass='mega-menu' tag='ul' className={className}>
      {children}
    </LayoutElememt>
  );
}

MegaMenu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
