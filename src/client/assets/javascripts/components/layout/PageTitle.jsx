import React, {PropTypes} from 'react';
import LayoutElement from './LayoutElement';

export default function PageTitle({className, children}) {
  return(
    <LayoutElement baseClass='page-title' tag='section' className={className}>
      {children}
    </LayoutElement>
  );
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
