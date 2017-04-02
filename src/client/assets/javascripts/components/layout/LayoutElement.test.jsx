import React from 'react';
import { shallow, mount } from 'enzyme';
import LayoutElement from './LayoutElement';

describe('LayoutElement', () => {
  let shallowComponent;
  let mountedComponent;

  const props = {
    tag: 'div',
    baseClass: 'element',
    className: 'right'
  };

  beforeEach(() => {
    const component = <LayoutElement {...props} > <p /> </LayoutElement>;
    shallowComponent = shallow(component);
    mountedComponent = mount(component);
  });

  it('should render without throwing an error', function() {
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should be selectable by tag', function() {
    expect(shallowComponent.is(props.tag)).toBe(true);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should have base class', () => {
    expect(shallowComponent.hasClass(props.baseClass)).toBe(true);
  });

  it('should have extra class', () => {
    expect(shallowComponent.hasClass(props.className)).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mountedComponent.find(props.tag).length).toBe(1);
    expect(mountedComponent).toMatchSnapshot();
  });

});
