
import React, { Component } from 'react';
import injectSheet, {ThemeProvider} from 'react-jss';
import theme from './theme.json';

let AppWrapper = props => props.children;
const styles = theme => {
  // console.log(theme);
  return {
    '@global': {
      'body': {
        fontFamily: theme.typeography.fontFamily,
        fontSize: theme.typeography.fontSize,
        lineHeight: theme.typeography.lineHeight
      },
      'body *': {
        'box-sizing': 'border-box'
      },
      'html, body': {
        margin: 0,
        padding: 0
      },
      'html, body, #root': {
        height: '100%'
      }
    }
  };
};

AppWrapper = injectSheet(styles)(AppWrapper);

function enhanceWithRoot (BaseComponent) {
  class enhanceWithRoot extends Component {
    componentDidMount () {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render () {
      return (
        <ThemeProvider theme={theme}>
          <AppWrapper>
            <BaseComponent {...this.props} />
          </AppWrapper>
        </ThemeProvider>
      );
    }
  }

  return enhanceWithRoot;
}

export default enhanceWithRoot;
