import Home from './Home/Home'
export {Home}

export const pageMap = {
  byKey: {
    home: {
      key: 'home',
      title: 'Page Index',
      component: Home,
      path: '/',
      exact: true,
      description: 'Sample code index'
    },
    'other-home': {
      key: 'other-home',
      title: 'Other Index',
      component: Home,
      path: '/other-home',
      exact: true,
      description: 'test route'
    }
  },
  ordered: ['home', 'other-home']
}
