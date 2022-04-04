import React, { useEffect } from "react";
import * as styles from "./Sponsors.module.css";
import { Row, Col } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import Title from "/src/components/UI/Title/Title"
// import Subtitle from "/src/components/UI/Subtitle/Subtitle"

const Sponsors = ({ title, presenting, supporting, alt }) => {
  useEffect(() => {
    console.log("title", title);
    console.log("presenting", presenting);
    console.log("supporting", supporting);
  }, [title, presenting, supporting]);

  return (
    <div className={styles.border}>
      <Title className={`mx-auto ${styles.header}`}>Thank you to our sponsors</Title>
      {/* Title Sponsor */}
      <div className={styles.sponsors}>
        <h3 className={styles.subHeader}>Title Sponsor</h3>
        <Row className={styles.gatsbyImgContainer}>
          {title ? (
            title.map((titleImage) => (
              <Col lg={3} md={4} sm={6} className={styles.gatsbyImgContainer}>
                <GatsbyImage
                  objectFit="contain"
                  imgClassName={styles.gatsbyImg}
                  image={titleImage}
                  alt={alt}
                />
              </Col>
            ))
          ) : (
            <Col lg={3} md={4} sm={6} className={styles.gatsbyImgContainer}>
              <GatsbyImage
                objectFit="contain"
                alt={alt}
                imgClassName={styles.gatsbyImg}
                image={title}
              />
            </Col>
          )}
        </Row>
      </div>

      {/* Presenting Sponsor */}
      <div className={styles.sponsors}>
        <h3 className={styles.subHeader}>Presenting Sponsor</h3>
        <Row className={styles.gatsbyImgContainer}>
          {presenting ? (
            presenting.map((presentingImage) => (
              <Col lg={3} md={4} sm={6} className={styles.gatsbyImgContainer}>
                <GatsbyImage
                  alt={alt}
                  objectFit="contain"
                  imgClassName={styles.gatsbyImg}
                  image={presentingImage}
                />
              </Col>
            ))
          ) : (
            <Col lg={3} md={4} sm={6} className={styles.gatsbyImgContainer}>
              <GatsbyImage
                objectFit="contain"
                alt={alt}
                imgClassName={styles.gatsbyImg}
                image={presenting}
              />
            </Col>
          )}
        </Row>
      </div>

      {/* Supporting Sponsor */}
      <div className={styles.sponsors}>
        <h3 className={styles.subHeader}>Supporting Sponsors</h3>
        <Row className={styles.gatsbyImgContainer}>
          {supporting ? (
            supporting.map((supportingImage) => (
              <Col lg={3} md={4} sm={6} className={styles.gatsbyImgContainer}>
                <GatsbyImage
                  alt={alt}
                  objectFit="contain"
                  imgClassName={styles.gatsbyImg}
                  image={supportingImage}
                />
              </Col>
            ))
          ) : (
            <Col lg={3} md={4} sm={6} className={styles.gatsbyImgContainer}>
              <GatsbyImage
                objectFit="contain"
                alt={alt}
                imgClassName={styles.gatsbyImg}
                image={presenting}
              />
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
};

export default Sponsors;
