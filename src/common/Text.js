import React from 'react';
import injectStyle from 'react-jss';
import classnames from 'classnames';

export const Text = ({
  component,
  type,
  classes,
  gutterBottom,
  gutterTop,
  className,
  children
}) => {
  const Component = component || componentFromType(type);

  return (
    <Component className={classnames(
      className,
      classes[type],
      { [classes.gutterBottom]: gutterBottom },
      { [classes.gutterTop]: gutterTop }
    )}>
      {children}
    </Component>
  );
};

const styles = theme => {
  return {
    body1: {
      margin: 0
    },
    title: {
      margin: 0
    },
    gutterBottom: {
      marginBotom: theme.spacing.unit
    },
    gutterTop: {
      marginTop: theme.spacing.unit
    }
  };
};

const StyledText = injectStyle(styles)(Text);
StyledText.displayName = 'StyledText';
export default StyledText;

const componentFromType = key => ({
  body1: 'p',
  title: 'h1'
}[key] || 'span');
