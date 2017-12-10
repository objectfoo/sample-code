import Home from '../pages/Home/Home';
import {CodeSample} from '../pages/CodeSample/CodeSample';
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
      component: CodeSample,
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
