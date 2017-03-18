import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { omit } from 'lodash';

const AwesomeLink = (props) => {
  const faProps = omit(props, 'href');
  const { href } =  props;
  return <a href={href}><FontAwesome {...faProps} /></a>
}

AwesomeLink.propTypes = {
  href: PropTypes.string.isRequired
};

export default AwesomeLink;
