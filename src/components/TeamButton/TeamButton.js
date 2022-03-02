import * as React from 'react'
import { Button } from "react-bootstrap"
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'

// Use style variables instead of values like '#323232'
const TeamButton = styled.button`
//   position: relative;
  width: 80%;
  color: white;
  background-color: #323232;
  text-align: center;
  font-size: 22px;
  line-height: 33px;
  font-weight: 600;
  letter-spacing: 3px;
  padding: 0.8rem 2.4rem;
  overflow: hidden;
//   display: inline-block;
  text-transform: uppercase;
`

// Doesn't work; have to use GatsbyImageData, unsure of best way to do that

const teamButton = (props) => {
    
    // getImage()
    
    return (
        <div className='text-center'>
            <TeamButton {...props} >
                {props.children}
            </TeamButton>
            <StaticImage src='../../images/oreo-trail.png' alt='test' />
            <GatsbyImage src={props.imgSrc} alt={props.imgAlt} />
        </div>
    ) 
}

teamButton.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string,
}

teamButton.defaultProps = {
    imgSrc: '',
    imgAlt: "Unknown image",
}

export default teamButton