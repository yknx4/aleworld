import React,{Component, PropTypes} from 'react';
import {ImageTile} from 'components/layout';
import ReactMarkdown from 'react-markdown';

export default class InfoTile extends Component {

    render() {
      const {description, picture, subtitle, title} = this.props;
      const {src, alt} = picture;
        return (
          <ImageTile className="outer-title text-justify">
            <img alt={alt} src={src} className="img-circle sm-img"/>
            <div className="title mb16">
              <h5 className="uppercase mb0">{title}</h5>
              <span>{subtitle}</span>
            </div>
            <ReactMarkdown
              source={description}
              className="mb0"
              softBreak="br"/>
          </ImageTile>
        );
    }
}

InfoTile.propTypes = {
  description: PropTypes.string.isRequired,
  picture: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }),
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};
