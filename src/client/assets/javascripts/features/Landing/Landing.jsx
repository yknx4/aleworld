import React,{Component} from 'react';

import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import InfoTile from './InfoTile';
import tiles from './tiles';
import Template, {Title} from 'features/Template';

export default class Landing extends Component {
    render() {
        return (
            <Template>
              <Title />
              <section>
                <Grid>
                  <Row>
                    {tiles.map((tile) => <Col key={tile.id} md={4} sm={6}><InfoTile {...tile}/></Col>)}
                  </Row>
                </Grid>
              </section>
            </Template>
        );
    }
}
