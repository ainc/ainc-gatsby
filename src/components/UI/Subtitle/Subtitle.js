import React from 'react'
import PropTypes from 'prop-types'
// CSS
import { Container, Subtitle } from './Subtitle.module.scss'

const subtitle = (props) => {
  return (
    <h2 className={`${Container} ${Subtitle} text-white text-uppercase`}>
      {props.children}
    </h2>
  )
}

subtitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default subtitle
