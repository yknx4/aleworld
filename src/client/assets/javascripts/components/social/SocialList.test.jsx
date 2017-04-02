import React from 'react';
import { shallow } from 'enzyme';
import SocialList from './SocialList';

describe('SocialList', () => {
  let shallowComponent;
  const socialItems = [
    { icon: 'github', url: 'url1' },
    { icon: 'facebook', url: 'url2' },
  ];

  beforeEach(() => {
    const component = <SocialList items={socialItems}/>;
    shallowComponent = shallow(component);
  });

  it('should render without throwing an error', function() {
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should be selectable by tag "ul"', function() {
    expect(shallowComponent.is('ul')).toBe(true);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render 2 elements', () => {
    expect(shallowComponent.find('li').length).toBe(socialItems.length);
  });

});
