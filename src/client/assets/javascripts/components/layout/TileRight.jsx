import React, {PropTypes} from 'react';
import LayoutElememt from './LayoutElement';

export default function TileLeft({className, children}) {
  return(
    <LayoutElememt baseClass='tile-right' tag='div' className={className}>
      {children}
    </LayoutElememt>
  );
}

TileLeft.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
