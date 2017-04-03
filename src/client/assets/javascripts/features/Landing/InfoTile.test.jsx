import React from 'react';
import { shallow, mount } from 'enzyme';
import InfoTile from './InfoTile';

describe('InfoTile', () => {
  let shallowComponent;
  let mountedComponent;

  const props = {
    description: 'description',
    title: 'title',
    subtitle: 'subtitle',
    picture: {
      src: '//path',
      alt: 'alt'
    }
  };

  beforeEach(() => {
    const component = <InfoTile {...props} > <p /> </InfoTile>;
    shallowComponent = shallow(component);
    mountedComponent = mount(component);
  });

  it('should render without throwing an error', function() {
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should be selectable by tag', function() {
    expect(shallowComponent.is('ImageTile')).toBe(true);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should mount in a full DOM', function() {
    expect(mountedComponent.find('ImageTile').length).toBe(1);
    expect(mountedComponent).toMatchSnapshot();
  });

});
