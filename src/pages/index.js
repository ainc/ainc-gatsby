import * as React from 'react'
import Layout from '../components/Layout/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import Button from 'react-bootstrap/Button'
import HeroSlider, {
  Slide,
  Nav
} from 'hero-slider'

import BasicSlider from "../components/BasicSlider/BasicSlider"
import CardIconBG from '../components/CardIconBG/CardIconBG'

const IndexPage = () => {

  return (
    <Layout pageTitle="Home Page">
      <BasicSlider />
      <CardIconBG />
    </Layout>

  )
}

export default IndexPage