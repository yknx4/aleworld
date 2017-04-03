import React, {PropTypes} from 'react';

export default function LayoutElement({className, children, tag: Tag, baseClass}) {
  return(
    <Tag className={`${baseClass} ${className}`}>
      {children}
    </Tag>
  );
}

LayoutElement.propTypes = {
  baseClass: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tag: PropTypes.string.isRequired,
};

LayoutElement.defaultProps = {
  className: ''
};
