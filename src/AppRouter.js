import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {pageMap} from './pages/config';

export const App = ({classes}) => {
  const orderedPages = getOrderedPages(pageMap);

  return (
    <Router>
      <div>
        {orderedPages.map(({key, path, exact, ...rest}) => {
          const routeP = { key, path, exact };
          return (
            <Route {...routeP} render={() => (
              <rest.component pages={orderedPages} currentKey={key} />
            )} />
          );
        })}
      </div>
    </Router>
  );
};

export default App;

export const getOrderedPages = pages =>
  pages.ordered.map(key => pages.byKey[key]);
