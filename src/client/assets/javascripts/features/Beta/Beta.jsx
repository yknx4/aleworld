import React,{Component} from 'react';
import logo from 'images/aleworld-logo.png';
import ale from 'images/ale.jpg';
import 'styles/components/Beta.scss';

export default class Beta extends Component {

    render() {
        return (
          <div>
            <div className="nav-container">
              <nav>
                <div className="nav-bar">
                  <div className="module left">
                    <a href="index.html">
                      <img className="logo logo-light" alt="Ale World" src={logo} />
                      <img className="logo logo-dark" alt="Ale World" src={logo} />
                      <h5> aleworld</h5>
                    </a>
                  </div>
                  <div className="module widget-handle mobile-toggle right visible-sm visible-xs">
                    <i className="ti-menu" />
                  </div>
                  <div className="module-group right">
                    <div className="module left">
                      <ul className="menu">
                        <li>
                          <a href="#">Single</a>
                        </li>
                        <li className="has-dropdown">
                          <a href="#">
                            Mega Menu
                          </a>
                          <ul className="mega-menu">
                            <li>
                              <ul>
                                <li>
                                  <span className="title">Column 1</span>
                                </li>
                                <li>
                                  <a href="#">Single</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <ul>
                                <li>
                                  <span className="title">Column 2</span>
                                </li>
                                <li>
                                  <a href="#">Single</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a href="#">
                            Single Dropdown
                          </a>
                          <ul>
                            <li className="has-dropdown">
                              <a href="#">
                                Second Level
                              </a>
                              <ul>
                                <li>
                                  <a href="#">
                                    Single
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    <div className="module widget-handle language left">
                      <ul className="menu">
                        <li className="has-dropdown">
                          <a href="#">ENG</a>
                          <ul>
                            <li>
                              <a href="#">French</a>
                            </li>
                            <li>
                              <a href="#">Deutsch</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </nav>

            </div>

            <div className="main-container">
              <section className="page-title page-title-1 bg-secondary">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 text-center bl">
                      <span className="mb0 h1">ale</span>
                      <span className="mb0 h1 right-color">world</span>
                    </div>
                  </div>

                </div>

                <ol className="breadcrumb breadcrumb-2">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Elements</a>
                  </li>
                  <li className="active">Page Titles</li>
                </ol>
              </section><section>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="image-tile outer-title text-center">
                        <img alt="Pic" src="img/team-1.jpg" />
                        <div className="title mb16">
                          <h5 className="uppercase mb0">Ale Figueroa</h5>
                          <span>Android Developer</span>
                        </div>
                        <p className="mb0">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="image-tile outer-title text-center">
                        <img alt="Ale Figueroa" src={ale} className="img-thumbnail"/>
                        <div className="title mb16">
                          <h5 className="uppercase mb0">Ale Figueroa</h5>
                          <span>Full Stack Developer</span>
                        </div>
                        <p className="mb0">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="image-tile outer-title text-center">
                        <img alt="Pic" src="img/team-3.jpg" />
                        <div className="title mb16">
                          <h5 className="uppercase mb0">Ale Figueroa</h5>
                          <span>Social Rebel</span>
                        </div>
                        <p className="mb0">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </section><section className="bg-dark">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <h6 className="uppercase">Section Title</h6>
                      <hr className="mb160 mb-xs-24" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-10">
                      <h1 className="thin">Focussed, Diverse, Disruptive.</h1>
                    </div>
                  </div>

                  <div className="row mb160 mb-xs-0">
                    <div className="col-md-6 col-sm-8">
                      <p className="lead">
                        Foundry maintains a portfolio spanning multiple sectors. Disruptive technology is our unifying theme.
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3 col-sm-6 mb-xs-24">
                      <i className="ti-pulse icon mb32" />
                      <h6 className="uppercase">Health Monitoring</h6>
                      <ul>
                        <li>Medibank Private</li>
                        <li>Fit Bit</li>
                        <li>GoPro LTD.</li>
                        <li>Adventours</li>
                        <li>Airbnb</li>
                        <li>Chemist Warehouse</li>
                      </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-xs-24">
                      <i className="ti-map-alt icon mb32" />
                      <h6 className="uppercase">Location Services</h6>
                      <ul>
                        <li>Find My iPhone</li>
                        <li>FourSquare</li>
                        <li>Periscope</li>
                        <li>Crackle</li>
                        <li>Urban Spoon</li>
                        <li>Yelp</li>
                                    </ul>
                                  </div>
                                  <div className="col-md-3 col-sm-6 mb-xs-24">
                                    <i className="ti-mobile icon mb32" />
                                    <h6 className="uppercase">Social Data</h6>
                                    <ul>
                                      <li>Life Invader</li>
                                      <li>Twitter</li>
                                      <li>Google AdWords</li>
                                      <li>Track My Day</li>
                                      <li>SocialScape</li>
                                      <li>Tinder</li>
                                    </ul>
                                  </div>
                                  <div className="col-md-3 col-sm-6 mb-xs-24">
                                    <i className="ti-harddrives icon mb32" />
                                    <h6 className="uppercase">Cloud Enterprise</h6>
                                    <ul>
                                      <li>Box</li>
                                      <li>Sunny Cloudy</li>
                                      <li>Cumulii</li>
                                      <li>Precipitatr</li>
                                      <li>Nimb.us</li>
                                    </ul>
                                  </div>
                                </div>

                              </div>

                            </section>
                          </div>

                        </div>

        );
    }
}
