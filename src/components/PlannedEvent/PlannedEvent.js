import React from "react";
import { Col, Container, Image } from "react-bootstrap";
import * as styles from "./PlannedEvent.module.css";
import fiveAcrossBanner from "../../images/logos/5-across-logo-text.png";
import { GatsbyImage } from "gatsby-plugin-image";

const PlannedEvent = ({ date, location, title, alt, image }) => {
  //If image is not defined you will get the basic 5 Across event layout

  //Demo of how to access the image from drupal. The ? is required after field_winner_img because multiple values of null are returned which is an array, so the ? ques for the first value with an actual value
  // image={
  //   node.relationships.field_winner_img?.relationships.field_media_image
  //     .localFile.childImageSharp.gatsbyImageData
  // }

  //Formats date from the value drupal provides
  const dateFormatter = (date) => {
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    let newDate = new Date(date);
    let day = newDate.toLocaleString("en-US", options);
    return day;
  };

  const dateMonth = (date) => {
    let options = {
      month: "long",
    };
    let newMonth = new Date(date);
    let month = newMonth.toLocaleString("en-US", options);
    return month;
  };

  return (
    <div className={styles.container}>
      <div className={styles.nextEventInfo}>
        {!image ? (
          <Image className={styles.nextEventImg} src={fiveAcrossBanner} alt={alt} />
        ) : (
          <GatsbyImage
            objectFit="contain"
            imgClassName={styles.nextEventImg}
            image={image}
            alt={alt}
          />
        )}

        <div className={styles.eventDetails}>
          <p className={styles.date}>{dateFormatter(date)}</p>
          <p className={styles.location}>Location: {location}</p>
          {!image ? (
            <p className={styles.title}>{`5 Across - ${dateMonth(date)} Edition `}</p>
          ) : (
            <p className={styles.title}>{title}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlannedEvent;
