import React from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import injectStyle from 'react-jss';
import withRoot from '../../withRoot';
import Text from '../../components/Text';

export const Home = ({pages, currentKey, classes, active}) => {
  return (
    <main className={classes.main}>
      <Text type='title'>Code samples</Text>
      <ul className={classes.pageList}>
        {pages.map(page => {
          return <PageListItem {...{
            active: page.key === currentKey,
            page,
            classes
          }} />;
        })}
      </ul>
    </main>
  );
};

const PageListItem = ({active, page, classes}) => {
  const liClassName = classnames(
    classes.pageListItem,
    { [classes['pageListItemActive']]: active }
  );

  return (
    <li className={liClassName}>
      <Text className={classes.pageLinkFigure} type='body1' component='div'>
        {`Figure ${page.figure}`}
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

const styles = ({spacing, typeography}) => {
  // console.log(theme);

  return {
    main: {
      padding: spacing.unit
    },
    pageList: {
      listStyleType: 'none',
      paddingLeft: 0
    },
    pageListItem: {
      display: 'flex'
    },
    pageListItemActive: {
      fontWeight: typeography.fontWeightMedium
    },
    pageLinkFigure: {
      padding: spacing.unit / 2,
      flex: 'none'
    },
    pageLinkTitle: {
      padding: spacing.unit / 2,
      flex: 'auto'
    }
  };
};

export default withRoot(
  injectStyle(styles)(Home)
);
