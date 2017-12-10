import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {pageMap} from './config';

export const AppRouter = () => {
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

export default AppRouter;

export const getOrderedPages = pages =>
  pages.ordered.map(key => pages.byKey[key]);
