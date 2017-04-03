import React,{Component} from 'react';
import {
  Nav,
  Module,
  ModuleGroup,
  ThemifyIcon,
  Menu,
  Dropdown,
} from 'components/layout';
import { Link } from 'react-router-dom';
import logo from 'images/aleworld-logo.png';

export default class Header extends Component {

    render() {
        return (
          <Nav className="absolute">
            <Module className="left">
              <Link to="/beta">
                <img className="logo logo-light" alt="Ale World" src={logo} />
                <h5> aleworld</h5>
              </Link>
            </Module>
            <Module className="widget-handle mobile-toggle right visible-sm visible-xs">
              <ThemifyIcon icon="menu" />
            </Module>
            <ModuleGroup className="right">
              <Module className="left">
                <Menu>
                  <li>
                    <Link to="/beta">Home</Link>
                  </li>
                  <Dropdown>
                    <a href="//yknx4.github.io/blog">
                      Blog
                    </a>
                    {/* <MegaMenu>
                      <li>
                        <ul>
                          <li>
                            <MenuTitle>Column 1</MenuTitle>
                          </li>
                          <li>
                            <a href="#">Single</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>
                            <MenuTitle>Column 2</MenuTitle>
                          </li>
                          <li>
                            <a href="#">Single</a>
                          </li>
                        </ul>
                      </li>
                    </MegaMenu> */}
                  </Dropdown>
                  {/* <Dropdown>
                    <a href="#">
                      Projects
                    </a>
                    <ul>
                      <Dropdown>
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
                      </Dropdown>
                    </ul>
                  </Dropdown> */}
                </Menu>
              </Module>
            </ModuleGroup>
          </Nav>
        );
    }
}
