import React from 'react';
import { shallow } from 'enzyme';
import Template from './Template';

describe('Template', () => {
  let shallowComponent;
  const children = <p> papi </p>;

  beforeEach(() => {
    const component = <Template >{children}</Template>;
    shallowComponent = shallow(component);
  });

  it('should render without throwing an error', function() {
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should be selectable by tag', function() {
    expect(shallowComponent.is('div')).toBe(true);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render its children', () => {
    expect(shallowComponent.contains(children)).toBe(true);
    expect(shallowComponent).toMatchSnapshot();
  });

});
