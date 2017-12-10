import React from 'react';
import {shallow} from 'enzyme';
import {CodeSample} from './CodeSample';

describe('CodeSample', () => {
  it('should render', () => {
    const wrapper = shallow(<CodeSample classes={{
      headline: 'headline',
      root: 'root'
    }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
