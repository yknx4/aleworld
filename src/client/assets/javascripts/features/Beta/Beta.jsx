import React,{Component} from 'react';
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
import InfoTile from './InfoTile';
import tiles from './tiles';

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
                    {tiles.map((tile) => <Col key={tile.id} md={4} sm={6}><InfoTile {...tile}/></Col>)}
                  </Row>
                </Grid>
              </section>
              <Footer />
            </MainContainer>
          </div>
        );
    }
}
