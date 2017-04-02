import React, {PropTypes} from 'react';
import LayoutElement from './LayoutElement';

export default function MenuTitle({className, children}) {
  return(
    <LayoutElement baseClass='title' tag='span' className={className}>
      {children}
    </LayoutElement>
  );
}

MenuTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
