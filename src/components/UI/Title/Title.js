import React from 'react'
import PropTypes from 'prop-types'
// CSS
import { Container, Title } from './Title.module.scss'

const title = (props) => {
  return (
    <h1 className={`${Container} ${Title} text-white text-uppercase`}>
      {props.children}
    </h1>
  )
}

title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default title
