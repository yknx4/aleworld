import React from 'react';
import { shallow, mount } from 'enzyme';
import SocialLink from './SocialLink';

describe('SocialLink', () => {
  let shallowComponent;
  let mountedComponent;

  beforeEach(() => {
    const component = <SocialLink icon='icon' url='#'/>;
    shallowComponent = shallow(component);
    mountedComponent = mount(component);
  });

  it('should render without throwing an error', function() {
    expect(shallowComponent.contains(<a href='#' target='blank'><i className={`icon icon-sm ti-icon`} /></a>)).toBe(true);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should be selectable by tag "a"', function() {
    expect(shallowComponent.is('a')).toBe(true);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should mount in a full DOM', function() {
    expect(mountedComponent.find('.icon').length).toBe(1);
    expect(mountedComponent).toMatchSnapshot();
  });

});
