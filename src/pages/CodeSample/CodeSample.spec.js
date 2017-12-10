import React from 'react';
import {shallow} from 'enzyme';
import {Main} from './CodeSample';

describe('CodeSample', () => {
  it('should render', () => {
    const wrapper = shallow(<Main classes={{
      headline: 'headline',
      root: 'root'
    }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
