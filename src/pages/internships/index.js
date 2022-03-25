import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout/Layout'
import Diagonal from '../../components/Layout/Diagonal/Diagonal'
import TeamButton from '../../components/TeamButton/TeamButton'
import ImageOutline from '../../components/ImageOutline/ImageOutline'
import { Container, Row, Col } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'
import Title from '../../components/UI/Title/Title'
import BrandButton from '../../components/UI/BrandButton/BrandButton'
import { headerBackgroundAlignRight } from "./internships.module.css";
import '../../styles/main.scss'
import internWhy from '/src/images/intern-why.jpg';

const InternshipsPage = ({ data }) => {
  return (
    <Layout pageTitle="Internships">
      
      {/* Header section */}
      <Container fluid className={`mobile-hide-bg ${headerBackgroundAlignRight}`}>
        <Container className='mb-5'>
          <Row>
            <Col md={7}>
              <Title className="text-uppercase">Looking for an Internship?</Title>
              <p>
                If you’re looking to build your skillset with real projects while building the tech & startup community in Lexington, we’d love to chat. Did we mention we eat a *lot* of Oreos.
              </p>
              <BrandButton className='my-4'>Apply Now</BrandButton>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Why section */}
      <Diagonal bgImage={{internWhy}}>
        <Container>
          <Row>      
            <Col md={8}>
              <Title className='text-white text-uppercase my-5'>About Team Alpha</Title>
              <p className='text-white my-5'>
                Our interns, or Team Alpha as we prefer, are integral parts in helping us make Lexington a better place to live and work. We want you to bring your passion, curiosity, determination, and healthy disregard of the fear of failure. Together, we can grow the tech and startup ecosystem and we promise not to take ourselves too seriously while we’re at it.
              </p>
            </Col>
          </Row>
        </Container>
      </Diagonal>

      {/* Teams section */}
      <Container className='my-5'>
        <Row>
          <Title className='text-center text-uppercase my-5'>Find the Right Team for You</Title>
        </Row>
        <Row className='justify-content-center'>
          <Col md={6} lg={4}>
            <TeamButton img={ data.allFile.nodes[0] } imgAlt="Video internship">Video</TeamButton>
          </Col>
          <Col md={6} lg={4}>
            <TeamButton img={ data.allFile.nodes[1] } imgAlt="Development internship">Development</TeamButton>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md={6} lg={4}>
            <TeamButton img={ data.allFile.nodes[2] } imgAlt="Events and Marketing internship">Events + Marketing</TeamButton>
          </Col>
          <Col md={6} lg={4}>
            <TeamButton img={ data.allFile.nodes[3] } imgAlt="Design internship">Design</TeamButton>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col>
            <BrandButton className='my-5'>Apply Now</BrandButton>
          </Col>
        </Row>
      </Container>

      {/* Who We Look For section */}
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

      {/* Why Join section */}
      <Container fluid className='my-5 py-5' style={{backgroundColor:'#323232'}}>
        <Container>
          <Row className='justify-content-center'>
            <Col className='text-center my-auto' xs={12} md={5} lg={3}>
              <StaticImage src='../../images/question.png' alt="Question mark logo" width={250} />
            </Col>
            <Col className='my-2 d-block d-md-none' xs={12}/>
            <Col xs='auto'>
              <Title className='text-danger text-uppercase' style={{writingMode:'vertical-lr', transform:'rotate(180deg)', margin:'0px'}}>Why Join?</Title>
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

      {/* Our Team section */}
      <Container className='my-5'>
        <Row className='text-center'>
          <Col xs={6} md={3}>
            <ImageOutline>
              <StaticImage objectFit='cover' src='../../images/emilywehrle-wall.jpg' alt="Headshot of Emily Wehrle" />
            </ImageOutline>
          </Col>
          <Col xs={6} md={3}>
            <ImageOutline>
              <StaticImage objectFit='cover' src='../../images/kyleraney-wall.jpg' alt="Headshot of Kyle Raney" />
            </ImageOutline>
          </Col>
          <Col className='my-4 d-block d-md-none' xs={12}/>
          <Col xs={6} md={3}>
            <ImageOutline>
              <StaticImage objectFit='cover' src='../../images/jacquelinebenson-wall.jpg' alt="Headshot of Jacqueline Benson" />
            </ImageOutline>
          </Col>
          <Col xs={6} md={3}>
            <ImageOutline>
              <StaticImage objectFit='cover' src='../../images/garrettfahrbach-wall.jpg' alt="Headshot of GarrettFahrbach" />
            </ImageOutline>
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

export const query = graphql`
  query {
    allFile(filter: {relativePath: {in: ["intern-video.jpg", "intern-development.jpg", "intern-events-marketing.jpg", "intern-design.jpg"]}}) {
      nodes {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

export default InternshipsPage;