import React,{Component, PropTypes} from 'react';
import SocialLink from './SocialLink';

export default class SocialList extends Component {

  drawLink(item) {
    return <li key={item.icon}><SocialLink {...item} /></li>;
  }

  render() {
    const {items} = this.props;
    return (
      <ul className="list-inline social-list spread-children">
        {items.map(this.drawLink)}
      </ul>
    );
  }
}

SocialList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};
