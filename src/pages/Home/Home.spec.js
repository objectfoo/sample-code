import React from 'react';
import {shallow} from 'enzyme';
import {Home} from './Home';
import {PageListItem} from './PageListItem';
import {getOrderedPages} from '../../common/AppRouter';
import {pageMap as mockPageMap} from '../../test/fixtures/mockPageMap';

describe('Text', () => {
  const mockClasses = {
    main: 'main',
    pageList: 'pageList',
    pageListItem: 'pageListItem',
    pageListItemActive: 'pageListItemActive',
    pageLinkExample: 'pageLinkExample',
    pageLinkTitle: 'pageLinkTitle'
  };

  it('should render a list of pages with a fancy title', () => {
    const wrapper = shallow(
      <Home
        classes={mockClasses}
        pages={getOrderedPages(mockPageMap)}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an active Page List Item', () => {
    const wrapper = shallow(
      <PageListItem
        active
        page={getOrderedPages(mockPageMap)[0]}
        classes={mockClasses} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render an active Page List Item', () => {
    const wrapper = shallow(
      <PageListItem
        page={getOrderedPages(mockPageMap)[1]}
        classes={mockClasses} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
