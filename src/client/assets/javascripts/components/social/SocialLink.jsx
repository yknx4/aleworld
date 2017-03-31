import React,{Component, PropTypes} from 'react';

export default class SocialLink extends Component {
  render() {
    const {icon, url} = this.props;
    return <a href={url}><i className={`icon icon-sm ti-${icon}`} /></a>;
  }
}

SocialLink.propTypes = {
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
