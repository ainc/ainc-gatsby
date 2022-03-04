import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as styles from '../../../styles/Variables'

const Title = styled.h1`
  font-family: ${styles.styles.fonts.headingFont};
  @include font-size(32);
  font-weight: 900;
  margin-top: 0;
  color: black;
  text-transform: uppercase;
  letter-spacing: 2px;
`


const title = (props) => {
  return (
    <Title {...props} > 
      {props.children}
    </Title>
  )
}

title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default title
