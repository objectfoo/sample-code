import React from 'react';
import {shallow} from 'enzyme';
import {AppRouter} from './AppRouter';

describe('AppRouter', () => {
  it('should route', () => {
    expect(shallow(<AppRouter />)).toMatchSnapshot();
  });
});
