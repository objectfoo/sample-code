import React from 'react';
import enhanceWithRoot from './enhanceWithRoot';
import {shallow} from 'enzyme';
import {Dummy} from '../test/fixtures/Dummy';

describe('enhanceWithRoot', () => {
  it('should enhance a base component', () => {
    const Component = enhanceWithRoot(Dummy);
    const wrapper = shallow(<Component />);

    expect(wrapper).toMatchSnapshot();
  });
});
