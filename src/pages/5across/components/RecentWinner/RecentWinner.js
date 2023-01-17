import React from "react";
import * as styles from "./RecentWinner.module.css";
import { Col, Row, Image } from "react-bootstrap";
import fiveAcrossBanner from "../../../../images/logos/5-across-logo-text.png";
import { GatsbyImage } from "gatsby-plugin-image";

const RecentWinner = ({ image, alt, winner }) => {
  return (
    <div className={styles.recentWinner}>
      <Row className={styles.box}>
        <div className={styles.boxInner}>
          <Col sm={10} md={6} className={styles.recentWinnerImg}>
            <GatsbyImage
              objectFit="contain"
              image={image}
              alt={alt}
            />
          </Col>
          <Col sm={12} md={6} className={styles.recentWinnerDetails}>
            <h1 className={styles.recentWinnerName}>{winner}</h1>
            <h2 className={styles.kentucky}>Kentucky</h2>
            <Image fluid className={styles.recentWinnerBanner} src={fiveAcrossBanner} />
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default RecentWinner;
