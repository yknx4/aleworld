import React, {PropTypes} from 'react';

export default function ThemifyIcon({tag: Tag, icon}) {
  return <Tag className={`ti-${icon}`} />;
}

ThemifyIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  tag: PropTypes.string,
};

ThemifyIcon.defaultProps = {
  tag: 'i',
};
