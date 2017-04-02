import React, {PropTypes} from 'react';

export default function Module({className, children, tag: Tag, baseClass}) {
  return(
    <Tag className={`${baseClass} ${className}`}>
      {children}
    </Tag>
  );
}

Module.propTypes = {
  baseClass: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tag: PropTypes.string.isRequired,
};
