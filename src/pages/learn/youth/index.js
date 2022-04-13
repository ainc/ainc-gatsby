import * as React from 'react'

import { Container, Row, Col  } from 'react-bootstrap'
import { graphql              } from 'gatsby'
import { StaticImage          } from 'gatsby-plugin-image'

import Layout         from '../../../components/Layout/Layout'
import Title          from '../../../components/UI/Title/Title'
import BrandButton    from '../../../components/UI/BrandButton/BrandButton'
import PricingOption  from '../../../components/PricingOption/PricingOption'

import * as styles from './youth.module.scss'

const YouthPage = ({ data }) => {

  return (
    <Layout pageTitle="Coding Courses for Youth">
      
      {/* Header section */}
      <section className={styles.header}>
        <Container>
          <Row>
            <Col xs={8} sm={7}>
              <Title>Youth</Title>
              <h2>Coding Courses<br/>Ages 9 - 16</h2>
              <p>The coding club offers students an oppurtunity to learn how to code from professional software developers and to do it with like-minded peers.</p>
              <p>We inspire kids by introducing them to the awesome power of coding! Our students experience the joy of building their own games and apps in an engaging and safe space, whether in-person or online. And you'll love it too, knowing your kids are developing a practical skill, building a creative portfolio, and making great friends along the way.</p>
            </Col>
            <Col xs>
              <div>
                {/* insert form here */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why section */}
      <section className={styles.why}>
        <Container>
          {/* Why learn */}
          <Row>
            <Col className={`${styles.left} ${styles.image}`}> {/* make the phone smaller */}
              <StaticImage objectFit='contain' src='../../../images/youth-header-phone.png' alt="A phone using an app" />
            </Col>
            <Col className={styles.right}>
              <Title>Why should my child learn to code?</Title>
              <p>Technology is all around us. Whether you are an app developer or an English professor, you will utilize technology in your daily work. Awesome Inc exists to take your child's screen time and turn it into career-skill time. Our courses increase communication, public speaking, organization, and social skills in a fun learning environment.</p>
            </Col>
          </Row>
          {/* Fun */}
          <Row>
            <Col className={styles.left}>
              <Title>Coding should be fun!</Title>
              <p>Your kids will love learning to code while building video games, mobile apps, and websites!</p>
              <BrandButton>
                <a href='#join'>Join the Club</a>
              </BrandButton>
            </Col>
            <Col className={`${styles.right} ${styles.image}`}>
              <StaticImage objectFit='contain' src='../../../images/coding-fun.png' alt="Two cartoon characters dancing" />
            </Col>
          </Row>
          {/* Engaged */}
          <Row className={styles.engaged}>
            <Col className={`${styles.left} ${styles.image}`}>
              <StaticImage objectFit='contain' src='../../../images/laptop.png' alt="Two kids helping each other code" />
            </Col>
            <Col className={styles.right}>
              <Title>Keep your kids engaged</Title>
              <p>Your kids will have the support of our instructors - professional coders just a step, or a click away!</p>
              <BrandButton>Meet the Team</BrandButton>
            </Col>
          </Row>
          {/* Creative */}
          <Row>
            <Col className={styles.left}>
              <Title>Coders are creative</Title>
              <p>Coding is like a choose-your-own-adventure for kids who love technology! They’ll have a blast developing their skills as they move through the specially designed pathways our team has created.</p>
              <BrandButton>
                <a href='#join'>Join the Club</a>
              </BrandButton>
            </Col>
            <Col className={`${styles.right} ${styles.image}`}>
              <StaticImage objectFit='contain' src='../../../images/creative.png' alt="Cartoon character using a laptop" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Schedule section */}
      <section className={styles.schedule}>
        <Container>
          <Row>
            <Col xs={8} sm={{ span: 6, offset: 1 }}>
              <Title>Schedule</Title>
              <p>Students can sign up for two 90-minute long sessions each week. Our hours are Tuesday and Thursday, 4pm-7pm.</p>
              <BrandButton>
                <a href='#join'>Join the Club</a>
              </BrandButton>
            </Col>
            <Col xs={12} sm={5}>
              <StaticImage className={styles.studentImage} objectFit='contain' src='../../../images/youth-schedule.png' alt='Cartoon character drawing in a notebook' />
            </Col>
            <Col xs={12} sm={{ span: 5, offset: 1 }} md={{ span: 4, offset: 2 }}>
              <StaticImage objectFit='contain' src='../../../images/youth-schedule-tuesday.png' alt='Schedule for Tuesday sessions' />
            </Col>
            <Col xs={12} sm={5} md={4}>
              <StaticImage objectFit='contain' src='../../../images/youth-schedule-thursday.png' alt='Schedule for Thursday sessions' />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Camps section */}
      <section className={styles.camps}>
        <Container>
          <Row>
            <Col xs={12} sm={{ span: 6, offset: 1}}>
              <Title>Coding Club Camps</Title>
              <ul>
                <li>Immersive environment</li>
                <li>Builds confidence</li>
                <li>Find new friends with similar interests</li>
                <li>From coding to outdoor activities and hilarious games</li>
              </ul>
              <BrandButton>
                <a href='/weekofcode'>Find A Camp</a>
              </BrandButton>
            </Col>
            <Col xs={12} sm={4}>
              <StaticImage className={styles.image} objectFit='contain' src='../../../images/camps.png' alt='Cartoon teacher holding out OREOs for children' />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Join section */}
      <section className={styles.join} id='join'>
        <Container>

          <Row>
            <Title className='white'>Coding Club Memberships</Title>
          </Row>
          
          <Row>
            <Col className='my-3' xs={12} md={6} xl={3}>
              <PricingOption
                planLength        = "1 month"
                iconFile          = { data.allFile.nodes[0] }
                iconAlt           = 'Silver coin with Awesome Inc logo'
                price             = { 120 }
                billingFrequency  = "monthly"
                buttonText        = "Join the Club"
              />
            </Col>

            <Col className='my-3' xs={12} md={6} xl={3}>
              <PricingOption
                planLength        = "3 month"
                iconFile          = { data.allFile.nodes[1] }
                iconAlt           = 'Two gray coins with Awesome Inc logos'
                price             = { 329 }
                billingFrequency  = "quarterly"
                buttonText        = "Join the Club"
                buttonLink        = 'https://subscriptions.zoho.com/subscribe/03ecd1f5f1714d3cb3ee018041d15410a7726ba08b65d6ccad482bf477cf719e/coding-club-membership'
              />
            </Col>

            <Col className='my-3' xs={12} md={6} xl={3}>
              <PricingOption
                planLength        = "6 month"
                iconFile          = { data.allFile.nodes[2] }
                iconAlt           = 'Three blue coins with Awesome Inc logos'
                price             = { 600 }
                billingFrequency  = "bi-yearly"
                buttonText        = "Join the Club"
                freeMonths        = { 1 }
                mostPopular
              />
            </Col>

            <Col className='my-3' xs={12} md={6} xl={3}>
              <PricingOption
                planLength        = "12 month"
                iconFile          = { data.allFile.nodes[3] }
                iconAlt           = 'Three red coins with Awesome Inc logos'
                price             = { 1080 }
                billingFrequency  = "every 12 months"
                buttonText        = "Join the Club"
                freeMonths        = { 3 }
              />
            </Col>
          </Row>
        
        </Container>
      </section>

      {/* Questions section */}
      <section className={`text-center text-white ${styles.questions}`}>
        <Container>
          <h1 className='mb-5'>Still have questions?</h1>
          <BrandButton>See Our FAQs</BrandButton>
        </Container>
      </section>

    </Layout>
  )

}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {in: ["youth-1-month.png", "youth-3-month.png", "youth-6-month.png", "youth-12-month.png"]}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(height: 100)
        }
      }
    }
  }
`

export default YouthPage