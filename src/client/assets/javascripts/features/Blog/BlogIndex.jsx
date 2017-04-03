import React,{Component} from 'react';
import 'styles/components/Blog.scss';

import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import {
  LeadText,
  HorizontalTile,
  TileLeft,
  TileRight,
} from 'components/layout';

import Template, {Title} from 'features/Template';

export default class BlogIndex extends Component {
  render() {
    return (
      <Template>
        <Title section="blog" showSubtitle={false}/>
        <section>
          <Grid>
            <Row>
              <Col md={10} mdOffset={1} sm={10} smOffset={1} className="text-center">
                <LeadText className="mb60">
                  LifeThoughts, SocialCriticism, and some SoftwareDevelopment.
                </LeadText>
              </Col>
            </Row>
            <Row>
              <Col md={10} mdOffset={1} sm={10} smOffset={1}>
                <HorizontalTile>
                  <TileLeft>
                    <a href="#">
                      <div className="background-image-holder parallax">
                        <img alt="image" className="background-image" src="//lorempixel.com/640/480/" />
                      </div>
                    </a>
                  </TileLeft>
                  <TileRight className="bg-secondary">
                    <div className="description">
                      <h4 className="mb8">about me 2.0</h4>
                      <h6 className="uppercase">
                        on Thu, Oct 20, 2016 by Ale Figueroa
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </TileRight>
                </HorizontalTile>

                <HorizontalTile>
                  <TileLeft>
                    <a href="#">
                      <div className="background-image-holder parallax">
                        <img alt="image" className="background-image" src="//lorempixel.com/640/480/" />
                      </div>
                    </a>
                  </TileLeft>
                  <TileRight className="bg-secondary">
                    <div className="description">
                      <h4 className="mb8">Pondering Blonde</h4>
                      <h6 className="uppercase">
                        Fashion Photography
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </TileRight>
                </HorizontalTile>
              </Col>
            </Row>
          </Grid>
        </section>
      </Template>
    );
  }
}
