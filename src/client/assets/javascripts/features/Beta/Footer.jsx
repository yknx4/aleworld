import React,{Component} from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import SocialList from 'components/social/SocialList';
import logo from 'images/aleworld-logo.png';

const socialItems = [
  {
    icon: 'github',
    url: '//www.github.com/yknx4'
  },
  {
    icon: 'facebook',
    url: '//www.facebook.com/yknx4'
  },
  {
    icon: 'linkedin',
    url: '//www.linkedin.com/in/yknx4/'
  },
  {
    icon: 'instagram',
    url: '//www.instagram.com/yknx4/'
  }
];

export default class Footer extends Component {

    render() {
        return (
          <footer className="footer-2 bg-primary">
            <Grid>
              <Row>
                <Col md={6} mdOffset={3} sm={8} smOffset={2} className="text-center mb64 mb-xs-24">
                  <a href="#">
                    <img alt="Logo" className="image-small mb16 outline-image" src={logo} />
                  </a>
                  <p className="lead mb48 mb-xs-16">
                    All the magic is done<br />
                    somewhere in Colima, Mexico
                  </p>
                  <SocialList items={socialItems} />
                </Col>
              </Row>

              <Row className="fade-1-4">
                <Col sm={4} className="text-center-xs">
                  <span>2017 Ale World</span>
                </Col>

                <Col sm={4} xsHidden className="text-center">
                  <span>Life Style &amp; Software Development</span>
                </Col>

                <Col sm={4} xsHidden className="text-right">
                  <span>me@ale.world</span>
                </Col>
              </Row>
            </Grid>
          </footer>
        );
    }
}
