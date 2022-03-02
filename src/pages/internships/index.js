import * as React from 'react'
// import { graphql } from 'gatsby'     unused
import Layout from '../../components/Layout/Layout'
import Diagonal from '../../components/Layout/Diagonal/Diagonal'     // diagonal isn't dynamic enough?
import TeamButton from '../../components/TeamButton/TeamButton'
import { Container, Row, Col } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'
import Title from '../../components/UI/Title/Title'
import Subtitle from '../../components/UI/Subtitle/Subtitle'
import BrandButton from '../../components/UI/BrandButton/BrandButton'
import '../../styles/main.scss'

const InternshipsPage = ({ data }) => {

  // Review layouts of Header, Why, then continue from Why Join

  // First container: my-5
  // Rows/Cols: No margins/padding; Exceptions are invis spacers, vertical centering ('my-auto'), and padding for BrandButton sizing
  // Rows: for center, use text-center or justify-content-center
  // Cols: Always nest in Rows amd specify breakpoint element ratios/12

  // Keep stacked elements adjacent (not in rows) when possible

  return (
    <Layout pageTitle="Internships">
      
      {/* Header section - image -> BG */}
      <Container className='mb-5'>
        <Row>
          <Col md={7}> {/* className='text-center text-md-start' */}
            <Title>LOOKING FOR AN INTERNSHIP?</Title>
            <p>
              If you’re looking to build your skillset with real projects while building the tech & startup community in Lexington, we’d love to chat. Did we mention we eat a *lot* of Oreos.
            </p>
            <BrandButton className='my-4'>Apply Now</BrandButton>
          </Col>
          <Col md={5}>
            <StaticImage src='../../images/oreo-trail.png' alt="OREO with a red trail"/>
          </Col>
        </Row>
      </Container>

      {/* Why section - diagonal & BG image */}
      {/* <Diagonal bgImage='../../oreo-trail.png' /> */}
      <Container fluid className='my-5' style={{backgroundColor:'#B00000'}}>
        <Container>
          <Row>
            <Col md={8}> {/* className='text-center text-md-start' */}
              <Title className='text-white my-5'>ABOUT TEAM ALPHA</Title>
              <p className='text-white my-5'>
                Our interns, or Team Alpha as we prefer, are integral parts in helping us make Lexington a better place to live and work. We want you to bring your passion, curiosity, determination, and healthy disregard of the fear of failure. Together, we can grow the tech and startup ecosystem and we promise not to take ourselves too seriously while we’re at it.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Teams section - team components */}
      <Container className='my-5'>
        <Row>
          <Title className='text-center my-5'>FIND THE RIGHT TEAM FOR YOU</Title>
        </Row>
        <Row className='justify-content-center'>
          <Col sm md={4}>
            {/* Video */}
            {/* <Subtitle className='text-center text-uppercase text-white fs-4 fw-bold bg-dark py-2'>Video</Subtitle> */}
            <TeamButton imgSrc='../../images/oreo-trail.png' imgAlt='this should work'>Events + Marketing</TeamButton>
          </Col>
          <Col sm md={4}>
            {/* Development */}
            <Subtitle className='text-center text-uppercase text-white fs-4 fw-bold bg-dark py-2'>Development</Subtitle>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col sm md={4}>
            {/* Events + Marketing */}
            <Subtitle className='text-center text-uppercase text-white fs-4 fw-bold bg-dark py-2'>Events + Marketing</Subtitle>
          </Col>
          <Col sm md={4}>
            {/* Design */}
            <Subtitle className='text-center text-uppercase text-white fs-4 fw-bold bg-dark py-2'>Design</Subtitle>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col>
            <BrandButton className='my-5'>Apply Now</BrandButton>
          </Col>
        </Row>
      </Container>

      {/* Who We Look For section - border */}
      <Container className='my-5'>
        <Row className='text-center'>
          <Col>
            <BrandButton className='secondary mb-5'>Watch Video</BrandButton>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md={8} lg={7}>
            <Title className='text-center text-uppercase my-6'>Who We're Looking For</Title>
            <p style={{textAlign:'justify'}}>
              We’re looking for interns to join any of our teams for a 20ish week internship in Lexington, KY. Interns produce compelling videos to tell stories that matter, create web applications that improve processes and efficiency, build community by bringing people together through our communication channels, and design visual graphics that keep all of the above creative and cohesive.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Why Join section - FINISHED */}
      <Container fluid className='my-5 py-5' style={{backgroundColor:'#323232'}}>
        <Container>
          <Row className='justify-content-center'>
            <Col className='text-center my-auto' xs={12} md={5} lg={3}>
              <StaticImage src='../../images/question.png' alt="Question mark logo" width={250} />
            </Col>
            <Col className='my-2 d-block d-md-none' xs={12}/>
            <Col xs='auto'>
              <Title className='text-danger' style={{writingMode:'vertical-lr', transform:'rotate(180deg)', margin:'0px'}}>WHY JOIN?</Title>
            </Col>
            <Col xs={7} md={5} lg={4} xl={3}>
              <h5 className='text-white' style={{textAlign:'justify'}}>
                In addition to the free t-shirt, we’ll provide you with an opportunity to improve your skills, portfolio and network. Our goal is to assure you the best experience by helping you achieve your goals whether that is getting into your dream school or working for your favorite company.
              </h5>
            </Col>
          </Row>
          <Row className='text-center pt-5'>
            <Col>
              <BrandButton>Apply Now</BrandButton>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Our Team section - borders and dynamic imgs? */}
      <Container className='my-5'>
        <Row className='text-center'>
          <Col xs={6} md={3}>
            <StaticImage objectFit='cover' src='../../images/emilywehrle-wall.jpg' alt="Headshot of Emily Wehrle" />
          </Col>
          <Col xs={6} md={3}>
            <StaticImage objectFit='cover' src='../../images/kyleraney-wall.jpg' alt="Headshot of Kyle Raney" />
          </Col>
          <Col className='my-4 d-block d-md-none' xs={12}/>
          <Col xs={6} md={3}>
            <StaticImage objectFit='cover' src='../../images/jacquelinebenson-wall.jpg' alt="Headshot of Jacqueline Benson" />
          </Col>
          <Col xs={6} md={3}>
            <StaticImage objectFit='cover' src='../../images/garrettfahrbach-wall.jpg' alt="Headshot of GarrettFahrbach" />
          </Col>
        </Row>
        <Row className='text-center pt-5'>
          <Col>
            <BrandButton>Meet the Team</BrandButton>
          </Col>
        </Row>
      </Container>

    </Layout>
  )
}

// export const query = graphql`
//   query {
//     image: file(relativePath: { eq: "oreo-trail.png" }) {
//       childImageSharp {
//         gatsbyImageData
//       }
//     }
//   }
// `

export default InternshipsPage;