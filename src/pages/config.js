import Home from './Home/Home';
export {Home};

export const pageMap = {
  byKey: {
    home: {
      key: 'home',
      title: 'Page Index',
      component: Home,
      path: '/',
      exact: true,
      figure: '1'
    },
    'other-home': {
      key: 'other-home',
      title: 'Other Index',
      component: Home,
      path: '/other-home',
      exact: true,
      figure: '2'
    }
  },
  ordered: ['home', 'other-home']
};
