import React, {PropTypes} from 'react';
import LayoutElememt from './LayoutElement';

export default function MainContainer({className, children}) {
  return(
    <LayoutElememt baseClass='main-container' tag='div' className={className}>
      {children}
    </LayoutElememt>
  );
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
