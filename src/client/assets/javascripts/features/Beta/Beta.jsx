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
import InfoTile from './InfoTile';

const tiles = [
  {
    id: 'itile1',
    picture: {
      alt: 'Ale Figueroa',
      src: ale2,
    },
    title: 'Ale Figueroa',
    subtitle: 'Android Developer',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.'
  },
  {
    id: 'itile2',
    picture: {
      alt: 'Ale Figueroa',
      src: ale3,
    },
    title: 'Ale Figueroa',
    subtitle: 'Social Rebel Transgirl',
    description: `I’m a supporter of Social Freedom, Internet Rights and the LGBT Community. I have the opinion that everyone can and shall live however the f*ck they want as long as they don’t harm anyone else’s freedom.
    <br/>
    I think any society should be free of oppression, and have all their human rights assured regardless of their political, religious, sexual, or whatever position.
    <br/>
    I think all those rights should be also preserved and enforced in all the modern environments that are constantly surging in the Internet (Yep, This means that you should also be able to do whatever you want on the Internet).
    <br/>
    And I’m against Gender Roles (a byproduct of sexism), I don’t think a person can be defined by what society tells them they are supposed to be just because the person was born with or without something between the legs. I consider myself transgender, but feel free to address me however you feel you should.`
  },
  {
    id: 'itile3',
    picture: {
      alt: 'Ale Figueroa',
      src: ale,
    },
    title: 'Ale Figueroa',
    subtitle: 'Fullstack Developer',
    description: 'Web is the future.'
  },
];

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
