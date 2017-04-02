import React,{Component, PropTypes} from 'react';

export default class SocialLink extends Component {
  render () {
    const {icon, url, target} = this.props;
    return <a href={url} target={target}><i className={`icon icon-sm ti-${icon}`} /></a>;
  }
}

SocialLink.propTypes = {
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  target: PropTypes.string
};

SocialLink.defaultProps = {
  target: 'blank'
};
