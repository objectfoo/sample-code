import React from 'react';
import injectStyle from 'react-jss';
import enhanceWithRoot from '../../common/enhanceWithRoot';

export const CodeSample = ({classes}) => {
  return (
    <main className={classes.root}>
      <h1 className={classes.headline}>Hi</h1>
    </main>
  );
};

// istanbul ignore next line
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.secondary
  },
  headline: {
    margin: 0
  }
});

export default enhanceWithRoot(
  injectStyle(styles)(CodeSample)
);
