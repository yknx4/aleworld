import React,{Component} from 'react';
import ale from 'images/ale.jpg';
import ale2 from 'images/ale2.jpg';
import ale3 from 'images/ale3.jpg';
import 'styles/components/Beta.scss';

import {
  MainContainer,
} from 'components/layout';

import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import Header from './Header';
import Title from './Title';
import Footer from './Footer';

export default class Beta extends Component {

    render() {
        return (
          <div>
            <Header />
            <MainContainer>
              <Title />
              <section>
                <Grid>
                  <Row>
                    <Col md={4} sm={6}>
                      <div className="image-tile outer-title text-justify">
                        <img alt="Ale Figueroa" src={ale2} className="img-circle sm-img"/>
                        <div className="title mb16">
                          <h5 className="uppercase mb0">Ale Figueroa</h5>
                          <span>Android Developer</span>
                        </div>
                        <p className="mb0">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                        </p>
                      </div>
                    </Col>
                    <Col md={4} sm={6}>
                      <div className="image-tile outer-title text-justify">
                        <img alt="Ale Figueroa" src={ale3} className="img-circle sm-img"/>
                        <div className="title mb16">
                          <h5 className="uppercase mb0">Ale Figueroa</h5>
                          <span>Social Rebel Transgirl</span>
                        </div>
                        <p className="mb0">
                          I’m a supporter of Social Freedom, Internet Rights and the LGBT Community. I have the opinion that everyone can and shall live however the f*ck they want as long as they don’t harm anyone else’s freedom.
                          <br/>
                          I think any society should be free of oppression, and have all their human rights assured regardless of their political, religious, sexual, or whatever position.
                          <br/>
                          I think all those rights should be also preserved and enforced in all the modern environments that are constantly surging in the Internet (Yep, This means that you should also be able to do whatever you want on the Internet).
                          <br/>
                          And I’m against Gender Roles (a byproduct of sexism), I don’t think a person can be defined by what society tells them they are supposed to be just because the person was born with or without something between the legs. I consider myself transgender, but feel free to address me however you feel you should.
                        </p>
                      </div>
                    </Col>
                    <Col md={4} sm={6}>
                      <div className="image-tile outer-title text-justify">
                        <img alt="Ale Figueroa" src={ale} className="img-circle sm-img"/>
                        <div className="title mb16">
                          <h5 className="uppercase mb0">Ale Figueroa</h5>
                          <span>Full Stack Developer</span>
                        </div>
                        <p className="mb0">
                          Web is the future. <br />

                        </p>
                      </div>
                    </Col>
                  </Row>
                </Grid>
              </section>
              <Footer />
            </MainContainer>
          </div>
        );
    }
}
