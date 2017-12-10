import React from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import Text from '../../common/Text';

export const PageListItem = ({active, page, classes}) => {
  const liClassName = classnames(
    classes.pageListItem,
    { [classes['pageListItemActive']]: active }
  );

  return (
    <li className={liClassName}>
      <Text className={classes.pageLinkExample} type='body1' component='div'>
        {`Example: ${page.example}`}
      </Text>
      {active ? (
        <div className={classes.pageLinkTitle}>{page.title}</div>
      ) : (
        <Link
          to={page.path}
          className={classes.pageLinkTitle}>{page.title}</Link>
      )}
    </li>
  );
};

PageListItem.displayName = 'PageListItem';

export default PageListItem;
