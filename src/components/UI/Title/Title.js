import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as styles from '../../../styles/Variables'

const Title = styled.h1`
  font-family: ${styles.styles.fonts.headingFont};
  font-size: ${styles.styles.sizes.title};
  font-weight: 900;
  margin-top: 0;
  color: ${styles.styles.colors.brand2};
  &.brand {
    color: ${styles.styles.colors.brand};
  }
  &.white {
    color: white;
  }
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
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
