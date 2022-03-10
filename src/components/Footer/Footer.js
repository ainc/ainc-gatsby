import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import BrandButton from '../UI/BrandButton/BrandButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube } from '@fortawsome/free-brands-svg-icons'
import * as styles from './Footer.module.scss'

const Footer = ({ data }) => {
  return(
    <Container fluid className={styles.footerBackground}>
      <Container>
      
        <Row>
          <Col xs md={4}>
            <Row className='justify-content-center'>
              <a className={styles.logoGap} href='/'>
                <StaticImage src='../../images/ainc-logo-text-triangle-layer-red.png' alt="Awesome Inc logo" />
              </a>
            </Row>
            <Row>
              <adress>
                <ul className={styles.infoList}>
                  <li className={styles.mainLine}>
                    348 E Main St, Lexington, KY
                  </li>
                  <li>
                    <FontAwesomeIcon className={styles.redIcon} icon={faEnvelope} />
                    <Link to='mailto:info@awesomeinc.org'>info@awesomeinc.org</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon className={styles.redIcon} icon={faPhone} />
                    <Link to='tel:8599604600'>859.960.4600</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon className={styles.redIcon} icon={faClock} />
                    Hours: Mon-Fri, 9am-5pm
                  </li>
                </ul>
              </adress>
            </Row>
            <Row>
              <Col>
                <BrandButton>Newsletter Sign Up</BrandButton>
              </Col>
            </Row>
          </Col>
          <Col xs={6} sm={6} md={2}>
            <h2 className={styles.infoListTitle}>Quicklinks</h2>
            <ul className={styles.infoList}>
              {/* <li><a href='/'>Careers</a></li>
              <li><a href='/'>Core Values</a></li>
              <li><a href='/'>Our Blog</a></li>
              <li><a href='/'>Programs & Events</a></li>
              <li><a href='/'>Innovation Incubated</a></li>
              <li><a href='/'>Community Yearbook</a></li>
              <li><a href='/'>Press</a></li>
              <li><a href='/'>Contact Us</a></li>
              <li><a href='/'>Internships</a></li>
              <li><a href='/'>Schedule a Tour</a></li>
              <li><a href='/'>Rent Space</a></li>
              <li><a href='/'>Parking</a></li>
              <li><a href='/'>Map</a></li> */}
              {
                data.allNodeFooterQuicklink.nodes.map((node) => (
                  <li><a href={node.field_link.uri}>{node.field_link.title}</a></li>
                ))
              }
            </ul>
          </Col>
          <Col xs={6} sm={6} md={2}>
            <h2 className={styles.infoListTitle}>Courses</h2>
            <ul className={styles.infoList}>
              <li><a href='/'>Bootcamp</a></li>
              <li><a href='/'>Coding Club</a></li>
              <li><a href='/'>Week of Code</a></li>
              <li><a href='/'>Intro to Web Dev</a></li>
            </ul>
          </Col>
          <Col xs sm={6} md={4}>
            <h2 className={styles.infoListTitle}>Sponsors</h2>
            <Row className={styles.sponsorsRow}>
              <Col xs={6}>
                <a href='https://www.windstream.net/'>
                  <StaticImage src='../../images/kinetic-logo.png' alt="Kinetic by Windstream sponsor" />
                </a>
              </Col>
              <Col xs={6}>
                <a href='https://apaxsoftware.com/'>
                  <StaticImage src='../../images/apax-software-logo.png' alt="APAX Software sponsor" />
                </a>
              </Col>
            </Row>
            <Row className={styles.sponsorsRow}>
              <Col xs={6}>
                <a href='https://www.thinkkentucky.com/'>
                  <StaticImage src='../../images/ky-innovation-logo.png' alt="Think KY sponsor" />
                </a>
              </Col>
              <Col xs={6}>
                <a href='https://www.commercelexington.com/'>
                  <StaticImage src='../../images/commerce-lexington-logo.png' alt="Commerce Lexington sponsor" />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      
      </Container>

      <Row>
        <Col>
          <ul className={styles.copyrightInlineList}>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Careers</a></li>
            <li><a href='/'>Privacy Policy</a></li>
            <li><a href='/'>Terms of Service</a></li>
          </ul>
        </Col>
        <Col>
          <ul className={styles.copyrightInlineList}>
            {/* <li><a href='/'><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href='/'><FontAwesomeIcon icon={faFacebookF} /></a></li>
            <li><a href='/'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
            <li><a href='/'><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href='/'><FontAwesomeIcon icon={faYoutube} /></a></li> */}
          </ul>
        </Col>
      </Row>

    </Container>
  )
}

export const query = graphql`
  query {
    allNodeFooterQuicklink {
      nodes {
        field_link {
          title
          uri
        }
      }
    }
  }
`


export default Footer