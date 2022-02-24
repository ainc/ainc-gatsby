import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout/Layout'
import { Container, Row, Col } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'
import PerksIcon from '/src/assets/svg/perks.svg'
import PortfolioIcon from '/src/assets/svg/portfolio.svg'
import MentorsIcon from '/src/assets/svg/mentors.svg'
import Title from '../../components/UI/Title/Title'
import Subtitle from '../../components/UI/Subtitle/Subtitle'
import BrandButton from "../../components/UI/BrandButton/BrandButton"
import "../../styles/main.scss"

/**
 * 
 * TODO:
 * Fix SVG icons, for whatever reason, some of the elements are not displaying colors correctly
 */

const FellowshipPage = ({ data }) => {
  return (
    <Layout pageTitle="Fellowship">
      
      {/* Header section */}
      <Container>
        <Row>
          <Col className="m-auto" xs={12} sm={4}>
            <Title className="brand">Fellowship</Title>
            <Subtitle className="fst-italic fw-lighter fs-4 text-lowercase">A mentor-driven program for Kentucky based startups</Subtitle>
            <BrandButton className="my-3">Apply Now</BrandButton>
          </Col>
          <Col className="" xs={12} sm={8}>
            <StaticImage src="../../images/brainstorming.jpg" width='375px' className='position-relative'/>
            
          </Col>
        </Row>
      </Container>
      
      {/* What is the fellowship */}
      <Container>
        <Row>
          <Col className="mx-auto my-5" xs={12} sm={{ offset: 1, span: 10}} md={{ offset: 3, span: 6}}>
            <Title className="text-center">What is the Fellowship</Title>
            <p className='text-center mt-3'>
              A mentor-driven program designed to accelerate your high tech startup. The program is tailored to your startup's needs and runs on a flexible timeline unique to your team, supporting your startup for up to one year.
            </p>
          </Col>
        </Row>
      </Container>

      {/* perks, portfolio and mentors */}
      <Container>
        <Row>
          <Col className="mx-auto my-5" xs={12} sm={{ offset: 1, span: 10}} md={{ offset: 3, span: 6}}>
            <Row>
              <Col xs={4} className='px-5'>
                <PerksIcon />
                <Title className='text-center fs-3 mt-3'>Perks</Title>
              </Col>
              <Col xs={4} className='px-5'>
                <PortfolioIcon />
                <Title className='text-center fs-3 mt-3'>Portfolio</Title>
              </Col>
              <Col xs={4} className='px-5'>
                <MentorsIcon />
                <Title className='text-center fs-3 mt-3'>Mentors</Title>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="mb-5">
          <Col className="d-flex justify-content-center">
            <BrandButton>Apply Now</BrandButton>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="my-5">
          <Col xs={8} sm={6}>
            <StaticImage src="../../images/fellowship-video-macbook.png" classname="position-relative" />
          </Col>
          <Col xs={4} sm={6}>
            <Title>How it Works</Title>
            <StaticImage src="../../images/arrow-red.png" />
          </Col>
        </Row>
      </Container>

    </Layout>
  )
}

export default FellowshipPage;