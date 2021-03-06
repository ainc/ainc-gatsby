import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import { Container, Col, Row, Image } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";

import * as styles from "./about.module.css";

import SocialMedia from "../../components/SocialMedia/SocialMedia";
import TeamMember from "../../components/TeamMember/TeamMember";
import OutlineDiv from "../../components/DivOutline/DivOutline";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../components/UI/BrandButton/BrandButton";

import coreValues from "../../images/about-core-values.png";

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <main>
        {/* About header */}
        <section className={styles.aboutHeader}>
          <Container>
            <Row>
              <Col className="col-9 col-sm-7">
                <div className={styles.heading}>
                  <Title className={`text-normal mt-5`}>
                    We exist to help people pursue their definition of awesome.
                  </Title>
                  <Subtitle className={`fs-6 mt-2 mb-5`}>
                    Awesome Inc was founded on the basis of the "give-first" mentality. Awesome Inc
                    started in 2009 and has grown to be the epicenter for anything related to
                    technology or business. We strive to make Lexington a better place to live and
                    work.
                  </Subtitle>
                  <BrandButton className={`text-nowrap`}>View Our Culture Book</BrandButton>
                </div>
              </Col>
            </Row>
            <Row>
              <Image className={`${styles.headerImg}`} src={coreValues} alt="core-values" />
              <Col className="col-sm-8 col-10">
                <BrandButton className={`text-nowrap`}>
                  Read About Our Core Values
                </BrandButton>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Accomplishments */}
        <section className={styles.accomplishment}>
          {data.allNodeAccomplishments.nodes.map((node) => (
            <Container>
              <Row>
                <Title className={`text-white text-center my-5`}>
                  {node.field_header.value}
                </Title>
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
        <section className="mt-5">
          <Container className={styles.whatWeDo}>
            <div>
              <h2 className={`text-uppercase text-center ${styles.headingTitle}`}>
                Learn More About What We Do
              </h2>
            </div>
            <Row>
              <Col sm={12} md={6} lg={4}>
                <OutlineDiv
                  subHeading="Coding School"
                  content="Awesome Inc U is our coding school. It is for both adults and children. We have taught over 1500 people to code with us."
                  btnText="Read More"
                />
              </Col>
              <Col sm={12} md={6} lg={4}>
                <OutlineDiv
                  subHeading="entrepreneurial Hub"
                  content="Our space and network and provide an opportunity for entrepreneurs to get connected to who they need to be successful."
                  btnText="Read More"
                />
              </Col>
              <Col sm={12} md={6} lg={4}>
                <OutlineDiv
                  subHeading="Apax Software"
                  content="Creating technology is one of our favorite things to do at Awesome Inc. Our software arm, APAX Software, can build enterprise solutions suited for anyone."
                  btnText="Visit Site"
                />
              </Col>
              <Col sm={12} md={6} lg={4}>
                <OutlineDiv
                  subHeading="Workspace"
                  content="We have a space for you to do your best work at. You can also host events at our space."
                  btnText="Read More"
                />
              </Col>
              <Col sm={12} md={6} lg={4}>
                <OutlineDiv
                  subHeading="Innovation Incubated"
                  content="Helping KY companies discover, test, and implement innovative ideas."
                  btnText="Read More"
                />
              </Col>
              <Col sm={12} md={6} lg={4}>
                <OutlineDiv
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
              <Col md={{ span: 10, offset: 2 }} lg={{span:10, offset: 1}} >
                <Row>
                  {data.allNodeTeamMember.nodes.map((node) => (
                    <Col
                      sm={4}
                      md={2}
                      lg={2}
                      className="mb-3 mt-3 mx-md-1 mx-lg-0 mt-lg-3 mb-lg-3 mt-md-2 mb-md-2 mt-sm-4 mb-sm-4 mb-xs-3 mt-xs-3 d-flex justify-content-center"
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
        <section>
          <div className={styles.inner}>
            <SocialMedia />
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
