import React from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import injectStyle from 'react-jss';
import withRoot from '../../withRoot';
import Text from '../../components/Text';

export const Home = ({pages, currentKey, classes}) => {
  return (
    <main className={classes.main}>
      <Text type='title'>Code samples</Text>
      <ul className='page-list'>
        {pages.map(page => {
          const active = page.key === currentKey;

          return (
            <li key={page.key} className={classnames({
              [classes['page-link-active']]: active
            })}>
              <PageLink active={active} title={page.title} path={page.path} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

const PageLink = props => {
  const title = <Text>{props.title}</Text>;

  return props.active
    ? title
    : <Link to={props.path}>{title}</Link>;
};

const styles = theme => {
  // console.log(theme);

  return {
    main: {
      padding: theme.spacing.unit
    },
    'page-link-active': {
      fontWeight: theme.typeography.fontWeightMedium
    }
  };
};

export default withRoot(
  injectStyle(styles)(Home)
);
