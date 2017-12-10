import React from 'react';
import { shallow } from 'enzyme';
import {Text} from './Text';

describe('Text', () => {
  const mockClasses = {
    body1: 'body1',
    title: 'title',
    gutterBottom: 'gutterBottom',
    gutterTop: 'gutterTop'
  };

  it('renders text in a span when type not defined', () => {
    const expectedText = 'some text';
    const wrapper = shallow(<Text classes={mockClasses}>{expectedText}</Text>);
    expect(wrapper.find('span').prop('children')).toEqual(expectedText);
  });

  it('renders gutter button', () => {
    const wrapper = shallow(<Text classes={mockClasses} gutterBottom />);
    expect(wrapper.find('span').prop('className')).toEqual(mockClasses.gutterBottom);
  });

  it('renders gutter top', () => {
    const wrapper = shallow(<Text classes={mockClasses} gutterTop />);
    expect(wrapper.find('span').prop('className')).toEqual(mockClasses.gutterTop);
  });

  it('renders body1 with a paragraph', () => {
    const wrapper = shallow(<Text classes={mockClasses} type='body1' />);
    expect(wrapper.find('p').length).toEqual(1);
  });

  it('renders h1 when type is title', () => {
    const wrapper = shallow(<Text classes={mockClasses} type='title' />);
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('allows override of default component when type not defined', () => {
    const wrapper = shallow(<Text classes={mockClasses} component='div' />);
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('allows override of default component when type is defined', () => {
    const wrapper = shallow(<Text classes={mockClasses} type='body1' component='div' />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});
