import Home from '../pages/Home/Home';
export {Home};

export const pageMap = {
  byKey: {
    home: {
      key: 'home',
      title: 'Page Index',
      component: Home,
      path: '/',
      exact: true,
      example: '1'
    },
    'code-sample-example': {
      key: 'code-sample-example',
      title: 'Code sample example',
      component: Home,
      path: '/code-sample-example',
      exact: true,
      example: '2'
    }
  },
  ordered: [
    'home',
    'code-sample-example'
  ]
};
