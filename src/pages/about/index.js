import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
// import Title from '../../components/UI/Title/Title.js'
import * as styles from "./about.module.css";
import coreValues from "../../images/about-core-values.png";
import { GatsbyImage } from "gatsby-plugin-image";
import TeamMember from "./components/TeamMember/TeamMember";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import SocialMediaPhone from "../../images/social-media-phone.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <main>
        {/* About header */}
        <section className={styles.aboutHeader}>
          <Container>
            <Row>
              <Col className="col-10 col-sm-8">
                <div className={styles.lgxHeading}>
                  <h1 className={`${styles.headingTitle} ${styles.textDark}`}>
                    We exist to help people pursue their definition of awesome.
                  </h1>
                  <p className={`${styles.headingSubtitle} ${styles.textDark}`}>
                    Awesome Inc was founded on the basis of the "give-first" mentality. Awesome Inc
                    started in 2009 and has grown to be the epicenter for anything related to
                    technology or business. We strive to make Lexington a better place to live and
                    work.
                  </p>
                  <Button className={`text-nowrap ${styles.lgxBtn}`}>View Our Culture Book</Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Image className={`${styles.headerImg}`} src={coreValues} alt="core-values" />
              <Col className="col-sm-8 col-10">
                <Button className={`text-nowrap ${styles.lgxBtn}`}>
                  Read About Our Core Values
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Accomplishments */}
        <section className={styles.accomplishment}>
          {data.allNodeAccomplishments.nodes.map((node) => (
            <Container>
              <Row>
                <h2 className={`text-white text-center ${styles.headingTitle}`}>
                  {node.field_header.value}
                </h2>
                <Col lg={{ span: 8, offset: 2 }}>
                  <Row>
                    <Col
                      className={`align-items-md-end mb-sm-4 d-flex justify-content-md-center justify-content-sm-center ${styles.imageLinks}`}
                      md={4}
                      sm={12}
                    >
                      <a href="#" role="button">
                        <GatsbyImage
                          objectFit="scale-down"
                          className={styles.imageLinks}
                          image={
                            node.relationships.field_image_left.localFile.childImageSharp
                              .gatsbyImageData
                          }
                          alt={node.field_image_left.alt}
                          // style={{height: 100%}}
                        />
                      </a>
                    </Col>
                    <Col
                      className={`align-items-md-end mb-sm-4 d-flex justify-content-md-center justify-content-sm-center ${styles.imageLinks}`}
                      md={4}
                      sm={12}
                    >
                      <a href="#" role="button">
                        <GatsbyImage
                          objectFit="scale-down"
                          className={styles.imageLinks}
                          image={
                            node.relationships.field_image_center.localFile.childImageSharp
                              .gatsbyImageData
                          }
                          alt={node.field_image_center.alt}
                        />
                      </a>
                    </Col>
                    <Col
                      className={`align-items-md-start mb-sm-2 d-flex justify-content-md-top justify-content-sm-center ${styles.imageLinks}`}
                      md={4}
                      sm={12}
                    >
                      <a href="#" role="button">
                        <GatsbyImage
                          objectFit="scale-down"
                          image={
                            node.relationships.field_image_right.localFile.childImageSharp
                              .gatsbyImageData
                          }
                          className={styles.imageLinks}
                          alt={node.field_image_right.alt}
                        />
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          ))}
        </section>

        {/* What We Do */}
        <section className={styles.whatWeDo}>
          <Container>
            <Col className={`col-xs-12 `}>
              <h2 className={`text-uppercase text-center ${styles.headingTitle}`}>
                Learn More About What We Do
              </h2>
            </Col>
            <Row>
              <Col sm={12} md={6} lg={4}>
                <WhatWeDo
                  subHeading="Coding School"
                  content="Awesome Inc U is our coding school. It is for both adults and children. We have taught over 1500 people to code with us."
                  btnText="Read More"
                />
              </Col>
              <Col sm={12} md={6} lg={4}>
                <WhatWeDo
                  subHeading="entrepreneurial Hub"
                  content="Our space and network and provide an opportunity for entrepreneurs to get connected to who they need to be successful."
                  btnText="Read More"
                />
              </Col>
              <Col sm={12} md={6} lg={4}>
                <WhatWeDo
                  subHeading="Apax Software"
                  content="Creating technology is one of our favorite things to do at Awesome Inc. Our software arm, APAX Software, can build enterprise solutions suited for anyone."
                  btnText="Visit Site"
                />
              </Col>
              <Col sm={12} md={6} lg={4}>
                <WhatWeDo
                  subHeading="Workspace"
                  content="We have a space for you to do your best work at. You can also host events at our space."
                  btnText="Read More"
                />
              </Col>
              <Col sm={12} md={6} lg={4}>
                <WhatWeDo
                  subHeading="Innovation Incubated"
                  content="Helping KY companies discover, test, and implement innovative ideas."
                  btnText="Read More"
                />
              </Col>
              <Col sm={12} md={6} lg={4}>
                <WhatWeDo
                  subHeading="Culture"
                  content="Culture is so important to us. We want to share it with the community and invite everyone in on it."
                  btnText="Culture Book"
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Team */}
        <section className={styles.teamSection}>
          <Container>
            <Row>
              <h2 className={`text-uppercase text-center ${styles.headingTitle}`}>Meet The Team</h2>
              <Col md={{ span: 10, offset: 2 }}>
                <Row>
                  {data.allNodeTeamMember.nodes.map((node) => (
                    <Col 
                      sm={6}
                      md={3}
                      lg={2}
                      className="mb-3 mt-3 mx-md-3 mx-lg-2 mt-lg-3 mb-lg-3 mt-md-2 mb-md-2 mt-sm-4 mb-sm-4 mb-xs-3 mt-xs-3 d-flex justify-content-center"
                    >
                      <TeamMember
                        image={
                          node.relationships.field_memberpicture.localFile.childImageSharp
                            .gatsbyImageData
                        }
                        name={node.field_firstname.value}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Social Media */}
        <section className={styles.socialMedia}>
          <div className={styles.lgxInner}>
            <Container>
              <Row>
                <Col sm={12}>
                  <Row>
                    <Col sm={6} className={`d-flex justify-content-center justify-content-md-end col-xs-12  ${styles.socialLeft}`}>
                      <Image
                        src={SocialMediaPhone}
                        className={`${styles.imgResponsive}`}
                        alt="Social media phone gif"
                      />
                    </Col>
                    <Col sm={6} className={` d-flex justify-content-center justify-content-md-start ${styles.socialRight} col-xs-12 `}>
                      <div className={`${styles.lgxHeading}`}>
                        <h3 className={`text-wrap ${styles.headingTitle}`}>Let's Be Friends!</h3>
                        <h5 className={styles.headingSubtitle}> - Find us on social media - </h5>
                        <ul className={styles.socialLinks}>
                          <li>
                            <a href="https://twitter.com/awesomeinclex">
                              <FontAwesomeIcon icon={faTwitter} />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/awesomeinclex">
                              <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/school/awesome-inc/">
                              <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/awesomeinclex/">
                              <FontAwesomeIcon icon={faInstagram} />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.youtube.com/user/AincTelevision/featured">
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          {/* Triangle btm of screen before footer  */}
          {/* <div className={styles.socialSectionTriangle}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,100 51,101 50,0"></polygon> */}
          {/* middle value is 51 because of bleeding on smaller devices */}
          {/* <polygon points="100,100 50,100 50,0"></polygon>
            </svg>
          </div> */}
        </section>
      </main>
    </Layout>
  );
};

// sm={{span: 12, offset: 0}} md={{span: 12, offset: 1}} lg={{ span: 12, offset: 3 }} xl={{span: 8, offset: 4}}

{
  /* <FontAwesomeIcon className={styles.blogArrow} icon={faArrowRight} /> */
}

export const query_accomplishments = graphql`
  query accomplishments {
    allNodeAccomplishments {
      nodes {
        field_header {
          value
        }
        relationships {
          field_image_left {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
          field_image_center {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
          field_image_right {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
        field_image_center {
          alt
        }
        field_image_left {
          alt
        }
        field_image_right {
          alt
        }
      }
    }
    allNodeTeamMember {
      nodes {
        field_firstname {
          value
        }
        field_memberpicture {
          alt
        }
        relationships {
          field_memberpicture {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`;

export default AboutPage;
