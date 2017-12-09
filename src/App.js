import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css'
import {pageMap} from './pages/index'

export const Root = () => {
  const orderedPages = getOrderedPages(pageMap)

  return (
    <Router>
      <main className='App theme'>
        {orderedPages.map(page => (
          <Route
            key={page.key}
            path={page.path}
            exact={page.exact}
            render={() => (
              <page.component pages={orderedPages} current={page} />
            )}
          />
        ))}
      </main>
    </Router>
  )
}

export default Root

export const getOrderedPages = pages =>
  pages.ordered.map(key => pages.byKey[key])
