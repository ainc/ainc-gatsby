import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as styles from '../../../styles/Variables'


const subtitle = (props) => {
  return (
    <h2 {...props}>
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
