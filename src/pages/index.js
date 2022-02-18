import * as React from 'react'
import Layout from '../components/Layout/Layout'
import Diagonal from '../components/Layout/Diagonal/Diagonal'
import BorderBox from '../components/Content/BorderBox/BorderBox'
import { StaticImage } from 'gatsby-plugin-image'
import Button from 'react-bootstrap/Button'
import HeroSlider, {
  Slide,
  Nav
} from 'hero-slider'
import EventCard from '../components/EventCard/EventCard'

import BasicSlider from "../components/BasicSlider/BasicSlider"
import CardIconBG from '../components/CardIconBG/CardIconBG'


const IndexPage = () => {

  return (
    <Layout pageTitle="Home Page">
      <BasicSlider />
      <div className="mt-5 mb-5"></div>
      <EventCard />
      <Diagonal>
        <BorderBox>

          <BorderBox.Title className="Test">Testing Title</BorderBox.Title>
          <BorderBox.Content>Testing content here</BorderBox.Content>
        </BorderBox>
      </Diagonal>
      
    </Layout>

  )
}

export default IndexPage;