import React from 'react';
import injectStyle from 'react-jss';
import enhanceWithRoot from '../../common/enhanceWithRoot';
import PageListItem from './PageListItem';
import Text from '../../common/Text';

export const Home = ({pages = [], currentKey, classes, active}) => {
  return (
    <main className={classes.main}>
      <Text type='title'>Code samples</Text>
      <ul className={classes.pageList}>
        {pages.map(page => {
          return <PageListItem {...{
            key: page.key,
            active: page.key === currentKey,
            page,
            classes
          }} />;
        })}
      </ul>
    </main>
  );
};

const styles = ({spacing, typeography}) => {
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
    pageLinkExample: {
      padding: spacing.unit / 2,
      flex: 'none'
    },
    pageLinkTitle: {
      padding: spacing.unit / 2,
      flex: 'auto'
    }
  };
};

export default enhanceWithRoot(
  injectStyle(styles)(Home)
);
