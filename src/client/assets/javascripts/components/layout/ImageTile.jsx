import React, {PropTypes} from 'react';
import LayoutElement from './LayoutElement';

export default function ImageTile({className, children}) {
  return(
    <LayoutElement baseClass='image-tile' tag='div' className={className}>
      {children}
    </LayoutElement>
  );
}

ImageTile.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
