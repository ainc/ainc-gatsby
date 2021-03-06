import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import BrandButton from '../UI/BrandButton/BrandButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import * as styles from './Footer.module.scss'

const Footer = () => {

  const data = useStaticQuery(graphql`
    query {
      allNodeFooterQuicklink {
        nodes {
          field_link {
            title
            uri
          }
        }
      }
      allNodeFooterCourse {
        nodes {
          field_link {
            title
            uri
          }
        }
      }
      allNodeFooterSponsor {
        nodes {
          field_sponsor_link {
            uri
          }
          relationships {
            field_sponsor_image {
              relationships {
                field_media_image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
              field_media_image {
                alt
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Container fluid className={styles.footerBackground}>
      <Container>

        <Row>
          {/* Main column */}
          <Col xs md={4}>
            <Row className='justify-content-center'>
              <Link className={styles.aincLogoGap} href='/'>
                <StaticImage src='../../images/ainc-logo-text-triangle-layer-red.png' alt="Awesome Inc logo" />
              </Link>
            </Row>
            <Row className={styles.firstColRow}>
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
            </Row>
            <Row className={styles.firstColRow}>
              <BrandButton>Newsletter Sign Up</BrandButton>
            </Row>
          </Col>

          {/* Quicklinks column */}
          <Col xs={6} sm={6} md={2}>
            <h2 className={styles.infoListTitle}>Quicklinks</h2>
            <ul className={styles.infoList}>
              {
                data.allNodeFooterQuicklink.nodes.map((node) => (
                  <li><Link href={node.field_link.uri.startsWith("internal:") ? node.field_link.uri.slice(9) : node.field_link.uri}>
                    {node.field_link.title}
                  </Link></li>
                ))
              }
            </ul>
          </Col>

          {/* Courses column */}
          <Col xs={6} sm={6} md={2}>
            <h2 className={styles.infoListTitle}>Courses</h2>
            <ul className={styles.infoList}>
              {
                data.allNodeFooterCourse.nodes.map((node) => (
                  <li><Link href={node.field_link.uri.startsWith("internal:") ? node.field_link.uri.slice(9) : node.field_link.uri}>
                    {node.field_link.title}
                  </Link></li>
                ))
              }
            </ul>
          </Col>

          {/* Sponsors column */}
          <Col xs sm={6} md={4}>
            <h2 className={styles.infoListTitle}>Sponsors</h2>
            <Row className={styles.sponsorsRow}>
              {
                data.allNodeFooterSponsor.nodes.map((node) => (
                  <Col xs={6}>
                    <Link href={node.field_sponsor_link.uri}>
                      <GatsbyImage className='my-2'
                        image={getImage(node.relationships.field_sponsor_image.relationships.field_media_image.localFile)}
                        alt={node.relationships.field_sponsor_image.field_media_image.alt}
                      />
                    </Link>
                  </Col>
                ))
              }
            </Row>


          </Col>
        </Row>

        {/* Bottom row */}
        <Row className={styles.bottomRow}>
          <Col>
            <ul className={styles.copyrightInlineList}>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/careers'>Careers</Link></li>
              <li><Link to='/privacy'>Privacy Policy</Link></li>
              <li><Link to='/terms'>Terms of Service</Link></li>
            </ul>
          </Col>
          <Col>
            <ul className={styles.socialsInlineList}>
              <li><Link to='https://twitter.com/awesomeinclex'><FontAwesomeIcon icon={faTwitter} /></Link></li>
              <li><Link to='https://www.facebook.com/awesomeinclex'><FontAwesomeIcon icon={faFacebookF} /></Link></li>
              <li><Link to='https://www.linkedin.com/school/awesome-inc/'><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
              <li><Link to='https://www.instagram.com/awesomeinclex/'><FontAwesomeIcon icon={faInstagram} /></Link></li>
              <li><Link to='https://www.youtube.com/user/AincTelevision/featured'><FontAwesomeIcon icon={faYoutube} /></Link></li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Container>
  )
  
}

export default Footer