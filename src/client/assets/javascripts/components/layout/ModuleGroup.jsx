import React, {PropTypes} from 'react';
import LayoutElememt from './LayoutElement';

export default function Module({className, children}) {
  return(
    <LayoutElememt baseClass='module-group' tag='div' className={className}>
      {children}
    </LayoutElememt>
  );
}

Module.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
