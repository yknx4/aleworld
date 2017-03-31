import React,{Component} from 'react';
import logo from 'images/aleworld-logo.png';
import ale from 'images/ale.jpg';
import ale2 from 'images/ale2.jpg';
import ale3 from 'images/ale3.jpg';
import 'styles/components/Beta.scss';
import SocialList from 'components/social/SocialList';

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

export default class Beta extends Component {

    render() {
        return (
          <div>
            <div className="nav-container">
              <nav>
                <div className="nav-bar">
                  <div className="module left">
                    <a href="/">
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
                          <a href="/">Home</a>
                        </li>
                        <li className="has-dropdown">
                          <a href="#">
                            Blog
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
                            Projects
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

                    {/* <div className="module widget-handle language left">
                      <ul className="menu">
                        <li className="has-dropdown">
                          <a href="#">English</a>
                          <ul>
                            <li>
                              <a href="#">Spanish</a>
                            </li>
                            <li>
                              <a href="#" className='disabled'>Korean</a>
                            </li>
                            <li>
                              <a href="#" className='disabled'>Japanese</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div> */}
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
                    <div className="col-sm-12 text-center bl">
                      <span className="mb0 h4">LifeThoughts, SocialCriticism, and some SoftwareDevelopment</span>
                    </div>
                  </div>

                </div>

                <ol className="breadcrumb breadcrumb-2">
                  <li>
                    <a href="#" className="active">Home</a>
                  </li>
                  {/* <li>
                    <a href="#">Elements</a>
                    </li>
                  <li className="active">Page Titles</li> */}
                </ol>
              </section><section>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
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
                    </div>
                    <div className="col-md-4 col-sm-6">
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
                    </div>
                    <div className="col-md-4 col-sm-6">
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
                    </div>
                  </div>

                </div>

              </section>
              <footer className="footer-2 bg-primary">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center mb64 mb-xs-24">
                      <a href="#">
                        <img alt="Logo" className="image-small mb16 outline-image" src={logo} />
                      </a>
                      <p className="lead mb48 mb-xs-16">
                        All the magic is done<br />
                        somewhere in Colima, Mexico
                      </p>
                      <SocialList items={socialItems} />
                    </div>
                  </div>

                  <div className="row fade-half">
                    <div className="col-sm-4 text-center-xs">
                      <span>2017 Ale World</span>
                    </div>

                    <div className="col-sm-4 text-center hidden-xs">
                      <span>Life Style &amp; Software Development</span>
                    </div>

                    <div className="col-sm-4 text-right hidden-xs">
                      <span>me@ale.world</span>
                          </div>
                        </div>
                      </div>
                    </footer>
                          </div>

                        </div>

        );
    }
}
