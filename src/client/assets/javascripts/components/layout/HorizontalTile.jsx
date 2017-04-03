import React, {PropTypes} from 'react';
import LayoutElememt from './LayoutElement';

export default function HorizontalTile({className, children}) {
  return(
    <LayoutElememt baseClass='horizontal-tile' tag='div' className={className}>
      {children}
    </LayoutElememt>
  );
}

HorizontalTile.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
