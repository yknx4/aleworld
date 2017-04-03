import React,{Component} from 'react';

import {
  PageTitle,
} from 'components/layout';

import { NavLink } from 'react-router-dom';

import {
  Grid,
  Row,
  Col,
  Breadcrumb
} from 'react-bootstrap';

export default class Title extends Component {

    render() {
        return (
          <PageTitle className="page-title-1 bg-secondary">
            <Grid>
              <Row>
                <Col sm={12} className="text-center bl">
                  <span className="mb0 h1">ale</span>
                  <span className="mb0 h1 right-color">world</span>
                </Col>
                <Col sm={12} className="text-center bl">
                  <span className="mb0 h4">LifeThoughts, SocialCriticism, and some SoftwareDevelopment</span>
                </Col>
              </Row>
            </Grid>
            <Breadcrumb className='breadcrumb-2'>
              <li>
                <NavLink to="/beta" activeClassName="active">Home</NavLink>
              </li>
            </Breadcrumb>
          </PageTitle>
        );
    }
}
