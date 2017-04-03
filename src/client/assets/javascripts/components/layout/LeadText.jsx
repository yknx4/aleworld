import React, {PropTypes} from 'react';
import LayoutElememt from './LayoutElement';

export default function LeadText({className, children}) {
  return(
    <LayoutElememt baseClass='lead' tag='p' className={className}>
      {children}
    </LayoutElememt>
  );
}

LeadText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
