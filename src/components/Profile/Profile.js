import * as React from 'react'
import { graphql } from 'gatsby'
import { Image, ButtonGroup, Button } from 'react-bootstrap'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Ribbon from '../Ribbon/Ribbon'

import {
  btnGroupFullWidth,
  cardShadow
} from './Profile.module.css'

const Profile = ({ name, image, linkedin, github, website, position }) => {

  return (
    <div className={`card ${cardShadow}`}>

      <GatsbyImage image={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <Ribbon position={position}></Ribbon>
        <p className="card-text text-center">{name}</p>
        <ButtonGroup size="sm" className={`btn-group ${btnGroupFullWidth}`}>
          <Button href={website} variant="outline-dark">Portfolio</Button>
          <Button href={linkedin} variant="outline-dark">LinkedIn</Button>
          <Button href={github} variant="outline-dark">GitHub</Button>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default Profile;