import * as React from 'react'
import Layout from '../components/Layout/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import Button from 'react-bootstrap/Button'
import HeroSlider, {
  Slide,
  Nav
} from 'hero-slider'
import EventCard from '../components/EventCard/EventCard'

import BasicSlider from "../components/BasicSlider/BasicSlider"

const IndexPage = () => {

  return (
    <Layout pageTitle="Home Page">
      <BasicSlider />
      <EventCard />
    </Layout>
  )
}

export default IndexPage;