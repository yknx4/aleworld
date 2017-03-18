import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { omit } from 'lodash';

const AwesomeLink = (props) => {
  const faProps = omit(props, 'href');
  const { href, target } =  props;
  return <a href={href} target={target}><FontAwesome {...faProps} /></a>
}

AwesomeLink.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
};

AwesomeLink.defaultProps = {
  target: '_blank',
};

export default AwesomeLink;
