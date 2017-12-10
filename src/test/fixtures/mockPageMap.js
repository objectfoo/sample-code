import Home from '../../pages/Home/Home';
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
    'other-home': {
      key: 'other-home',
      title: 'Other Index',
      component: Home,
      path: '/other-home',
      exact: true,
      example: '2'
    }
  },
  ordered: ['home', 'other-home']
};
