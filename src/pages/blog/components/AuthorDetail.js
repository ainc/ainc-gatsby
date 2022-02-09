import React from "react";
import Mail from "../../../images/awesome-inc-space-banner.jpeg";
import * as styles from "../BlogPage.module.css";
import { Image, Card } from "react-bootstrap";

//Depending on usage, Image & Card.Subtitle will have differing classes. these will be props you just need to call from BlogPage.module.css as a styles import. For example, the AuthorDetail component for the blog page and blog posts. Styles. can be swapped for whatever title you want to give to the import from BlogPage.module.css

//BlogPage- Image class: styles.authorImg && Card.Subtitle: styles.date
//BlogPost- Image class: styles.authorImgBlack && Card.Subtitle: styles.dateBlack

const AuthorDetail = (props) => {
  return (
    <div className={styles.author}>
      <Image src={Mail} className={props.imgClass} alt="fff" />
      <div className={styles.authorInfo}>
        <h1 className={styles.authorName}>{props.author}</h1>
        <Card.Subtitle className={props.subClass}>{props.date}</Card.Subtitle>
      </div>
    </div>
  );
};

export default AuthorDetail;
