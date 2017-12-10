import React from 'react';
import {shallow} from 'enzyme';
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
    expect(wrapper).toMatchSnapshot();
  });

  it('renders gutter button', () => {
    const wrapper = shallow(<Text classes={mockClasses} gutterBottom />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders gutter top', () => {
    const wrapper = shallow(<Text classes={mockClasses} gutterTop />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders body1 with a paragraph', () => {
    const wrapper = shallow(<Text classes={mockClasses} type='body1' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders h1 when type is title', () => {
    const wrapper = shallow(<Text classes={mockClasses} type='title' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('allows override of default component when type not defined', () => {
    const wrapper = shallow(<Text classes={mockClasses} component='div' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('allows override of default component when type is defined', () => {
    const wrapper = shallow(<Text classes={mockClasses} type='body1' component='div' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('passes through className', () => {
    const expected = 'test';
    const wrapper = shallow(<Text classes={mockClasses} className={expected} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('merges className with default classes', () => {
    const expected = 'test';
    const expectedType = 'body1';

    const wrapper = shallow(
      <Text
        classes={mockClasses}
        type={expectedType}
        className={expected}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
