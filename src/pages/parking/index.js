import * as React from 'react'
import { Link } from "gatsby"
import Layout from '../../components/Layout/Layout'
import { Container, Row, Col } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'
import Title from '../../components/UI/Title/Title'
import Subtitle from '../../components/UI/Subtitle/Subtitle'
import BrandButton from "../../components/UI/BrandButton/BrandButton"
import "../../styles/main.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const ParkingPage = ({ data }) => {
  return (
    <Layout pageTitle="Parking">   

      {/* header */}
      <Container>
        <Row>
          <Col className="mx-auto my-5" xs={12} sm={{ offset: 1, span: 10}} md={{ offset: 3, span: 6}}>
            <Title className="text-center">PARKING</Title>
          </Col>
          <Col className="text-center mt-3" xs={12} sm={{ offset: 1, span: 10}} md={{ offset: 3, span: 6}}>
            {/* LEFT ALIGNED */}
            <p>
              After 5pm, free parking spaces are widely available downtown. However, during the day, it helps to be strategic. Here's a map and some general guidelines for parking near Awesome Inc.
            </p>
          </Col>
        </Row>
      </Container>

      {/* parking button */}
      <Container>
        <Row className="mb-5">
          <Col className="d-flex justify-content-center">
            {/* ICON IN BUTTON - <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span> */}
            <Link to="https://www.google.com/maps/d/u/0/viewer?ll=38.041577,-84.492438&hl=en&f=q&hq=parking+near+awesome+inc&source=s_q&spn=0.003333,0.004823&t=h&geocode&msa=0&z=18&ie=UTF8&hnear&mid=z5wCavIrp2b8.km_5j-S7N-EY">
              <BrandButton className='my-5'>
                Parking map&nbsp;
                <i class="fa-solid fa-user">
                  <FontAwesomeIcon icon={ faMapMarkerAlt } />
                </i>
              </BrandButton>
            </Link>
          </Col>
          {/* image */}
          <Col className="text-center" xs={12}>
            <StaticImage md={{ span: 6, offset: 3 }} src="../../images/parking-lot.jpeg" width="500" alt="parking lot at Awesome Inc"/>
          </Col>
          {/* where to park */}
          <Col md={{ span: 8, offset: 2 }}>
          <Subtitle className="mt-5">Do Park</Subtitle>
            <p> 
              <ul>
                <li>Spaces marked for Awesome Inc in the lot East of our building</li>
                <li>Free 2-hour parking spaces along East Vine Street</li>
                <li>Free full-day spaces on Short Street near Thoroughbred Park and Ransom Ave near Second Presbyterian church</li>
                <li>Deweese Street (PNC Bank) Parking Garage, ~$4/day</li>
                <li>Metered spaces on Water Street, Main Street, or Eastern Avenue</li>
              </ul>
            </p>
            <Subtitle className="mt-5">Don't Park</Subtitle>
            <p> 
              <ul>
                <li>Spaces marked for Carson's Restaurant or PPG Paints (East side of building)</li>
                <li>Spaces marked for Commerce Lexington, Northwestern Mutual, Tate/Hill/Jacobs Architects, or Awesome Inc Directors (West side of building)</li>
                <li>Spaces in the Main and Vine retail / residential complex</li>
                <li>In the "Loading Zone" on Main Street, directly in front of Awesome Inc</li>
              </ul>
            </p>
          </Col>
        </Row>
      </Container>

    </Layout>
  )
}

export default ParkingPage;