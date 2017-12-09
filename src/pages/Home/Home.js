import React from 'react'
import {Link} from 'react-router-dom'
import classnames from 'classnames'
import './home.css'

export const Home = ({pages, current}) => {
  return [
    <h1 className='page-title padding' key='title'>Code samples</h1>,
    <ul key='page-list' className='page-list'>
      {pages.map(page => {
        const isCurrentPage = page.key === current.key
        const liClassName = classnames({ 'page-link-active': isCurrentPage })

        return (
          <li key={page.key} className={liClassName}>
            <PageLink
              active={isCurrentPage}
              title={page.title}
              path={page.path}
            />
          </li>
        )
      })}
    </ul>
  ]
}

const PageLink = props => {
  if (props.active) {
    return props.title
  } else {
    return <Link to={props.path}>{props.title}</Link>
  }
}

export default Home
